"use client";

import Image from "next/image";
import Link from "next/link";

export default function LogoSmoke() {
  return (
    <div className="absolute left-6 sm:left-8 md:left-10 z-20 pointer-events-auto" style={{ top: 'calc(env(safe-area-inset-top, 0px) - 12px)' }}>
      <Link href="/" className="relative flex items-center w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px]">
        {/* smoke layers */}
        <div className="logo-smoke absolute inset-0 -z-10" aria-hidden />

        {/* logo */}
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <Image src="/logo.png" alt="XROSS logo" fill className="object-contain" sizes="(max-width: 640px) 96px, 220px" />
        </div>
      </Link>
    </div>
  );
}
