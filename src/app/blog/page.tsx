import React from "react";
import type { Metadata } from "next";
import { articlesData } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";
import { BookOpen, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Panduan Material Batu Koral & Konstruksi Tenggarong | PT. Bumi Kutai Perkasa",
  description:
    "Pusat informasi dan panduan teknis pemilihan batu koral, batu split, abu batu, batu tronjolan, dan batu agregat untuk proyek konstruksi di Tenggarong, Kutai Kartanegara, dan sekitarnya. Supplier resmi PT. Bumi Kutai Perkasa.",
  keywords: [
    // Intent informatif + lokal
    "panduan batu koral tenggarong",
    "panduan memilih batu split konstruksi",
    "apa itu batu koral ayak",
    "perbedaan batu split 1x1 2x1 2x3",
    "ukuran batu split untuk cor beton",
    "harga batu split tenggarong per ton",
    "harga abu batu kutai kartanegara",
    "batu tronjolan untuk bronjong tenggarong",
    "kegunaan batu agregat base course",
    "batu koral untuk pondasi rumah",
    "material konstruksi kutai kartanegara",
    "supplier batu koral sebulu kukar",
  ],
  alternates: {
    canonical: "https://www.bumikutaiperkasa.co.id/blog",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog & Panduan Material",
      item: `${siteConfig.url}/blog`,
    },
  ],
};

export default function BlogIndexPage() {
  const [featuredArticle, ...otherArticles] = articlesData;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(breadcrumbSchema),
        }}
      />
      {/* Top Header */}
      <section className="bg-white dark:bg-[#16191C] text-[#171A1C] dark:text-[#F1F3F4] border-b border-[#E2E8F0] dark:border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Blog & Panduan" }]}
            className="text-[#6B7378] dark:text-[#A5ADB2] [&_a]:text-[#6B7378] [&_a:hover]:text-[#EA580C] dark:[&_a]:text-[#A5ADB2] dark:[&_a:hover]:text-white [&_span]:text-[#171A1C] dark:[&_span]:text-white mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase text-[#EA580C] dark:text-[#FB923C] tracking-wider">
              {siteConfig.name} &bull; Pusat Edukasi Material
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#171A1C] dark:text-white tracking-tight mt-1 font-heading">
              Panduan Batu Koral &amp; Material Konstruksi Tenggarong
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Artikel teknis dan panduan praktis pemilihan <strong>batu koral</strong>,{" "}
              <strong>batu split</strong>, abu batu, batu agregat, dan batu tronjolan untuk
              proyek konstruksi di <strong>Tenggarong</strong>,{" "}
              <strong>Kutai Kartanegara</strong>, dan sekitarnya &mdash; disusun oleh tim teknis {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Article */}
        {featuredArticle && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase text-[#6B7378] dark:text-[#A5ADB2]">
              <BookOpen className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
              <span>Artikel Pilihan</span>
            </div>
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Other Articles Grid */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2E8F0] dark:border-[#30363A]">
            <h2 className="text-xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
              Kumpulan Panduan Material
            </h2>
            <span className="text-xs font-mono text-[#6B7378] dark:text-[#A5ADB2]">
              Total {articlesData.length} Artikel
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-[#171A1C] text-slate-100 p-8 border border-[#30363A] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xs shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FB923C] font-semibold uppercase">
              <HelpCircle className="w-4 h-4" />
              <span>Butuh Bantuan Menentukan Material yang Sesuai?</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Konsultasikan Kebutuhan Material Proyek Anda
            </h3>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              PT. Bumi Kutai Perkasa siap membantu mengonfirmasi ukuran fraksi batu dan estimasi ritase armada untuk lokasi pekerjaan Anda.
            </p>
          </div>
          <WhatsappButton
            label="Hubungi via WhatsApp"
            variant="primary"
            className="shrink-0 text-xs py-3 px-6"
          />
        </div>
      </section>
    </div>
  );
}
