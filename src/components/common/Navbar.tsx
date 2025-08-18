"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full   fixed left-0 top-0 z-50 ">
      <div className="flex items-center justify-between px-4 py-3 md:py-4 ">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">⚙️ Forge</span>
        </div>

        {/* Center section */}
        <span className="cursor-pointer hover:text-black font-semibold">
          Canada, Montreal
        </span>
        <nav className="hidden  md:flex items-center gap-8 text-sm text-gray-700 ">
          <a className="hover:text-black cursor-pointer font-semibold relative">
            Manufacture
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
          </a>

          <a className="hover:text-black cursor-pointer font-semibold relative">
            Tool library
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
          </a>
          <a className="hover:text-black cursor-pointer font-semibold relative">
            Get in touch
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
          </a>
        </nav>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          <button className="hover:text-black">Eng</button>
          <span>/</span>
          <button className="relative text-black hover:text-black">
            Fra
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-2 flex flex-col gap-3 text-sm">
          <a className="hover:text-black cursor-pointer">Manufacture</a>
          <a className="hover:text-black cursor-pointer">Tool library</a>
          <a className="hover:text-black cursor-pointer">Get in touch</a>
          <div className="flex gap-2 mt-2">
            <button className="hover:text-black">Eng</button>
            <span>/</span>
            <button className="hover:text-black">Fra</button>
          </div>
        </div>
      )}
    </header>
  );
}
