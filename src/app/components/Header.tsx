"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoSmoke from "./LogoSmoke";

export default function Header() {
  const [open, setOpen] = useState(false);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-20">
      <LogoSmoke />
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-end items-center gap-6">
        <div className="flex items-center gap-6 w-full">
          {/* Desktop menu */}
          <ul className="hidden sm:flex items-center gap-6 text-sm font-medium ml-auto">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/shows" className="hover:underline">Shows</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/tickets" className="ml-2 inline-block rounded-md bg-orange-500 text-black px-3 py-1 text-sm font-semibold hover:bg-orange-400">Tickets</Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <div className="sm:hidden ml-auto">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-md bg-white/6 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - fixed so it doesn't shift layout or collapse the slider */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Cross Culture Festival" className="h-10 w-auto object-contain" />
            </div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md bg-white/6 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 px-6 py-8">
            <ul className="space-y-6 text-center text-2xl">
              <li>
                <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link href="/shows" onClick={() => setOpen(false)}>Shows</Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              </li>
              <li>
                <Link href="/tickets" onClick={() => setOpen(false)} className="inline-block rounded-md bg-orange-500 text-black px-4 py-2">Tickets</Link>
              </li>
            </ul>
          </div>

          <div className="px-6 py-6 text-center text-sm text-neutral-300">
            &copy; {new Date().getFullYear()} Cross Culture Festival
          </div>
        </div>
      )}
    </header>
  );
}
