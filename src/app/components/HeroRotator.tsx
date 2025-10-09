"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHRASES = [
  "ARE YOU READY FOR THE NEXT",
  "EXPERIENCE GLOBAL SOUNDS",
  "JOIN THE CULTURE CELEBRATION",
];

export default function HeroRotator() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      // fade out, change, fade in
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % PHRASES.length);
        setVisible(true);
      }, 400);
    }, 3500);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="max-w-3xl">
      <div className="mb-4 h-6 sm:h-7">
        <p
          className={`text-sm sm:text-base tracking-widest uppercase mb-0 transition-all duration-500 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
          aria-live="polite"
        >
          {PHRASES[idx]}
        </p>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-orange-300 transform transition-transform duration-600"
        style={{ willChange: 'transform' }}>
        CROSS CULTURE FESTIVAL
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-start mt-4">
        <Link href="/tickets" className="inline-block rounded-full bg-white text-black px-6 py-3 font-semibold text-sm sm:text-base shadow-lg hover:scale-[1.02] transition-transform">
          GET YOUR TICKETS NOW
        </Link>

      </div>
    </div>
  );
}
