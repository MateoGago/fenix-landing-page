import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de importación, exportación, despacho aduanero, logística y consultoría en comercio exterior.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
