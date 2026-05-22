import Link from "next/link";

export function ContactCTA() {
  return (
    <section id="contacto" className="bg-[#102B4E] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Top rule */}
          <div className="w-10 h-0.5 bg-[#2E6F9E]" aria-hidden="true" />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
            Iniciá una consulta con Fenix.
          </h2>

          <p className="text-base text-white/70 leading-relaxed max-w-lg">
            Contanos qué necesitás importar, exportar o resolver. Te ayudamos a
            ordenar pasos, documentación, costos y tiempos para avanzar con
            seguridad.
          </p>

          <Link
            href="mailto:contacto@fenix.com"
            className="inline-flex items-center px-8 py-3.5 bg-white text-[#102B4E] text-sm font-bold rounded hover:bg-[#F6F8FA] transition-colors duration-200 mt-2"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
