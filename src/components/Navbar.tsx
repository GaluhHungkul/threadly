"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "MEN", href: "/categories/men" },
    { name: "WOMEN", href: "/categories/women" },
    { name: "ACCESSORIES", href: "/categories/accessories" },
    { name: "EDITORIAL", href: "#editorial" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#e5e5e5]/50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        {/* Left / Mobile menu button & Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1a1c1c] hover:text-[#717171] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl font-normal tracking-[0.25em] text-[#1a1c1c] hover:opacity-80 transition-opacity"
          >
            THREADLY
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-[#1a1c1c] hover:text-[#717171] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a1c1c] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Search & Cart */}
        <div className="flex items-center space-x-5 sm:space-x-6">
          {/* Search Trigger */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center border-b border-[#1a1c1c] pb-1 animate-fadeIn">
                <input
                  type="text"
                  placeholder="Search collections..."
                  className="bg-transparent text-xs text-[#1a1c1c] focus:outline-none w-32 sm:w-48 pr-2 placeholder-[#717171]"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-[#1a1c1c] hover:text-[#717171] text-xs"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 text-[#1a1c1c] hover:text-[#717171] transition-colors"
                aria-label="Search store"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Cart Icon with badge */}
          <Link
            href="/cart"
            className="p-1.5 text-[#1a1c1c] hover:text-[#717171] transition-colors relative"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-0.5 -right-1.5 bg-[#000000] text-[#ffffff] text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9f9] border-b border-[#e5e5e5] px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.2em] text-[#1a1c1c] hover:text-[#717171] py-2 border-b border-[#eeeeee] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
