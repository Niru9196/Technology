"use client";

import React from "react";

export default function Hero() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-500 text-white font-manrope text-center px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-lg sm:text-[1.38rem] mb-6">
                    Performance in motion
                </h1>
                <p className="text-3xl sm:text-5xl md:text-6xl">
                    <span className="font-semibold leading-[4rem] sm:leading-[5rem]">
                        Soft Trims and NVH Solutions
                    </span>
                    <br />
                    <span className="font-medium">for seamless rides</span>
                </p>
            </div>
        </main>
    );
}
