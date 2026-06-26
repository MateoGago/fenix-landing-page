"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronDown,
  Ship,
  Globe,
  FileText,
  TrendingUp,
  Truck,
  ClipboardCheck,
  PackageCheck,
  Building2,
  Download,
} from "lucide-react";
import { HeaderMinimal } from "@/components/header-minimal";
import { FooterMinimal } from "@/components/footer-minimal";

const services = [
  {
    id: 1,
    slug: "importaciones",
    icon: Ship,
    title: "Importaciones",
    image: "/images/services/importacion-neumaticos.jpeg",
    imageAlt: "Contenedor con neumáticos importados",
    shortDescription:
      "Gestión integral para traer mercadería, insumos o productos desde el exterior.",
    description:
      "Acompañamos todo el proceso de importación, desde el análisis inicial de la operación hasta la coordinación documental, logística y aduanera.",
    items: [
      "Análisis inicial de la operación.",
      "Coordinación con proveedores del exterior.",
      "Revisión de documentación comercial.",
      "Seguimiento de la carga internacional.",
      "Acompañamiento hasta el despacho aduanero.",
    ],
  },
  {
    id: 2,
    slug: "exportaciones",
    icon: Globe,
    title: "Exportaciones",
    image: "/images/services/exportacion-carga-terrestre-lana-autoelevador.jpeg",
    imageAlt: "Carga terrestre de lana para exportación",
    shortDescription:
      "Acompañamiento para empresas que buscan vender productos al exterior.",
    description:
      "Ayudamos a preparar y ordenar operaciones de exportación, evaluando documentación, logística, destino y necesidades comerciales.",
    items: [
      "Evaluación de mercados de destino.",
      "Preparación documental.",
      "Coordinación logística internacional.",
      "Asesoramiento operativo.",
      "Seguimiento de la operación.",
    ],
  },
  {
    id: 3,
    slug: "despacho-aduanero",
    icon: FileText,
    title: "Despacho aduanero",
    image: "/images/services/descarga-buque-consolidado-puerto.jpeg",
    imageAlt: "Descarga de buque y consolidado en puerto",
    shortDescription:
      "Gestión y seguimiento de trámites aduaneros para importación y exportación.",
    description:
      "Brindamos asistencia en procesos aduaneros, buscando reducir demoras, ordenar documentación y acompañar cada etapa del trámite.",
    items: [
      "Control documental.",
      "Gestión de permisos y requisitos.",
      "Clasificación y revisión operativa.",
      "Coordinación con despachantes.",
      "Seguimiento del proceso aduanero.",
    ],
  },
  {
    id: 4,
    slug: "consultoria",
    icon: TrendingUp,
    title: "Consultoría en comercio exterior",
    image: "/images/services/ingreso-deposito-cargas-importacion.jpeg",
    imageAlt: "Ingreso a depósito de cargas de importación",
    shortDescription:
      "Asesoramiento estratégico para optimizar operaciones internacionales.",
    description:
      "Analizamos costos, tiempos, documentación, riesgos y oportunidades para que cada operación tenga una planificación más clara.",
    items: [
      "Evaluación de costos estimados.",
      "Análisis de viabilidad operativa.",
      "Planificación de importaciones.",
      "Planificación de exportaciones.",
      "Optimización de procesos comerciales.",
    ],
  },
  {
    id: 5,
    slug: "logistica-internacional",
    icon: Truck,
    title: "Logística internacional",
    image: "/images/services/carga-importacion-molinos-eolicos.jpeg",
    imageAlt: "Carga de importación de molinos eólicos",
    shortDescription:
      "Coordinación de transporte marítimo, aéreo o terrestre según la operación.",
    description:
      "Acompañamos la coordinación logística de la carga, teniendo en cuenta tiempos, costos, tipo de mercadería, origen y destino.",
    items: [
      "Coordinación de transporte internacional.",
      "Seguimiento de cargas.",
      "Análisis de tiempos de tránsito.",
      "Comunicación con operadores logísticos.",
      "Planificación de entrega final.",
    ],
  },
  {
    id: 6,
    slug: "asesoramiento-documental",
    icon: ClipboardCheck,
    title: "Asesoramiento documental",
    image: "/images/services/consolidado-planta-carga-exposicion.jpeg",
    imageAlt: "Consolidado de carga con documentación",
    shortDescription:
      "Revisión y organización de documentos necesarios para operar.",
    description:
      "Ayudamos a ordenar la documentación comercial y operativa necesaria para importar o exportar de forma segura.",
    items: [
      "Factura comercial.",
      "Packing list.",
      "Certificados requeridos.",
      "Documentación de transporte.",
      "Requisitos según destino u origen.",
    ],
  },
  {
    id: 7,
    slug: "seguimiento-de-operaciones",
    icon: PackageCheck,
    title: "Seguimiento de operaciones",
    image: "/images/services/exportacion-grasa-lana-tambores.jpeg",
    imageAlt: "Tambores consolidados dentro de contenedor",
    shortDescription:
      "Control y actualización del estado de cada operación internacional.",
    description:
      "Brindamos seguimiento para que el cliente pueda conocer el estado de su operación y anticipar próximos pasos.",
    items: [
      "Seguimiento de carga.",
      "Comunicación de avances.",
      "Control de etapas pendientes.",
      "Avisos sobre documentación faltante.",
      "Acompañamiento hasta la finalización.",
    ],
  },
  {
    id: 8,
    slug: "soporte-para-empresas",
    icon: Building2,
    title: "Soporte para empresas",
    image: "/images/services/exportacion-grasa-lana-contenedor.jpeg",
    imageAlt: "Carga consolidada dentro de contenedor",
    shortDescription:
      "Acompañamiento para pymes y empresas que operan con el exterior.",
    description:
      "Trabajamos junto a empresas que necesitan ordenar, profesionalizar o iniciar sus operaciones de comercio exterior.",
    items: [
      "Diagnóstico de necesidades.",
      "Planificación operativa.",
      "Asesoramiento inicial.",
      "Organización de procesos.",
      "Acompañamiento comercial y operativo.",
    ],
  },
];

const operationImages = [
  {
    src: "/images/services/exportacion-grasa-lana-contenedor.jpeg",
    alt: "Exportación de grasa de lana en contenedor",
    label: "Exportación de grasa de lana",
  },
  {
    src: "/images/services/exportacion-grasa-lana-tambores.jpeg",
    alt: "Tambores consolidados para exportación",
    label: "Consolidado de carga",
  },
  {
    src: "/images/services/importacion-neumaticos.jpeg",
    alt: "Importación de neumáticos en contenedor",
    label: "Importación de neumáticos",
  },
  {
    src: "/images/services/carga-importacion-molinos-eolicos-detalle.jpeg",
    alt: "Izaje de carga de importación de molinos eólicos",
    label: "Carga sobredimensionada",
  },
  {
    src: "/images/services/exportacion-carga-terrestre-lana-camion.jpeg",
    alt: "Carga terrestre de lana en camión",
    label: "Carga terrestre de lana",
  },
  {
    src: "/images/services/carga-importacion-molinos-eolicos.jpeg",
    alt: "Operativo de importación de molinos eólicos",
    label: "Logística internacional",
  },
];

export default function ServiciosPage() {
  const [openService, setOpenService] = useState<number | null>(null);

  useEffect(() => {
    const openServiceFromHash = () => {
      const hash = window.location.hash.split("#").filter(Boolean).at(-1);

      if (!hash) return;

      const service = services.find((item) => item.slug === hash);

      if (!service) return;
      window.history.replaceState(null, "", `/servicios#${service.slug}`);

      setOpenService(service.id);

      setTimeout(() => {
        const element = document.getElementById(service.slug);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    };

    openServiceFromHash();

    window.addEventListener("hashchange", openServiceFromHash);

    return () => {
      window.removeEventListener("hashchange", openServiceFromHash);
    };
  }, []);

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <>
      <HeaderMinimal />

      <main className="min-h-screen bg-[#F6F8FA]">
        <section className="bg-[#071421] px-6 pb-20 pt-28 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
              Servicios
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Servicios de comercio exterior para empresas.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Conocé en detalle cómo Fenix acompaña operaciones de importación,
              exportación, logística internacional y gestión documental.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E6F9E]">
                Áreas de trabajo
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#102B4E] md:text-4xl">
                Todo lo necesario para operar de forma clara y ordenada.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#667381]">
                Cada servicio está pensado para reducir incertidumbre, ordenar
                la documentación y acompañar al cliente en cada etapa de la
                operación.
              </p>

              <div className="mt-8 rounded-xl border border-[#DDE1E7] bg-white p-6">
                <p className="text-sm font-semibold text-[#102B4E]">
                  ¿No sabés qué servicio necesitás?
                </p>
                <p className="mt-2 text-sm leading-6 text-[#667381]">
                  Podés enviarnos tu consulta y te orientamos sobre los próximos
                  pasos según tu operación.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/#contacto"
                    className="inline-flex justify-center rounded-md bg-[#102B4E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173B66]"
                  >
                    Consultar operación
                  </Link>
                  <a
                    href="/docs/fenix-brochure-cotizaciones.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#102B4E]/20 px-5 py-3 text-sm font-semibold text-[#102B4E] transition hover:bg-[#EEF4FA]"
                  >
                    Descargar brochure
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service) => {
                const Icon = service.icon;
                const isOpen = openService === service.id;

                return (
                  <article
                    id={service.slug}
                    key={service.id}
                    className="scroll-mt-28 overflow-hidden rounded-xl border border-[#DDE1E7] bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className="flex w-full items-center justify-between gap-5 p-6 text-left transition hover:bg-[#F6F8FA]"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#102B4E]">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-[#102B4E]">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-[#667381]">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <ChevronDown
                        size={22}
                        className={`shrink-0 text-[#102B4E] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#DDE1E7] px-6 pb-6 pt-5">
                        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                          <div className="relative min-h-[240px] overflow-hidden rounded-lg bg-[#F6F8FA]">
                            <Image
                              src={service.image}
                              alt={service.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 420px"
                            />
                          </div>

                          <div>
                            <p className="max-w-3xl text-sm leading-7 text-[#667381]">
                              {service.description}
                            </p>

                            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                              {service.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm leading-6 text-[#17212B]"
                                >
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2E6F9E]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E6F9E]">
                Operaciones reales
              </p>
              <h2 className="text-3xl font-bold leading-tight text-[#102B4E] md:text-4xl">
                Experiencia aplicada en cargas, consolidado y logística.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {operationImages.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-[#DDE1E7] bg-white shadow-sm"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-[#102B4E]">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#102B4E] p-8 text-white md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  ¿Querés iniciar una consulta?
                </h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Contanos qué necesitás importar, exportar o resolver y te
                  orientamos con los próximos pasos.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#102B4E] transition hover:bg-[#EAF2F8]"
                >
                  Contactar ahora
                </Link>
                <a
                  href="/docs/fenix-brochure-cotizaciones.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Descargar brochure
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}
