"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ scale, y, text }) {
    return (
        <motion.h1
            id="feature-heading"
            className="text-3xl sm:text-5xl z-10 tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 max-w-[800px] leading-14"
            style={{ scale, y }}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {text}
        </motion.h1>
    );
}
