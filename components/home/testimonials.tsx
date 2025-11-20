"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../ui/section-header";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "A.J.Estate found us a verified Clifton apartment in days and negotiated a price 8% below market.",
    by: "Ayesha, Product Lead — Karachi",
    imgSrc: "https://i.pravatar.cc/150?img=21",
  },
  {
    tempId: 1,
    testimonial:
      "Their property valuation Pakistan desk helped us refinance our DHA Lahore home without delays.",
    by: "Omar, CFO — Lahore",
    imgSrc: "https://i.pravatar.cc/150?img=22",
  },
  {
    tempId: 2,
    testimonial:
      "We scaled our rental portfolio with real estate services Pakistan buyers actually trust.",
    by: "Mehak, Founder — Islamabad",
    imgSrc: "https://i.pravatar.cc/150?img=23",
  },
  {
    tempId: 3,
    testimonial:
      "From title checks to handover, A.J.Estate handled our Bahria Town plot flawlessly.",
    by: "Sohail, Architect — Karachi",
    imgSrc: "https://i.pravatar.cc/150?img=24",
  },
  {
    tempId: 4,
    testimonial:
      "Their real estate investment advice plugged us into a Gwadar JV that now pays double-digit yields.",
    by: "Natasha, Investor — Dubai",
    imgSrc: "https://i.pravatar.cc/150?img=25",
  },
  {
    tempId: 5,
    testimonial:
      "Our corporate leasing was stuck for months; A.J.Estate secured an office in Blue Area in two weeks.",
    by: "Bilal, COO — FinServe",
    imgSrc: "https://i.pravatar.cc/150?img=26",
  },
  {
    tempId: 6,
    testimonial:
      "They paired us with a mortgage partner who approved our loan in 48 hours with zero hassle.",
    by: "Hania, Marketing Director — Lahore",
    imgSrc: "https://i.pravatar.cc/150?img=27",
  },
  {
    tempId: 7,
    testimonial:
      "Market insights from A.J.Estate told us exactly when to exit our Islamabad retail unit.",
    by: "Taimur, Retail Operator — Islamabad",
    imgSrc: "https://i.pravatar.cc/150?img=28",
  },
  {
    tempId: 8,
    testimonial:
      "Their legal desk saved our Korangi warehouse purchase by catching a missing NOC.",
    by: "Rida, Supply Chain Lead — Karachi",
    imgSrc: "https://i.pravatar.cc/150?img=29",
  },
  {
    tempId: 9,
    testimonial:
      "A.J.Estate’s tenant screening keeps our serviced apartments at 96% occupancy year-round.",
    by: "Shan, Hospitality Founder — Murree",
    imgSrc: "https://i.pravatar.cc/150?img=30",
  },
  {
    tempId: 10,
    testimonial:
      "They structured a payment plan on a Lahore high-rise so we could invest without cash flow stress.",
    by: "Uzair, Portfolio Manager — Lahore",
    imgSrc: "https://i.pravatar.cc/150?img=31",
  },
  {
    tempId: 11,
    testimonial:
      "Every listing we viewed had complete paperwork—no surprises, just confident decisions.",
    by: "Farah, Entrepreneur — Islamabad",
    imgSrc: "https://i.pravatar.cc/150?img=32",
  },
];

type Testimonial = (typeof testimonials)[number];

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-white text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-neutral-200 border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-neutral-200 border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          subtitle="Client Stories"
          title="Trusted by Buyers, Sellers & Investors"
          variant="light"
          align="center"
        />
        <p className="text-base sm:text-lg text-text-secondary text-center max-w-3xl mx-auto mt-4">
          Hear from Pakistan&apos;s most active homeowners, developers, and
          portfolio managers on why they rely on A.J.Estate for every property
          milestone.
        </p>
        <div className="mt-16">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
};

