"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import HeroRotator from "./components/HeroRotator";
import SocialBar from "./components/SocialBar";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Background slider */}
      <div className="absolute inset-0 filter brightness-75" aria-hidden>
        <ImageSlider className="h-full w-full" />
      </div>

      <Header />
      <SocialBar />

      {/* Hero: left-aligned beneath the logo, fills the viewport */}
      <main className="relative z-10 flex items-start justify-start px-6 text-left h-screen pt-36 sm:pt-44 md:pt-52 pl-8 sm:pl-10 md:pl-12">
        <HeroRotator />
      </main>

      {/* About section */}
      <section id="about" className="relative z-10 bg-white text-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About the Festival</h2>
          <p className="text-base leading-relaxed mb-4">
            On 30th August 2025 the Cross Culture Festival drew over{" "}
            <strong>2,000 attendees</strong>, featured <strong>40+ artists</strong>, and included special appearances that made the event unforgettable. The day celebrated diversity in music, arts and food, and brought communities together for a memorable experience.
          </p>
        </div>
      </section>

      {/* Contact / Getting in touch */}
      <section id="contact" className="relative z-10 bg-gray-100 text-black py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Getting in touch</h3>
          <p className="mb-4">
            For press, partnerships or ticketing inquiries, email us at{" "}
            <a href="mailto:hello@crossculturefest.example" className="underline">
              hello@crossculturefest.example
            </a>{" "}
            or use the contact form on our site.
          </p>
          <p className="text-sm text-gray-700">Follow us on socials for updates.</p>
        </div>
      </section>

      <footer className="relative z-10 text-center py-8 text-xs text-black/70 bg-white">
        © {new Date().getFullYear()} Cross Culture Festival — all rights reserved
      </footer>

      {/* floating learn more button bottom center */}
      <a href="#about" className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50">
        <button className="learn-more-bob inline-flex items-center justify-center w-44 h-12 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 transition-transform">
          Learn more
        </button>
      </a>
    </div>
  );
}
