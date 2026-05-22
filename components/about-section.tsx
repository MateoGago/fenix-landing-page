import Image from "next/image";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Puerto internacional con contenedores"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2">+15</div>
              <div className="text-sm uppercase tracking-widest opacity-80">
                Anos de experiencia
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Sobre nosotros
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Tu socio estrategico en comercio exterior
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En Fenix, nos especializamos en facilitar las operaciones de
                comercio internacional para empresas de todos los tamanos.
                Nuestro equipo de expertos te acompana en cada paso del proceso.
              </p>
              <p>
                Combinamos experiencia, tecnologia y un enfoque personalizado
                para garantizar que tus importaciones y exportaciones se
                realicen de manera eficiente, segura y cumpliendo con todas las
                normativas vigentes.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+500</div>
                <div className="text-sm text-muted-foreground">
                  Operaciones anuales
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Clientes satisfechos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
