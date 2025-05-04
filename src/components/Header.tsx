"use client";

import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 z-30">
      <div className="h-full mx-auto px-4 flex items-center gap-8">
        <Menu />
        <div>
          <Link href="/" className="no-underline">
            <h1 className="text-3xl font-normal tracking-tight cursor-pointer transition-opacity hover:opacity-70">
              Acosmeticstory
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
