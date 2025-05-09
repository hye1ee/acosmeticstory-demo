"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, Search, BookOpen, Grid2X2 } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";

const menuItems = [
  { name: "오브제 홀더", path: "/object-holder" },
  { name: "코어 캡슐", path: "/core-capsule" },
  { name: "툴", path: "/tools" },
  { name: "내 스토리", path: "/my-story" },
  { name: "스토리", path: "/stories" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="h-30 mx-auto p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg transition-colors hover:bg-black/5 cursor-pointer z-40"
          >
            {isOpen ? (
              <X size={30} strokeWidth={1} />
            ) : (
              <MenuIcon size={30} strokeWidth={1} />
            )}
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="p-2 rounded-lg transition-colors hover:bg-black/5 cursor-pointer"
          >
            <Search size={30} strokeWidth={1} />
          </button>
          <Link
            href="/zine"
            className="p-2 rounded-lg transition-colors hover:bg-black/5 cursor-pointer"
            aria-label="Zine"
          >
            <Grid2X2 size={30} strokeWidth={1} />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="no-underline">
            <div className="text-4xl font-light cursor-pointer transition-opacity hover:opacity-70">
              Acosmeticstory
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-6 px-8">
          <Link
            href="/login"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            로그인
          </Link>
          <Link
            href="/wishlist"
            className="flex items-center gap-1 text-sm hover:text-gray-600 transition-colors"
          >
            위시리스트
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white z-30 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 flex-col gap-8 pt-[7.5rem]">
          <nav>
            <div className="flex flex-col pl-4 gap-6 mt-8 font-normal">
              {menuItems.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    onClick={handleMenuClick}
                    className={`block text-md text-gray-800 transition-colors ${
                      pathname === item.path
                        ? "text-gray-600"
                        : "text-inherit hover:text-gray-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
