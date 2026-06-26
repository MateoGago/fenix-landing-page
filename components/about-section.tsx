import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const teamGroups = [
  {
    area: "Despachantes de Aduanas",
    members: [
      {
        name: "Mariño Gloria",
        phone: "+54 9 280 4753531",
        email: "gloriam@fenixcomercioexterior.com.ar",
      },
      {
        name: "Alejandro Gago",
        phone: "+54 9 280 4605206",
        email: "alegago@fenixcomercioexterior.com.ar",
      },
    ],
  },
  {
    area: "Operativo Documental",
    members: [
      {
        name: "Mario Ponce",
        phone: "+54 9 280 4202958",
        email: "marioponce@fenixcomercioexterior.com.ar",
      },
    ],
  },
  {
    area: "Operativo de Consolidado",
    members: [
      {
        name: "Mirko Glasinovich",
        phone: "+54 9 280 4364603",
        email: "mirko@fenixcomercioexterior.com.ar",
      },
    ],
  },
];

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Puerto internacional con contenedores"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2">+15</div>
              <div className="text-sm uppercase tracking-widest opacity-80">
                Años de experiencia
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Sobre nosotros
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Tu socio estratégico en comercio exterior
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En Fenix, nos especializamos en facilitar las operaciones de
                comercio internacional para empresas de todos los tamaños.
                Nuestro equipo de expertos te acompaña en cada paso del proceso.
              </p>
              <p>
                Combinamos experiencia, tecnología y un enfoque personalizado
                para garantizar que tus importaciones y exportaciones se
                realicen de manera eficiente, segura y cumpliendo con todas las
                normativas vigentes.
              </p>
            </div>

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

        <div className="mt-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Nuestro equipo
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Contactos especializados para cada etapa de la operación.
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {teamGroups.map((group) => (
              <article
                key={group.area}
                className="rounded-lg border border-border bg-[#F6F8FA] p-6 shadow-sm"
              >
                <h4 className="mb-5 border-b border-[#DDE1E7] pb-2 text-lg font-bold text-[#17212B]">
                  {group.area}
                </h4>

                <div className="space-y-6">
                  {group.members.map((member) => (
                    <div key={member.email}>
                      <p className="font-bold text-[#17212B]">{member.name}</p>
                      <div className="mt-2 space-y-1 text-sm">
                        <a
                          href={phoneHref(member.phone)}
                          className="flex items-center gap-2 text-[#667381] transition hover:text-[#102B4E]"
                        >
                          <Phone size={14} />
                          {member.phone}
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 break-all font-semibold text-[#17212B] transition hover:text-[#2E6F9E]"
                        >
                          <Mail size={14} />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
