"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHRASES = [
  "ARE YOU READY FOR THE NEXT",
  "EXPERIENCE GLOBAL SOUNDS",
  "JOIN THE CULTURE CELEBRATION",
];

export default function HeroRotator() {
  // Typewriter state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const current = PHRASES[phraseIndex];

    if (!isDeleting) {
      // typing
      if (displayed.length < current.length) {
        timeout = window.setTimeout(() => {
          setDisplayed((d) => d + current.charAt(d.length));
        }, 80);
      } else {
        // pause at full phrase then start deleting
        timeout = window.setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      // deleting
      if (displayed.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayed((d) => d.slice(0, -1));
        }, 40);
      } else {
        // move to next phrase
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <div className="max-w-3xl">
      <div className="mb-4 h-8 sm:h-10">
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-widest uppercase mb-0 transition-all duration-200 ease-out`}
          aria-live="polite"
        >
          {displayed}
          <span className="inline-block w-1 h-6 align-middle bg-white ml-1 animate-pulse" aria-hidden />
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
