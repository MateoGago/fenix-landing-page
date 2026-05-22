export interface NewsPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: "documentacion-importacion",
    category: "Aduana",
    title: "Documentación clave antes de importar",
    excerpt:
      "Qué revisar antes de iniciar una operación para evitar demoras y costos inesperados.",
    image: "/images/news-customs.jpg",
    imageAlt: "Documentación aduanera",
  },
  {
    id: "planificar-tiempos-costos",
    category: "Logística",
    title: "Cómo planificar tiempos y costos",
    excerpt:
      "Buenas prácticas para coordinar cargas internacionales con mayor previsibilidad.",
    image: "/images/news-logistics.jpg",
    imageAlt: "Planificación logística",
  },
  {
    id: "primeros-pasos-exportar",
    category: "Mercados",
    title: "Primeros pasos para exportar",
    excerpt:
      "Criterios iniciales para evaluar una oportunidad comercial en el exterior.",
    image: "/images/news-export.jpg",
    imageAlt: "Comercio internacional",
  },
];
