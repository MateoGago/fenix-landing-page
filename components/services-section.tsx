import Link from "next/link";
import Image from "next/image";
import {
  Ship,
  FileText,
  Globe,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    number: "01",
    title: "Importaciones",
    href: "/servicios#importaciones",
    image: "/images/services/importacion-neumaticos.jpeg",
    imageAlt: "Contenedor con neumáticos importados",
    description:
      "Gestionamos todo el proceso de importación, desde la coordinación con proveedores hasta el despacho aduanero.",
  },
  {
    icon: Globe,
    number: "02",
    title: "Exportaciones",
    href: "/servicios#exportaciones",
    image: "/images/services/exportacion-carga-terrestre-lana-camion.jpeg",
    imageAlt: "Carga terrestre de lana para exportación",
    description:
      "Acompañamos tu expansión internacional con documentación, logística y cumplimiento normativo.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Despacho aduanero",
    href: "/servicios#despacho-aduanero",
    image: "/images/services/descarga-buque-consolidado-puerto.jpeg",
    imageAlt: "Descarga de buque y consolidado en puerto",
    description:
      "Trámites aduaneros ágiles y precisos, minimizando tiempos y costos en cada operación.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Consultoría",
    href: "/servicios#consultoria",
    image: "/images/services/ingreso-deposito-cargas-importacion.jpeg",
    imageAlt: "Ingreso a depósito de cargas de importación",
    description:
      "Asesoría estratégica para optimizar tus operaciones de comercio exterior.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Nuestros servicios
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Soluciones integrales para tu comercio internacional
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block overflow-hidden rounded-lg border border-border bg-white text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg md:text-left"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:items-start lg:p-10">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon className="h-10 w-10" />
                </div>

                <div className="flex-1 pt-2">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-md bg-[#102B4E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#173B66]"
          >
            Ver todos los servicios
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
