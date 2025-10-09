"use client";

import Image from "next/image";
import Link from "next/link";

export default function LogoSmoke() {
  return (
    <div className="absolute left-8 -top-2 sm:left-10 sm:-top-3 md:left-12 md:-top-6 z-20 pointer-events-auto">
      <Link href="/" className="relative flex items-center w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]">
        {/* smoke layers */}
        <div className="logo-smoke absolute inset-0 -z-10" aria-hidden />

        {/* logo */}
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <Image src="/logo.png" alt="XROSS logo" fill className="object-contain" sizes="(max-width: 640px) 110px, 240px" />
        </div>
      </Link>
    </div>
  );
}
