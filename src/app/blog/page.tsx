import React from "react";
import type { Metadata } from "next";
import { articlesData } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/lib/site-config";
import { BookOpen, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Panduan Material Batu & Konstruksi | PT. Bumi Kutai Perkasa",
  description:
    "Pusat informasi dan panduan teknis pemilihan material batu pondasi, abu batu, batu tronjolan, batu agregat, dan ukuran batu gunung untuk proyek konstruksi di Tenggarong dan Kutai Kartanegara.",
  keywords: [
    "apa itu abu batu",
    "fungsi batu pondasi",
    "perbedaan ukuran batu gunung",
    "kegunaan batu agregat",
    "batu tronjolan tenggarong",
    "supplier batu kutai kartanegara",
  ],
};

export default function BlogIndexPage() {
  const [featuredArticle, ...otherArticles] = articlesData;

  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Top Header */}
      <section className="bg-[#171A1C] text-slate-100 border-b border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Blog & Panduan" }]}
            className="text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-white mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase text-[#6F9AAA] tracking-wider">
              {siteConfig.name} &bull; Pusat Edukasi Material
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Panduan Praktis Material &amp; Konstruksi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Artikel informatif yang menjawab kebutuhan calon pelanggan dalam menentukan spesifikasi batu pondasi, abu batu, batu agregat, dan aneka ukuran batu gunung untuk konstruksi di Tenggarong dan Kutai Kartanegara.
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
              <BookOpen className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <span>Artikel Pilihan</span>
            </div>
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Other Articles Grid */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D9DCDD] dark:border-[#30363A]">
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
            <div className="flex items-center gap-2 text-xs font-mono text-[#6F9AAA] font-semibold uppercase">
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
