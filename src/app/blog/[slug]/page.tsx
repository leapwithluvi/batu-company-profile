import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  articlesData,
} from "@/data/articles";
import { getProductBySlug } from "@/data/products";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Package,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const articleKeywords = [
    article.title.toLowerCase(),
    `${article.category.toLowerCase()} tenggarong`,
    `${article.category.toLowerCase()} sebulu`,
    `${article.category.toLowerCase()} kukar`,
    `material konstruksi ${siteConfig.shortName.toLowerCase()}`,
    `batu split ${siteConfig.shortName.toLowerCase()}`,
    "supplier batu kalimantan timur",
  ];

  return {
    title: `${article.title} | ${siteConfig.name}`,
    description: article.excerpt,
    keywords: articleKeywords,
    alternates: {
      canonical: `${siteConfig.url}/blog/${article.slug}`,
    },
    openGraph: {
      // og:title keyword-rich supaya saat dishare di WA/FB tampil lengkap
      title: `${article.title} - ${siteConfig.name} | Tenggarong, Kutai Kartanegara`,
      description: article.excerpt,
      type: "article",
      locale: "id_ID",
      siteName: siteConfig.name,
      publishedTime: article.publishedDate,
      authors: [article.author],
      url: `${siteConfig.url}/blog/${article.slug}`,
      images: [
        {
          url: `${siteConfig.url}${article.image}`,
          width: 1200,
          height: 800,
          alt: article.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - ${siteConfig.name}`,
      description: article.excerpt,
      images: [`${siteConfig.url}${article.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related products from single or multiple slugs
  const relatedSlugs =
    article.relatedProductSlugs ||
    (article.relatedProductSlug ? [article.relatedProductSlug] : []);
  const relatedProducts = relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const otherArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    inLanguage: "id-ID",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${siteConfig.url}/tentang-kami`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo/logo.png`,
        width: 200,
        height: 200,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    about: {
      "@type": "Thing",
      name: "Batu Koral Tenggarong & Material Konstruksi Kutai Kartanegara",
    },
  };

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(articleSchema),
        }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white dark:bg-[#181C1F] border-b border-[#E2E8F0] dark:border-[#30363A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
          />
        </div>
      </div>

      <article className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-[#EA580C] dark:text-[#FB923C] font-semibold uppercase tracking-wider mb-3">
            <span>{article.category}</span>
            <span>&bull;</span>
            <span className="text-[#6B7378] dark:text-[#A5ADB2]">
              Tenggarong, Kutai Kartanegara, dan Sekitarnya
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight leading-snug">
            {article.title}
          </h1>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0] dark:border-[#30363A] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#6B7378] dark:text-[#A5ADB2]" />
              <a
                href="/tentang-kami"
                className="hover:text-[#EA580C] dark:hover:text-[#FB923C] transition-colors underline-offset-2 hover:underline"
              >
                {article.author}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#6B7378] dark:text-[#A5ADB2]" />
              <span>{article.publishedDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#6B7378] dark:text-[#A5ADB2]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-16/10 w-full bg-[#F1F5F9] dark:bg-[#202529] border border-[#E2E8F0] dark:border-[#30363A] overflow-hidden mb-10 rounded-xs shadow-xs">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-white dark:bg-[#181C1F] border border-[#E2E8F0] dark:border-[#30363A] p-6 sm:p-10 lg:p-12 space-y-8 text-[#171A1C] dark:text-[#F1F3F4] text-sm sm:text-base leading-relaxed rounded-xs shadow-xs">
          <p className="text-base sm:text-lg font-medium text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed border-l-4 border-[#EA580C] dark:border-[#FB923C] pl-4 py-1.5 italic bg-[#F1F5F9]/60 dark:bg-[#202529] rounded-r-xs">
            {article.excerpt}
          </p>

          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight pt-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Integrated Material Product Funnel Highlight */}
          {relatedProducts.length > 0 && (
            <div className="mt-10 p-6 bg-[#171A1C] text-slate-100 border border-[#30363A] space-y-4 rounded-xs shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FB923C] uppercase font-semibold">
                <Package className="w-4 h-4" />
                <span>Katalog Produk Terkait:</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Kebutuhan Material Terkait dari {siteConfig.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {siteConfig.name} beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai
                Kartanegara, dan melayani kebutuhan pengiriman material ke
                Tenggarong, Kutai Kartanegara, dan sekitarnya.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {relatedProducts.map((p) => (
                  <div
                    key={p.slug}
                    className="p-3 bg-[#111416] border border-[#30363A] flex flex-col justify-between rounded-xs"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-[#FB923C] font-semibold">
                        {p.category}
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        {p.name}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {p.shortDescription}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#30363A] flex items-center justify-between">
                      <Link
                        href={`/produk/${p.slug}`}
                        className="text-xs text-slate-300 hover:text-white font-medium inline-flex items-center gap-1"
                      >
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <WhatsappButton
                        namaProduk={p.name}
                        judulArtikel={article.title}
                        variant="compact"
                        label="Tanya Harga"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back and Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold text-[#3F4549] dark:text-[#C2C8CC] hover:text-[#171A1C] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Semua Panduan</span>
          </Link>
        </div>

        {/* Related Guides */}
        {otherArticles.length > 0 && (
          <div className="mt-14 pt-10 border-t border-[#E2E8F0] dark:border-[#30363A]">
            <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] mb-6 font-mono uppercase tracking-wider">
              Panduan Konstruksi Lainnya:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white dark:bg-[#181C1F] border border-[#E2E8F0] dark:border-[#30363A] p-5 hover:border-[#CBD5E1] dark:hover:border-[#41494E] transition-colors flex flex-col justify-between rounded-xs shadow-xs"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#EA580C] dark:text-[#FB923C] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-1 line-clamp-2">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="hover:text-[#EA580C] dark:hover:text-[#FB923C] transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-xs font-semibold text-[#EA580C] dark:text-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FDBA74] mt-4 inline-flex items-center gap-1"
                  >
                    <span>Baca Panduan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
