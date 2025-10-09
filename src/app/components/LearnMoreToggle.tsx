"use client";

import { useEffect, useState } from "react";

export default function LearnMoreToggle() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when hero is at least 10% visible consider it visible
          setHeroVisible(entry.intersectionRatio > 0.1);
        });
      },
      { root: null, threshold: [0, 0.1, 0.5, 1] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* bottom-center button visible while heroVisible */}
      {heroVisible && (
        <a href="#about" className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-40 lg:bottom-8">
          <button className="inline-flex items-center justify-center w-44 h-12 rounded-sm bg-orange-500 text-black font-semibold shadow-2xl hover:scale-105 transition-transform border border-orange-600" style={{ transform: 'translateY(-4px)' }}>
            Learn more
          </button>
        </a>
      )}

      {/* fixed top button appears when hero is NOT visible */}
      <a
        href="#about"
        className={`fixed left-1/2 top-4 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${
          heroVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button className="inline-flex items-center justify-center w-44 h-12 rounded-sm bg-orange-500 text-black font-semibold shadow-md border border-orange-600 hover:brightness-105 transition">
          Learn more
        </button>
      </a>
    </>
  );
}
