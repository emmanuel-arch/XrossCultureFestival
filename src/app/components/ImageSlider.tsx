"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ImageSlider({ className = "" }: { className?: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Resolve which image files actually exist by attempting to load them (handles mixed-case .jpg/.JPG in /public)
  useEffect(() => {
    let mounted = true;

    function tryLoad(src: string): Promise<boolean> {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    }

    async function resolveImages() {
      const nums = Array.from({ length: 11 }, (_, i) => i + 1);
      const found: string[] = [];

      for (const n of nums) {
        const lower = `/${n}.jpg`;
        const upper = `/${n}.JPG`;
        // Prefer lowercase if present; otherwise try uppercase
        // (avoids HEAD requests which can be blocked/405 on some hosts).
        // eslint-disable-next-line no-await-in-loop
        const lowerOk = await tryLoad(lower);
        if (lowerOk) {
          found.push(lower);
          continue;
        }
        // eslint-disable-next-line no-await-in-loop
        const upperOk = await tryLoad(upper);
        if (upperOk) {
          found.push(upper);
        }
      }

      if (!mounted) return;
      // If none found, still fall back to lowercase paths (maintains previous behavior)
      setImages(found.length ? found : Array.from({ length: 11 }, (_, i) => `/${i + 1}.jpg`));
    }

    resolveImages();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // only start autoplay once images are resolved
    if (images.length === 0) return;
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // Pause autoplay when tab/window is hidden to save resources
  useEffect(() => {
    if (images.length === 0) return;
    const onVis = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  function start() {
    stop();
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
  }

  function stop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  if (images.length === 0) {
    // show a visible fallback image while we probe for files
    const fallbackSrc = '/1.jpg';
    return (
      <div className={`image-slider relative w-full min-h-screen h-full ${className}`}>
        <div className={`absolute inset-0`}> 
          <Image src={fallbackSrc} alt="background fallback" fill sizes="100vw" className="object-center object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className={`image-slider relative w-full min-h-screen h-full overflow-hidden ${className}`} onMouseEnter={stop} onMouseLeave={start}>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`absolute inset-0 transition-opacity duration-900 ease-linear ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          aria-hidden={i !== index}
        >
          <Image src={src} alt={`slide ${i + 1}`} fill sizes="100vw" className="object-center object-cover transition-transform duration-[12000ms] ease-linear" priority={i === 0} />
        </div>
      ))}

      {/* controls */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2 z-30">
        {images.map((_, i) => (
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
