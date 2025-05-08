"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeatureCard({ imageSrc, alt, title, desc, delay = 0 }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const CardWrapper = isMobile ? "div" : motion.div;

    return (
        <CardWrapper
            role="listitem"
            className="relative snap-start flex flex-col md:flex-row h-auto md:h-[450px] rounded-2xl shadow-2xl bg-gray-700 group overflow-hidden"
            {...(!isMobile && {
                initial: { opacity: 0, y: 80 },
                whileInView: { opacity: 1, y: 0 },
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay,
                },
            })}
        >

            <div className="w-full md:w-[70%] relative flex items-center justify-center bg-black/20 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-purple-500/10 blur-2xl rounded-full z-0" />
                <div className="relative w-[90%] aspect-video md:aspect-auto md:h-[90%] rounded-xl overflow-hidden z-10 shadow-lg">
                    <Image
                        src={imageSrc}
                        alt={alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 70vw"
                        priority
                    />
                </div>
            </div>

            <div className="w-full md:w-[30%] flex flex-col justify-center px-6 py-6 text-white z-10 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="text-sm md:text-base text-gray-300 mt-3">
                    {desc}
                </p>
            </div>
        </CardWrapper>
    );
}
