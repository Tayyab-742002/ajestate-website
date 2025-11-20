"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/cta-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center justify-center" 
          >
            <h2 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Start Your Property Journey Today
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Ready to find your dream property or sell your current one? Talk to
              A.J.Estate&apos;s expert advisors or explore our services to see why
              buyers, sellers, and investors call us Pakistan&apos;s trusted real
              estate partner.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col mt-5 sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA */}
              <Link
                href="/contact?type=consultation"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-black font-bold text-lg transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
