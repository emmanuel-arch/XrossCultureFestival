"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const IMAGES = Array.from({ length: 11 }, (_, i) => `/${i + 1}.jpg`);

export default function ImageSlider({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    stop();
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
  }

  function stop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className={`image-slider relative w-full h-full ${className}`} onMouseEnter={stop} onMouseLeave={start}>
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-900 ease-linear ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image src={src} alt={`slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
        </div>
      ))}

      {/* controls */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2 z-30">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-110" : "bg-white/40"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
