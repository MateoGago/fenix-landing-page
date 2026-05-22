export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "importacion",
    number: "01",
    title: "Importación integral",
    description:
      "Planificación de la operación, revisión documental, coordinación logística y seguimiento para empresas que importan mercadería, insumos o equipamiento.",
    cta: "Solicitar asesoramiento",
    image: "/images/import.jpg",
    imageAlt: "Contenedores en depósito logístico",
  },
  {
    id: "exportacion",
    number: "02",
    title: "Exportación y desarrollo internacional",
    description:
      "Acompañamiento para preparar documentación, coordinar logística y evaluar destinos comerciales para empresas que buscan vender al exterior.",
    cta: "Explorar una operación",
    image: "/images/export.jpg",
    imageAlt: "Transporte de carga internacional",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Relevamiento inicial",
    description:
      "Entendemos producto, origen, destino, volumen, urgencia y objetivo comercial de la operación.",
  },
  {
    number: "02",
    title: "Plan documental y operativo",
    description:
      "Identificamos requisitos, documentación necesaria, posibles riesgos y próximos pasos.",
  },
  {
    number: "03",
    title: "Coordinación logística",
    description:
      "Acompañamos la comunicación con proveedores, transporte y actores involucrados.",
  },
  {
    number: "04",
    title: "Seguimiento y cierre",
    description:
      "Mantenemos visibilidad de la operación hasta completar la entrega o salida acordada.",
  },
];
