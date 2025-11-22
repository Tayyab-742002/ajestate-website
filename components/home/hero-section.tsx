"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1758448501006-42ef007449ff?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1668911494802-291743616f6a?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1668911495278-487418f8f72d?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1635108200313-40f75b86bc94?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1635108201747-976f7d4ba453?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1668911494256-becf9fea265b?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1689574666903-ec23039b3558?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1668911492541-4bff587aeaf2?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1661103517104-9d118ccad126?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1668911494256-becf9fea265b?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1599809275695-5e96ca83bc43?w=400&h=400&fit=crop&q=80",
  },
];

const shuffle = (array: typeof squareData) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full overflow-hidden bg-transparent"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());
  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-4 h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px] gap-1.5 sm:gap-2 bg-transparent max-w-2xl mx-auto lg:max-w-full">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16 sm:pt-20 lg:pt-12 pb-12 sm:pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-20 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] py-6 sm:py-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-2 sm:pt-0 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <span className="inline-block mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest border-l-4 border-primary pl-3 sm:pl-4">
              Pakistan&apos;s Premier Real Estate Platform
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 sm:mb-8 leading-[1.05] tracking-tight font-heading">
              Leading Property
              <br />
              Solutions by
              <br />
              A.J.Estate
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to A.J.Estate, Pakistan&apos;s premier real estate platform
              dedicated to helping you buy, sell, and invest with confidence.
              Discover the best residential, commercial, and investment
              opportunities across Karachi, Lahore, Islamabad, and beyond. With
              verified listings, expert guidance, and a customer-first approach,
              we make every real estate Pakistan journey seamless and secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-black font-bold text-sm sm:text-base transition-all duration-200"
              >
                Talk to an Advisor
                <ArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-200"
              >
                Browse Listings
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Shuffle Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto"
          >
            <ShuffleGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

