"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#fff] text-black px-4 py-28 font-manrope relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-10 relative z-10">
                <div className="text-center">
                    <Image
                        src="/Logo.png"
                        alt="Company Logo"
                        width={160}
                        height={60}
                    />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm md:text-base">
                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider">
                            Applications
                        </h3>
                        <ul className="space-y-5 text-sm font-medium text-[#000000B2]">
                            <li>Apparel</li>
                            <li>Automotive</li>
                            <li>Filtration</li>
                            <li>Customised Solutions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-5 text-sm font-medium text-[#000000B2]">
                            <li>Innovation</li>
                            <li>Global Competency</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider">
                            More
                        </h3>
                        <ul className="space-y-5 text-sm font-medium text-[#000000B2]">
                            <li>Careers</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider">
                            Follow Us
                        </h3>
                        <ul className="space-y-5 text-sm font-medium text-[#000000B2]">
                            <li>
                                <a href="#" aria-label="Twitter">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Medium">
                                    Medium
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm pt-6 relative z-10 max-w-4xl">
                    <span className="mb-2 sm:mb-0 text-[#000000B2]">
                        ©2023. All Rights Reserved.
                    </span>
                    <address className="not-italic md:text-right text-[#000000B2]">
                        Supreme House: 110, 16th Road, Chembur, Mumbai – 400071
                    </address>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-0">
                <Image
                    src="/Group.png"
                    alt="Decorative element"
                    width={300}
                    height={300}
                />
            </div>
        </footer>
    );
}
