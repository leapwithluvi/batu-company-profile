import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Scale,
  FileText,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productsData } from "@/data/products";
import { articlesData } from "@/data/articles";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { DeliveryCoverage } from "@/components/DeliveryCoverage";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#171A1C] text-slate-100 border-b border-[#30363A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Supplier Batu &amp; Material Konstruksi di Tenggarong
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                <strong>{siteConfig.name}</strong> beroperasi di{" "}
                <strong>Dusun Jambe, Kutai Kartanegara</strong>, melayani
                penyediaan material batu pondasi, abu batu, batu agregat, batu
                tronjolan, serta aneka ukuran batu gunung untuk kebutuhan proyek
                di Tenggarong dan wilayah sekitarnya.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <WhatsappButton
                  variant="primary"
                  label="Tanya Harga via WhatsApp"
                  className="text-sm py-3.5 px-6"
                />
                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#202529] hover:bg-[#282E33] transition-colors border border-[#30363A] rounded-xs"
                >
                  <span>Lihat Katalog Produk</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-[#30363A] grid grid-cols-3 gap-4 text-xs text-slate-400 font-mono">
                <div>
                  <div className="text-white font-bold text-base sm:text-lg font-sans">
                    8 Produk
                  </div>
                  <span>Varian Material Batu</span>
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg font-sans">
                    Dusun Jambe
                  </div>
                  <span>Lokasi Operasional</span>
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg font-sans">
                    Tenggarong &amp; Kukar
                  </div>
                  <span>Wilayah Distribusi</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative border-2 border-[#30363A] bg-[#111416] p-2 rounded-xs">
                <div className="relative aspect-4/3 overflow-hidden bg-[#202529] rounded-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80"
                    alt="Material batu konstruksi di stockpile operasional PT. Bumi Kutai Perkasa"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#111416]/90 p-3 text-xs text-slate-300 font-mono border-t border-[#30363A] flex justify-between items-center">
                    <span>{siteConfig.name}</span>
                    <span className="text-[#6F9AAA] font-bold">
                      Kutai Kartanegara
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / COMPANY SNAPSHOT */}
      <section className="bg-white dark:bg-[#181C1F] border-b border-[#D9DCDD] dark:border-[#30363A] py-6 sm:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Snapshot Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 flex-1">
              <div className="border-l-2 border-[#1F4E5F] dark:border-[#6F9AAA] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Identitas Perusahaan
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  {siteConfig.name}
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Badan Hukum PT Resmi
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Lokasi Operasional
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  Dusun Jambe, Kukar
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Kalimantan Timur
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Legalitas Usaha
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  NIB &amp; Akta Tersedia
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Siap Verifikasi Kontrak
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Jangkauan Logistik
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  Tenggarong &amp; Sekitarnya
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Armada Dump Truck Mandiri
                </span>
              </div>
            </div>

            {/* Factual CTA Link to About & Legality */}
            <div className="shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#D9DCDD] dark:border-[#30363A] lg:pl-6 flex items-center">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F4E5F] dark:text-[#6F9AAA] hover:text-[#173B48] dark:hover:text-[#8AB2C2] transition-colors py-1 group"
              >
                <span>Lihat Profil &amp; Legalitas</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL HIGHLIGHTS */}
      <section className="bg-[#EEF0F0]/50 dark:bg-[#181C1F]/50 border-b border-[#D9DCDD] dark:border-[#30363A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#181C1F] p-5 border border-[#D9DCDD] dark:border-[#30363A] rounded-xs shadow-xs">
              <Layers className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] mb-2" />
              <h2 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mb-1">
                Katalog Produk Terstruktur
              </h2>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Menyediakan abu batu, batu pondasi, tronjolan, agregat, hingga
                batu gunung ukuran 2x1, 2x3, 3x5, dan 5x7.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-5 border border-[#D9DCDD] dark:border-[#30363A] rounded-xs shadow-xs">
              <Truck className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] mb-2" />
              <h2 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mb-1">
                Pengiriman Terjadwal
              </h2>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Armada dump truck siap mengirim pasokan material langsung ke
                titik proyek Anda di wilayah Tenggarong.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-5 border border-[#D9DCDD] dark:border-[#30363A] rounded-xs shadow-xs">
              <Scale className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] mb-2" />
              <h2 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mb-1">
                Transparansi Takaran
              </h2>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Kepastian volume kubikasi bak armada untuk memastikan kebutuhan
                material di lapangan terpenuhi.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-5 border border-[#D9DCDD] dark:border-[#30363A] rounded-xs shadow-xs">
              <MapPin className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] mb-2" />
              <h2 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mb-1">
                Informasi Geografis Jujur
              </h2>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Beroperasi nyata di Dusun Jambe, Kutai Kartanegara, dengan
                jangkauan distribusi aktif ke kota Tenggarong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D9DCDD] dark:border-[#30363A] gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Katalog Produk Utama
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1">
              Material Batu dari {siteConfig.name}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC] max-w-md">
            Pilihan material konstruksi untuk pondasi bangunan, adukan cor,
            paving block, hingga lapis perkerasan jalan di Kutai Kartanegara.
          </p>
        </div>

        {/* Highlight 4 core products on homepage */}
        <div className="space-y-8">
          {productsData.slice(0, 4).map((product, idx) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant="editorial"
              index={idx}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171A1C] dark:bg-[#202529] hover:bg-[#202529] dark:hover:bg-[#282E33] text-white text-xs sm:text-sm font-semibold transition-colors border border-[#30363A] rounded-xs shadow-xs"
          >
            <span>Lihat Seluruh 8 Varian Produk &amp; Ukuran Batu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. ABOUT / COMPANY PROFILE */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#181C1F] border-t border-b border-[#D9DCDD] dark:border-[#30363A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
                Profil Perusahaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
                Penyedia Material Batu Konstruksi Resmi di Kutai Kartanegara
              </h2>
              <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                <strong>{siteConfig.name}</strong> menyediakan berbagai material
                batu untuk kebutuhan konstruksi di wilayah Kutai Kartanegara dan
                sekitarnya. Fasilitas operasional kami berlokasi di{" "}
                <strong>Dusun Jambe</strong>, dengan fokus distribusi utama
                melayani kebutuhan proyek di <strong>Tenggarong</strong> serta
                wilayah sekitarnya.
              </p>
              <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Mulai dari pekerjaan pondasi awal rumah tinggal, dinding penahan
                tebing turap sungai, hingga perkerasan jalan akses alat berat,
                kami berkomitmen menjaga ketepatan volume kubikasi serta
                kejelasan komunikasi pengiriman armada.
              </p>

              <div className="border-l-4 border-[#1F4E5F] dark:border-[#6F9AAA] bg-[#EEF0F0]/60 dark:bg-[#202529] p-4 space-y-2 text-xs text-[#3F4549] dark:text-[#C2C8CC] rounded-r-xs">
                <div className="font-bold text-[#171A1C] dark:text-[#F1F3F4] font-mono">
                  Komitmen Pelayanan:
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>
                      Konfirmasi ketersediaan stok material secara langsung
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>Penjadwalan ritase dump truck transparan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>Komunikasi mudah via WhatsApp resmi</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/tentang-kami"
                  className="text-xs font-bold text-[#1F4E5F] dark:text-[#6F9AAA] hover:text-[#173B48] dark:hover:text-[#8AB2C2] inline-flex items-center gap-1.5"
                >
                  <span>
                    Lihat Profil Lengkap, Legalitas &amp; Fasilitas Operasional
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 bg-[#EEF0F0] dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] p-2 rounded-xs">
                <div className="relative w-full h-full overflow-hidden bg-[#D9DCDD] dark:bg-[#30363A] rounded-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Pekerjaan perkerasan dan distribusi batu material oleh PT. Bumi Kutai Perkasa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#111416]/90 p-2.5 text-[11px] text-slate-300 font-mono border-t border-[#30363A] flex justify-between items-center">
                    <span>Dokumentasi Operasional</span>
                    <span className="text-[#6F9AAA]">Distribusi Lapangan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOGISTICS & DELIVERY COVERAGE */}
      <DeliveryCoverage />

      {/* 6. FEATURED GUIDES / BLOG */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D9DCDD] dark:border-[#30363A] gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Pusat Edukasi &amp; Panduan Material
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1">
              Panduan Pemilihan Material Batu
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs sm:text-sm font-semibold text-[#1F4E5F] dark:text-[#6F9AAA] hover:text-[#173B48] dark:hover:text-[#8AB2C2] inline-flex items-center gap-1"
          >
            <span>Lihat Semua Panduan &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* 7. WHATSAPP INQUIRY BANNER */}
      <section className="bg-[#171A1C] text-slate-100 border-t border-[#30363A] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase text-[#6F9AAA] font-semibold mb-2">
            Konsultasi Langsung via WhatsApp
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Perlu Material Batu untuk Proyek Anda di Tenggarong?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Untuk informasi ketersediaan material dan penawaran harga, calon
            pembeli dapat menghubungi <strong>{siteConfig.name}</strong> melalui
            WhatsApp. Tim kami siap membantu menghitungkan kebutuhan ritase dan
            biaya antar ke lokasi Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <WhatsappButton
              variant="primary"
              label="Tanya Harga via WhatsApp"
              className="w-full sm:w-auto text-sm py-4 px-8"
            />
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white bg-[#202529] hover:bg-[#282E33] transition-colors border border-[#30363A] rounded-xs"
            >
              <FileText className="w-4 h-4 mr-2 text-[#6F9AAA]" />
              <span>Kontak &amp; Lokasi Operasional</span>
            </Link>
          </div>

          <div className="mt-6 text-xs text-slate-500 font-mono">
            Operasional {siteConfig.name}: {siteConfig.operatingHours}
          </div>
        </div>
      </section>
    </div>
  );
}
