const steps = [
  {
    number: "1",
    title: "Consulta inicial",
    description: "Analizamos tu operación y definimos la mejor estrategia.",
  },
  {
    number: "2",
    title: "Documentación",
    description: "Preparamos toda la documentación requerida.",
  },
  {
    number: "3",
    title: "Logística",
    description: "Coordinamos el transporte y seguimiento de tu carga.",
  },
  {
    number: "4",
    title: "Despacho",
    description: "Gestionamos el proceso aduanero de forma eficiente.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 py-24 lg:py-32 bg-[#0a1628]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Un proceso simple y transparente
          </h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/25 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-[#0a1628]">
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto max-w-[260px] leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
