"use client";

import Image from "next/image";
import Link from "next/link";
import LogoSmoke from "./LogoSmoke";

export default function Header() {
  return (
    <header className="relative z-10">
      <LogoSmoke />
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-end items-center gap-6">
        <div className="flex items-center gap-6">
          {/* Logo removed from here (now absolute). Menu remains right-aligned. */}
          <ul className="hidden sm:flex items-center gap-6 text-sm font-medium">
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
        </div>
      </nav>
    </header>
  );
}
