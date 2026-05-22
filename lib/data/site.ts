export const siteConfig = {
  name: "Fenix",
  tagline: "Comercio Exterior",
  description:
    "Comercio exterior, operaciones internacionales y acompañamiento estratégico para empresas.",
  contact: {
    email: "contacto@fenix.com",
    phone: "+54 9 11 0000-0000",
    location: "Buenos Aires, Argentina",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Novedades", href: "/#novedades" },
    { label: "Contacto", href: "/#contacto" },
  ],
  footer: {
    columns: [
      {
        title: "Empresa",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Proceso", href: "/#proceso" },
          { label: "Novedades", href: "/#novedades" },
          { label: "Contacto", href: "/#contacto" },
        ],
      },
      {
        title: "Servicios",
        links: [
          { label: "Todos los servicios", href: "/servicios" },
          { label: "Importaciones", href: "/servicios#importaciones" },
          { label: "Exportaciones", href: "/servicios#exportaciones" },
          { label: "Despacho aduanero", href: "/servicios#despacho-aduanero" },
          { label: "Consultoría", href: "/servicios#consultoria" },
          {
            label: "Logística internacional",
            href: "/servicios#logistica-internacional",
          },
        ],
      },
    ],
  },
};
