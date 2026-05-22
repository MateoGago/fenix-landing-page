import Image from "next/image";
import Link from "next/link";
import { PlayCircle, FileText, Package, Route } from "lucide-react";

const miniCards = [
  {
    icon: Route,
    title: "Diagnóstico",
    text: "Analizamos la operación antes de avanzar.",
  },
  {
    icon: FileText,
    title: "Documentación",
    text: "Ordenamos requisitos y trámites clave.",
  },
  {
    icon: Package,
    title: "Seguimiento",
    text: "Coordinación clara durante el proceso.",
  },
];

export function Hero() {
  return (
    <section className="pt-16 lg:pt-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2E6F9E]">
              Comercio exterior simple y claro
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#17212B] text-balance">
              Operaciones internacionales con gestión profesional.
            </h1>

            <p className="text-base lg:text-lg text-[#667381] leading-relaxed max-w-lg">
              Acompañamos a empresas en procesos de importación, exportación y
              logística internacional, ordenando documentación, costos, tiempos
              y próximos pasos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#102B4E] text-white font-medium rounded hover:bg-[#173B66] transition-colors duration-200 text-sm"
              >
                Consultar operación
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 border border-[#DDE1E7] bg-white text-[#17212B] font-medium rounded hover:bg-[#F6F8FA] transition-colors duration-200 text-sm"
              >
                <PlayCircle size={18} className="text-[#2E6F9E] flex-shrink-0" />
                Ver video presentación
              </button>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {miniCards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex flex-col gap-1.5 p-4 bg-[#F6F8FA] border border-[#DDE1E7] rounded"
                >
                  <Icon size={16} className="text-[#2E6F9E]" />
                  <p className="text-xs font-semibold text-[#17212B]">{title}</p>
                  <p className="text-xs text-[#667381] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="Puerto internacional con contenedores y grúas de carga"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#102B4E]/90 backdrop-blur-sm rounded p-4">
              <p className="text-xs font-semibold tracking-wide text-[#2E6F9E] uppercase mb-1">
                Importación · Exportación · Logística
              </p>
              <p className="text-sm text-white leading-relaxed">
                Una gestión integral para operar con previsibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
