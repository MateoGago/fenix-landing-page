import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { newsPosts } from "@/lib/data/news";
import { HeaderMinimal } from "@/components/header-minimal";
import { FooterMinimal } from "@/components/footer-minimal";

export default function NovedadesPage() {
  return (
    <>
      <HeaderMinimal />
      <main className="min-h-screen bg-[#F6F8FA]">
        <section className="bg-[#071421] px-6 pb-20 pt-28 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
              Novedades
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Información útil para operar mejor.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Artículos y recomendaciones para empresas que importan, exportan o
              están evaluando iniciar operaciones de comercio exterior.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <Link
                key={post.id}
                href={`/novedades/${post.slug}`}
                className="flex flex-col overflow-hidden rounded-xl border border-[#DDE1E7] bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex h-full flex-col p-7">
                  <span className="inline-block rounded-full bg-[#EEF4FA] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2E6F9E]">
                    {post.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold leading-tight text-[#102B4E]">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-7 text-[#667381]">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#2E6F9E]">
                    Leer más
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}
