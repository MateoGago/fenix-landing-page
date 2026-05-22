import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="servicios" className="bg-[#F6F8FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17212B] mb-4 text-balance">
            Soluciones concretas para comercio internacional.
          </h2>
          <p className="text-[#667381] text-base lg:text-lg leading-relaxed">
            Una propuesta simple, seria y orientada a empresas que necesitan
            resolver operaciones reales, sin vueltas ni mensajes exagerados.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-[#DDE1E7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#DDE1E7] leading-none select-none flex-shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#17212B] leading-snug mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#667381] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E6F9E] hover:text-[#102B4E] transition-colors group"
                  >
                    {service.cta}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
