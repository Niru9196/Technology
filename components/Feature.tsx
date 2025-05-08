"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./features/FeatureCard";
import SectionHeading from "./features/SectionHeading";

const features = [
    {
        imageSrc: "/Car.png",
        alt: "Modern Vehicle",
        title: "Passenger Vehicles",
        desc: "Comfort and performance at the forefront of innovation.",
    },
    {
        imageSrc: "/Car.png",
        alt: "Advanced Design",
        title: "Commercial vehicles",
        desc: "Advancing Nonwoven engineering for heavy-duty vehicles.",
    },
];

export default function FeatureSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const headingY = useTransform(scrollYProgress, [0, 0.1], ["10%", "5%"]);
    const headingScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center pt-10 px-4 overflow-hidden"
            aria-labelledby="feature-section-heading"
        >
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none z-0"
            />

            <SectionHeading
                y={headingY}
                scale={headingScale}
                text={
                    <>
                        Evolving the drive with <strong>360-degree</strong>{" "}
                        nonwoven solutions
                    </>
                }
            />

            <div
                className="w-full max-w-7xl h-[550px] mt-24 overflow-y-scroll snap-y snap-mandatory space-y-10 p-4 rounded-xl bg-gray-800/70 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-gray-700/40 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
                role="list"
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} delay={index * 0.2} />
                ))}
            </div>
        </section>
    );
}
