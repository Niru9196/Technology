"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between font-manrope">
                <LogoSection />
                <NavRightSide />
            </nav>
        </header>
    );
};

const LogoSection = () => (
    <div className="flex items-center">
        <Image
            src="/Logo.png"
            alt="Company Logo"
            width={140}
            height={50}
            quality={75}
        />
    </div>
);

const NavRightSide = () => (
    <div className="flex items-center space-x-6">
        <ContactButton />
        <LinkedInIcon />
        <LanguageSelectorIcon />
    </div>
);

const ContactButton = () => (
    <button className="bg-[#5CD6FF] text-black font-medium px-4 py-3 rounded-full transition hidden md:block">
        Contact Us
    </button>
);

const LinkedInIcon = () => (
    <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-black hover:text-[#0A66C2] transition"
    >
        <FaLinkedinIn size={24} />
    </a>
);

const LanguageSelectorIcon = () => (
    <div className="text-sm font-semibold text-gray-800 cursor-pointer">
        <FaLanguage size={24} />
    </div>
);

export default Navbar;
