import Link from "next/link";
import { Ship, FileText, Globe, TrendingUp, ArrowRight } from "lucide-react";
const services = [
  {
    icon: Ship,
    number: "01",
    title: "Importaciones",
    description:
      "Gestionamos todo el proceso de importacion, desde la coordinacion con proveedores hasta el despacho aduanero.",
  },
  {
    icon: Globe,
    number: "02",
    title: "Exportaciones",
    description:
      "Acompanamos tu expansion internacional con documentacion, logistica y cumplimiento normativo.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Despacho Aduanero",
    description:
      "Tramites aduaneros agiles y precisos, minimizando tiempos y costos en cada operacion.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Consultoria",
    description:
      "Asesoria estrategica para optimizar tus operaciones de comercio exterior.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Nuestros servicios
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Soluciones integrales para tu comercio internacional
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 lg:p-10 border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
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
            </div>
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
