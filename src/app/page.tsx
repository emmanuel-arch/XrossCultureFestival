"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import HeroRotator from "./components/HeroRotator";
import ContactForm from "./components/ContactForm";
import LearnMoreToggle from "./components/LearnMoreToggle";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-neutral-900 text-white">
      {/* Background slider (fixed behind all content so it never collapses on mobile) */}
      {/* Use z-0 so it paints above the container background but below page content */}
      <div className="fixed inset-0 z-0 filter brightness-75" aria-hidden>
        <ImageSlider className="h-full w-full" />
      </div>

  <Header />

      {/* Hero: left-aligned beneath the logo, fills the viewport */}
      <main id="hero" className="relative z-10 flex items-start justify-start px-6 text-left min-h-screen pt-36 sm:pt-44 md:pt-52 pl-8 sm:pl-10 md:pl-12">
        <HeroRotator />
        <LearnMoreToggle />
      </main>

  {/* About section with /6.jpg background */}
  <section id="about" className="relative z-10 py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/6.jpg')" }}>
        <div className="absolute inset-0 -z-5 bg-black/55" aria-hidden />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-8 bg-transparent rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.5 5.5L20 9l-4 3.5L17 20l-5-2.5L7 20l1-7.5L4 9l5.5-1.5L12 2z" fill="#F97316"/></svg>
              <h2 className="text-2xl font-bold text-white">About the Festival</h2>
            </div>
            <p className="text-neutral-200 mb-4">On 30th August 2025 the Cross Culture Festival drew over <strong>2,000 attendees</strong>, featured <strong>40+ artists</strong>, and included special appearances that made the event unforgettable.</p>
            <p className="text-neutral-200">The festival celebrated diversity in music, arts and food, and brought communities together for a memorable experience. Expect even bigger things next time.</p>
          </div>

          <div className="p-8 bg-transparent rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20v18H2V3zm2 2v14h16V5H4z" fill="#6366F1"/></svg>
              <h3 className="text-xl font-semibold text-white">Highlights</h3>
            </div>
            <ul className="list-disc pl-5 text-neutral-300">
              <li>Over 2,000 attendees</li>
              <li>40+ international and local artists</li>
              <li>Special appearances and surprise sets</li>
            </ul>
          </div>
        </div>
      </section>

  {/* Contact / Getting in touch with /6.jpg background */}
  <section id="contact" className="relative z-10 py-16 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/6.jpg')" }}>
        <div className="absolute inset-0 -z-5 bg-black/55" aria-hidden />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-8 bg-transparent rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l10 6 10-6v10H2V7z" fill="#10B981"/></svg>
              <h3 className="text-xl font-semibold text-white">Getting in touch</h3>
            </div>
            <p className="text-neutral-200 mb-4">For press, partnerships or ticketing inquiries, email us at <a href="mailto:hello@crossculturefest.example" className="underline text-white">hello@crossculturefest.example</a>.</p>
            <p className="text-sm text-neutral-300">Leave your email and select a booking option — we&apos;ll contact you with priority booking details.</p>
          </div>

          <div className="p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* top fixed Learn more is handled by LearnMoreToggle */}
      <Footer />
    </div>
  );
}
