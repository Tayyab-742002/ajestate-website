"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Discover & Align",
    description: "Share your goals and explore verified listings",
    details:
      "We map budget, timelines, and preferred cities to deliver curated opportunities with transparent pricing.",
  },
  {
    id: 2,
    number: "02",
    title: "Verify & Evaluate",
    description: "Due diligence, valuations, and feasibility",
    details:
      "Legal, technical, and market checks confirm titles, NOCs, rental yields, and appreciation potential.",
  },
  {
    id: 3,
    number: "03",
    title: "Negotiate & Finance",
    description: "Structure the offer and secure funding",
    details:
      "Advisors negotiate terms, coordinate deposits, and connect you with mortgage partners for quick approvals.",
  },
  {
    id: 4,
    number: "04",
    title: "Close & Support",
    description: "Finalize paperwork and handover",
    details:
      "We manage registration, possession, and post-sale support for move-ins, leasing, or investment portfolios.",
  },
];

export const HowItWorks = () => {
  const countImages = [
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-w3tfkQ210upUMSotrYRu5dJExwvno4.png&w=320&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SkUK3hw8iUeTtV3ykfIY9vRS5kLuBb.png&w=320&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-eFBuNm0r8VaMWxy4MM6UzQWVsUvNz7.png&w=320&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-RItzmUmXDJtPY2YOnwJ38jr4Ft76YM.png&w=320&q=75",
  ];

  return (
    <section className="relative bg-black py-32">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          subtitle="How it works"
          title="Your Real Estate Journey"
          variant="dark"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const decorativeImage = countImages[index % countImages.length];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Main Card */}
                <div className="relative bg-white/5 border border-white/10 p-8 min-h-[280px] flex flex-col overflow-hidden">
                  {/* Number */}
                  <div className="text-[120px] font-bold leading-none text-white/5 absolute top-6 right-6">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                      Step {step.number}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      <span className="font-heading">{step.title}</span>
                    </h3>

                    <p className="text-sm text-white/60 mb-6">
                      {step.description}
                    </p>

                    {/* Accent line */}
                    <div className="w-12 h-px bg-primary mt-auto"></div>
                  </div>

                  {/* Decorative Image */}
                  {decorativeImage && (
                    <motion.img
                      src={decorativeImage}
                      alt={`${step.title} illustration`}
                      className="absolute -right-8 -bottom-8 w-40 h-40 object-contain opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                    />
                  )}
                </div>

                {/* Floating Detail Card - Appears after animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: -12, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-black border-2 border-primary px-5 py-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  <p className="text-xs text-white/80 leading-relaxed text-center">
                    {step.details}
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-primary rotate-45"></div>
                </motion.div>

                {/* Connector Line (not for last item on desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px bg-white/20"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12"
        >
          <div>
            <p className="text-white/60 text-lg mb-2">
              Start your property journey today
            </p>
            <p className="text-white text-sm">
              Work with A.J.Estate advisors from discovery to handover
            </p>
          </div>
          <a
            href="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
