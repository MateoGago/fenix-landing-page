import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#17212B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-white">
                FENIX
              </span>
              <span className="text-[10px] font-medium tracking-[0.12em] text-white/40 uppercase mt-0.5">
                {siteConfig.tagline}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Nav columns */}
          {siteConfig.footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-white/40">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-white/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <Mail size={14} className="text-[#2E6F9E] flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} className="text-[#2E6F9E] flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="text-[#2E6F9E] flex-shrink-0" />
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            &copy; {year} Fenix Comercio Exterior. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/30">Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
