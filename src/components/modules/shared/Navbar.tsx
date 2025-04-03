"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-0 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          HELPER
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/feature"
            className="text-sm font-medium hover:text-gray-600"
          >
            Feature
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/why-us"
            className="text-sm font-medium hover:text-gray-600"
          >
            Why Us
          </Link>
          <Link
            href="/faqs"
            className="text-sm font-medium hover:text-gray-600"
          >
            FAQ's
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-medium hover:text-gray-600"
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium hover:text-gray-600"
          >
            Careers
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-white md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="font-bold text-xl">
                HELPER
              </Link>
              <button onClick={toggleMenu} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link
                href="/feature"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                Feature
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/why-us"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                Why Us
              </Link>
              <Link
                href="/faqs"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                FAQ's
              </Link>
              <Link
                href="/contact-us"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="text-lg font-medium hover:text-gray-600"
                onClick={toggleMenu}
              >
                Careers
              </Link>
              <Button
                variant="default"
                className="mt-4 bg-black text-white hover:bg-gray-800 w-full"
              >
                Download
              </Button>
            </nav>
          </div>
        </div>

        <Button
          variant="default"
          className="bg-black hidden md:block text-white hover:bg-gray-800"
        >
          Download
        </Button>
      </div>
    </header>
  );
}
