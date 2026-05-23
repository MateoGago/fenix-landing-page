import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsPosts } from "@/lib/data/news";

export function News() {
  return (
    <section id="novedades" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17212B] mb-3 text-balance">
              Información útil para operar mejor.
            </h2>
            <p className="text-[#667381] text-base leading-relaxed">
              Novedades del sector para empresas que necesitan estar informadas
              antes de tomar decisiones comerciales.
            </p>
          </div>
          <Link
            href="/novedades"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E6F9E] hover:text-[#102B4E] transition-colors whitespace-nowrap group flex-shrink-0"
          >
            Ver más novedades
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#DDE1E7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-[#2E6F9E] bg-[#EEF4FA] px-2.5 py-1 rounded-full self-start">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-[#17212B] leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#667381] leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href="/novedades"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E6F9E] hover:text-[#102B4E] transition-colors mt-1 group/link"
                >
                  Leer más
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
