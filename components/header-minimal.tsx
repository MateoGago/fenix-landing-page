"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export function HeaderMinimal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071421] shadow-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <Image
              src="/images/fenix-logo.jpg"
              alt="Fenix Comercio Exterior"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-bold text-xl tracking-widest">
            FENIX
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* CTA button */}
        <Link
          href="/#contacto"
          className="hidden md:block px-6 py-2.5 bg-white text-[#0a1628] text-sm font-semibold rounded hover:bg-white/90 transition-colors"
        >
          Cotizar
        </Link>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white text-lg uppercase tracking-widest transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-white text-[#0a1628] text-center font-semibold rounded hover:bg-white/90 transition-colors"
            >
              Cotizar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
