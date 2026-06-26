import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Importaciones", href: "/servicios#importaciones" },
    { label: "Exportaciones", href: "/servicios#exportaciones" },
    { label: "Despacho Aduanero", href: "/servicios#despacho-aduanero" },
    { label: "Consultoría", href: "/servicios#consultoria" },
    {
      label: "Logística internacional",
      href: "/servicios#logistica-internacional",
    },
  ],
  empresa: [
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Contacto", href: "/#contacto" },
  ],
};

export function FooterMinimal() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              FENIX
            </Link>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xs">
              Tu socio estratégico en comercio internacional. Conectamos tu
              negocio con el mundo.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@fenixcomercioexterior.com.ar"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
              Servicios
            </h4>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
              Empresa
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>Puerto Madryn, Chubut, Argentina</li>
              <li>+54 9 280 460-5206</li>
              <li>info@fenixcomercioexterior.com.ar</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Fenix Comercio Exterior. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
