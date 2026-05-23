export interface NewsPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    category: "Importación",
    title: "Documentación clave antes de importar",
    excerpt:
      "Conocé qué documentos revisar antes de iniciar una operación para evitar demoras, costos inesperados y problemas en aduana.",
    image: "/images/import.jpg",
    imageAlt: "Contenedores y documentación de importación",
  },
  {
    id: 2,
    category: "Logística",
    title: "Cómo planificar tiempos y costos logísticos",
    excerpt:
      "Una buena planificación permite anticipar tiempos de tránsito, gastos asociados y decisiones importantes antes de mover la carga.",
    image: "/images/cargo-ship.jpg",
    imageAlt: "Buque de carga en operación logística internacional",
  },
  {
    id: 3,
    category: "Exportación",
    title: "Primeros pasos para exportar desde Argentina",
    excerpt:
      "Aspectos iniciales que una empresa debe tener en cuenta antes de vender al exterior: documentación, destino, logística y viabilidad.",
    image: "/images/export.jpg",
    imageAlt: "Operación de exportación y comercio internacional",
  },
];
