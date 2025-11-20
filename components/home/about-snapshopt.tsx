"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AboutSnapshotProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
  stats?: { value: string; label: string }[];
  ctaText?: string;
  ctaHref?: string;
}

const AboutSnapshot: React.FC<AboutSnapshotProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
  stats,
  ctaText,
  ctaHref,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden">
      <div className="container max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-12 sm:gap-14 lg:gap-16 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`flex flex-col items-start gap-6 max-w-2xl md:max-w-[600px] mx-auto md:mx-0 text-center md:text-left ${textOrderClass}`}
            variants={itemVariants as Variants}
          >
            <div className="w-12 h-1 bg-primary"></div>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
              {title}
            </h2>

            <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-4">
              {description}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full pt-6 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200 mt-4 mx-auto md:mx-0"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            )}
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={`relative mt-6 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-md md:max-w-[520px] lg:max-w-[550px]`}
            variants={itemVariants as Variants}
          >
            {/* Decorative Background Element */}
            <motion.div
              className="absolute w-[240px] h-[260px] sm:w-[320px] sm:h-[340px] md:w-[460px] md:h-[480px] bg-primary/5 z-0"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-15%",
                right: reverseLayout ? "-15%" : "auto",
                transform: reverseLayout
                  ? "translate(0, 0)"
                  : "translateY(10%)",
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${secondaryImageSrc})`,
                }}
              />
            </motion.div>

            {/* Main Image Card */}
            <motion.div
              className="relative w-full h-[320px] sm:h-[420px] md:h-[580px] lg:h-[650px] bg-white/5 backdrop-blur-sm border border-white/10 z-10 overflow-hidden"
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="p-0 h-full">
                <div
                  className="h-full relative"
                  style={{
                    backgroundSize: "100% 100%",
                  }}
                >
                  {/* Primary Image */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${primaryImageSrc})`,
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(253,185,19,0.2) 0%, rgba(253,185,19,0) 100%)",
        }}
      />
    </section>
  );
};

export const AboutSnapshotSection = () => {
  return (
    <>
      <AboutSnapshot
        title="Why Choose A.J.Estate?"
        description={
          <>
            <p>
              At A.J.Estate, we combine local expertise with innovative insights
              to deliver the best real estate Pakistan experience. From verified
              listings to market intelligence, our advisors guide every decision
              with clarity and confidence.
            </p>
            <p>
              Whether you&apos;re exploring property buying Pakistan for the
              first time or growing a property investment Pakistan portfolio, we
              stay by your side with transparent processes, negotiation support,
              and after-sale care trusted by thousands of clients.
            </p>
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=1000&fit=crop&q=80"
        secondaryImageSrc="https://images.unsplash.com/photo-1486308510493-aa64833637b9?w=800&h=1000&fit=crop&q=80"
        reverseLayout={false}
        stats={[
          { value: "5K+", label: "Verified Listings" },
          { value: "1K+", label: "Happy Buyers" },
          { value: "15+", label: "Expert Advisors" },
        ]}
        ctaText="Learn More About Us"
        ctaHref="/about"
      />
    </>
  );
};

export default AboutSnapshot;

