import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { newsPosts } from "@/lib/data/news";
import { HeaderMinimal } from "@/components/header-minimal";
import { FooterMinimal } from "@/components/footer-minimal";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <HeaderMinimal />
      <main className="min-h-screen bg-[#F6F8FA]">
        <section className="bg-[#071421] px-6 pb-20 pt-28 text-white lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/novedades"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver a novedades
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
              {post.category}
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#DDE1E7] bg-white shadow-sm">
            <div className="relative h-72 w-full md:h-96">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="text-lg leading-8 text-[#667381]">
                {post.content.intro}
              </p>

              <div className="mt-10 space-y-8">
                {post.content.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold text-[#102B4E]">
                      {section.title}
                    </h2>

                    <p className="mt-3 leading-8 text-[#667381]">
                      {section.text}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-xl bg-[#F6F8FA] p-6">
                <h3 className="text-xl font-bold text-[#102B4E]">
                  ¿Necesitás ayuda con una operación?
                </h3>

                <p className="mt-2 leading-7 text-[#667381]">
                  Fenix puede ayudarte a revisar documentación, planificar pasos
                  y ordenar tu operación de comercio exterior.
                </p>

                <Link
                  href="/#contacto"
                  className="mt-5 inline-flex rounded-md bg-[#102B4E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173B66]"
                >
                  Consultar operación
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}
