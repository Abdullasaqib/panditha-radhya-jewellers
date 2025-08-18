"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Info, Star, Mail } from "lucide-react";

const links = [
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/service", icon: Star },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#212121]/90 dark:bg-white/90 shadow-xl transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left side - Shop Name */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white dark:text-[#212121] tracking-wide hover:text-gold transition-colors duration-300 shadow-lg"
        >
          Panditha Radhya Jewellers
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative font-medium text-white dark:text-[#212121] flex items-center gap-1 transition-all duration-300 hover:text-gold group",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  pathname === link.href && "after:w-full text-gold"
                )}
              >
                <span className="group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300">
                  <Icon className="w-4 h-4 inline ml-1" />
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white dark:text-[#212121] focus:outline-none hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#212121]/95 dark:bg-white/95 px-6 py-4 space-y-4 shadow-2xl rounded-b-2xl animate-fade-in">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block font-medium text-white dark:text-[#212121] transition-all duration-300 hover:text-gold hover:scale-105 flex items-center gap-2 group",
                  pathname === link.href && "text-gold"
                )}
              >
                <span className="group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300">
                  <Icon className="w-4 h-4" />
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
