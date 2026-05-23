export interface NewsPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: {
    intro: string;
    sections: {
      title: string;
      text: string;
    }[];
  };
}

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    slug: "documentacion-clave-antes-de-importar",
    category: "Importación",
    title: "Documentación clave antes de importar",
    excerpt:
      "Conocé qué documentos revisar antes de iniciar una operación para evitar demoras, costos inesperados y problemas en aduana.",
    image: "/images/import.jpg",
    imageAlt: "Contenedores y documentación de importación",
    content: {
      intro:
        "Antes de iniciar una importación, es fundamental ordenar la documentación comercial, logística y operativa. Una revisión previa ayuda a evitar demoras, costos adicionales y problemas durante el proceso.",
      sections: [
        {
          title: "Factura comercial",
          text: "Debe incluir correctamente los datos del proveedor, comprador, descripción de la mercadería, valores, moneda y condiciones de venta. Es uno de los documentos principales para identificar la operación.",
        },
        {
          title: "Packing list",
          text: "Detalla cómo está embalada la mercadería: cantidad de bultos, peso, volumen, medidas y contenido. Es clave para coordinar transporte, depósito y control de carga.",
        },
        {
          title: "Documento de transporte",
          text: "Según el medio utilizado, puede ser un Bill of Lading, Air Waybill o carta de porte. Permite identificar la carga, el origen, el destino y las partes involucradas.",
        },
        {
          title: "Certificados y requisitos especiales",
          text: "Algunos productos pueden requerir certificados de origen, permisos, intervenciones o documentación técnica. Revisarlo antes de embarcar evita demoras y gastos innecesarios.",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "como-planificar-tiempos-y-costos-logisticos",
    category: "Logística",
    title: "Cómo planificar tiempos y costos logísticos",
    excerpt:
      "Una buena planificación permite anticipar tiempos de tránsito, gastos asociados y decisiones importantes antes de mover la carga.",
    image: "/images/cargo-ship.jpg",
    imageAlt: "Buque de carga en operación logística internacional",
    content: {
      intro:
        "La logística internacional no depende solo del transporte. También intervienen tiempos de preparación, documentación, coordinación con proveedores, costos de origen, flete, seguros, gastos de destino y posibles demoras.",
      sections: [
        {
          title: "Definir origen, destino y tipo de carga",
          text: "Antes de cotizar, es importante conocer desde dónde sale la mercadería, hacia dónde va, qué volumen ocupa, cuánto pesa y si requiere cuidados especiales.",
        },
        {
          title: "Comparar medios de transporte",
          text: "El transporte marítimo suele ser más conveniente para grandes volúmenes, mientras que el aéreo puede ser útil cuando la urgencia justifica un costo mayor. La elección impacta directamente en tiempos y presupuesto.",
        },
        {
          title: "Considerar costos adicionales",
          text: "Además del flete, pueden existir gastos de depósito, manipuleo, documentación, seguros, gastos portuarios, transporte interno y costos aduaneros.",
        },
        {
          title: "Anticipar tiempos reales",
          text: "Una operación puede demorar más que el tránsito internacional. También hay que considerar preparación de carga, emisión documental, liberación aduanera y entrega final.",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "primeros-pasos-para-exportar-desde-argentina",
    category: "Exportación",
    title: "Primeros pasos para exportar desde Argentina",
    excerpt:
      "Aspectos iniciales que una empresa debe tener en cuenta antes de vender al exterior: documentación, destino, logística y viabilidad.",
    image: "/images/export.jpg",
    imageAlt: "Operación de exportación y comercio internacional",
    content: {
      intro:
        "Exportar puede abrir nuevas oportunidades comerciales, pero requiere planificación. Antes de vender al exterior, conviene revisar la viabilidad del producto, el mercado de destino, la documentación necesaria y la logística.",
      sections: [
        {
          title: "Evaluar el producto y el mercado",
          text: "No todos los productos tienen las mismas condiciones de ingreso en otros países. Es importante analizar demanda, requisitos, competencia, precios y posibles restricciones.",
        },
        {
          title: "Preparar documentación comercial",
          text: "La factura comercial, el packing list, certificados y documentación de transporte deben estar correctamente preparados para evitar demoras o rechazos.",
        },
        {
          title: "Definir la logística de exportación",
          text: "Hay que coordinar transporte interno, depósito, consolidación si corresponde, medio internacional y condiciones pactadas con el comprador.",
        },
        {
          title: "Calcular costos y condiciones de venta",
          text: "Antes de cerrar una operación, es clave estimar costos logísticos, aduaneros, seguros y condiciones comerciales para no perder rentabilidad.",
        },
      ],
    },
  },
];
