"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Object Holder", path: "/object-holder" },
  { name: "Core Capsule", path: "/core-capsule" },
  { name: "Tools", path: "/tools" },
  { name: "My Story", path: "/my-story" },
  { name: "Stories", path: "/stories" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="h-30 mx-auto p-8 flex items-center gap-8">
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

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="no-underline">
            <div className="text-4xl font-light cursor-pointer transition-opacity hover:opacity-70">
              Acosmeticstory
            </div>
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
    </div>
  );
}
