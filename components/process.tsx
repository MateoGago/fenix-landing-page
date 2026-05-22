import { processSteps } from "@/lib/data/services";

export function Process() {
  return (
    <section id="proceso" className="bg-[#F0F2F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: title block */}
          <div className="bg-[#102B4E] rounded-lg p-8 lg:p-10 text-white flex flex-col gap-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2E6F9E]">
              Cómo trabajamos
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
              Un proceso claro para reducir incertidumbre.
            </h2>
            <p className="text-sm lg:text-base text-white/70 leading-relaxed">
              La diferencia está en ordenar la operación antes de ejecutarla:
              qué se necesita, cuánto puede costar, qué documentación interviene
              y cómo se coordina cada etapa.
            </p>

            {/* Divider line detail */}
            <div className="w-12 h-0.5 bg-[#2E6F9E] mt-2" aria-hidden="true" />
          </div>

          {/* Right: steps */}
          <div className="flex flex-col divide-y divide-[#DDE1E7]">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-6 py-7 ${index === 0 ? "pt-0" : ""} ${
                  index === processSteps.length - 1 ? "pb-0" : ""
                }`}
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-sm font-bold text-[#2E6F9E] font-mono">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-[#17212B]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#667381] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
