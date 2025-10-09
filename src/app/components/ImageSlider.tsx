"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CANDIDATES = Array.from({ length: 11 }, (_, i) => [`/${i + 1}.jpg`, `/${i + 1}.JPG`]).flat();

export default function ImageSlider({ className = "" }: { className?: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Resolve which candidate files actually exist (HEAD request) and use them.
  useEffect(() => {
    let mounted = true;

    async function resolveImages() {
      try {
        const results = await Promise.all(
          CANDIDATES.map(async (src) => {
            try {
              const res = await fetch(src, { method: "HEAD" });
              if (res.ok) return src;
            } catch (e) {
              // ignore
            }
            return null;
          })
        );

        const found = results.filter(Boolean) as string[];

        // If none found, fall back to lowercase jpgs (keep the original behavior)
        const fallback = Array.from({ length: 11 }, (_, i) => `/${i + 1}.jpg`);

        if (mounted) setImages(found.length ? found : fallback);
      } catch (err) {
        if (mounted) setImages(Array.from({ length: 11 }, (_, i) => `/${i + 1}.jpg`));
      }
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
    // nothing to show yet
    return <div className={`image-slider relative w-full h-full ${className}`} />;
  }

  return (
    <div className={`image-slider relative w-full h-full overflow-hidden ${className}`} onMouseEnter={stop} onMouseLeave={start}>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`absolute inset-0 transition-opacity duration-900 ease-linear ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          aria-hidden={i !== index}
        >
          <Image src={src} alt={`slide ${i + 1}`} fill className="object-center object-contain sm:object-cover transition-transform duration-[12000ms] ease-linear" priority={i === 0} />
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
