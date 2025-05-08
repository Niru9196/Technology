"use client";

import React from "react";

export default function ContactUsForm() {
    return (
        <section
            className="w-full px-4 py-24 bg-[#0067B1] text-white"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 font-manrope">
                <article className="w-full md:w-1/2">
                    <h1
                        id="contact-heading"
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Get in Touch
                    </h1>
                    <hr className="w-14 h-1 bg-white border-0 rounded mb-6" />

                    <p className="text-lg md:text-2xl font-medium mb-6">
                        For general enquiries
                    </p>

                    <address className="not-italic text-base md:text-xl space-y-6">
                        <div>
                            <strong>Address:</strong>
                            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
                        </div>
                        <div>
                            <strong>Phone:</strong>
                            <p>
                                <a href="tel:+912225208822">+91 22 25208822</a>
                            </p>
                        </div>
                        <div>
                            <strong>Email:</strong>
                            <p>
                                <a href="mailto:info@supremegroup.co.in">
                                    info@supremegroup.co.in
                                </a>
                            </p>
                        </div>
                    </address>
                </article>

                <form
                    className="w-full md:w-1/2 space-y-6"
                    aria-label="Contact form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Form submitted!");
                    }}
                >
                    {[
                        {
                            id: "fullName",
                            type: "text",
                            placeholder: "Full Name",
                        },
                        { id: "email", type: "email", placeholder: "Email" },
                        { id: "subject", type: "text", placeholder: "Subject" },
                    ].map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id} className="sr-only">
                                {field.placeholder}
                            </label>
                            <input
                                {...field}
                                name={field.id}
                                required
                                className="w-full bg-transparent border-b placeholder-white text-white py-2 focus:outline-none font-semibold text-xl"
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Message"
                            required
                            className="w-full bg-transparent border-b border-white/60 placeholder-white text-white py-2 resize-y focus:outline-none font-semibold text-xl"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="px-11 py-3 bg-white text-black font-semibold rounded-3xl text-base hover:bg-gray-100 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
