"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#102B4E]/95 backdrop-blur-sm shadow-sm border-b border-white/10"
          : "bg-[#102B4E] border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-[#102B4E]">
                FENIX
              </span>
              <span className="text-[10px] font-medium tracking-[0.12em] text-[#667381] uppercase">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#667381] hover:text-[#102B4E] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contacto"
              className="inline-flex items-center px-5 py-2.5 bg-[#102B4E] text-white text-sm font-medium rounded hover:bg-[#173B66] transition-colors duration-200"
            >
              Consultar operación
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#102B4E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#DDE1E7] px-6 py-4">
          <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#667381] hover:text-[#102B4E] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-[#102B4E] text-white text-sm font-medium rounded hover:bg-[#173B66] transition-colors"
            >
              Consultar operación
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
