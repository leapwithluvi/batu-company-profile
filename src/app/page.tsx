import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  CheckCircle2,
  ArrowRight,
  Scale,
  FileText,
  Layers,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productsData } from "@/data/products";
import { articlesData } from "@/data/articles";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { DeliveryCoverage } from "@/components/DeliveryCoverage";
import { HeroImageSlider } from "@/components/HeroImageSlider";

export default function HomePage() {
  const whatsappConsultUrl = getWhatsappUrl({
    customMessage: `Halo PT. Bumi Kutai Perkasa, saya ingin berkonsultasi mengenai kebutuhan material batu dan cek estimasi ongkos kirim ke proyek saya di Tenggarong.`,
  });

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Clean, High-End Corporate Industrial Canvas) */}
      <section className="relative bg-[#F7F7F5] dark:bg-[#111416] text-[#171A1C] dark:text-[#F1F3F4] border-b border-[#D9DCDD] dark:border-[#30363A] overflow-hidden py-14 sm:py-20 lg:py-24">
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 bg-grid-industrial opacity-35 dark:opacity-20 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge */}
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] rounded-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1F4E5F] dark:bg-[#6F9AAA]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1F4E5F] dark:text-[#6F9AAA]">
                  Badan Usaha Resmi &bull; Fasilitas Dusun Jambe, Kec. Sebulu, Kukar
                </span>
              </div> */}

              {/* Dominant Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A1C] dark:text-white leading-[1.15] font-heading">
                Supplier Material Batu Split &amp; Agregat Konstruksi
                Berkualitas
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-[#3F4549] dark:text-[#C2C8CC] max-w-2xl leading-relaxed">
                <strong>{siteConfig.name}</strong> menyediakan pasokan batu
                split, abu batu, batu agregat, batu tronjolan, serta aneka
                ukuran batu split. Dikelola dengan transparansi tonase
                serta kesiapan armada dump truck dan ponton untuk pengiriman
                terjadwal melayani <strong>Tenggarong</strong>, seluruh wilayah{" "}
                <strong>Kutai Kartanegara</strong>, dan sekitarnya.
              </p>

              {/* Action Buttons (Deep Industrial Blue + Crisp Outline) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1F4E5F] hover:bg-[#173B48] text-white dark:bg-white dark:hover:bg-slate-100 dark:text-[#111416] px-7 py-3.5 text-sm font-semibold rounded-md shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi &amp; Tanya Harga</span>
                </a>

                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#181C1F] hover:bg-[#EEF0F0] dark:hover:bg-[#202529] text-[#171A1C] dark:text-[#F1F3F4] px-6 py-3.5 text-sm font-semibold border border-[#D9DCDD] dark:border-[#30363A] rounded-md transition-all shadow-xs"
                >
                  <span>Katalog {productsData.length} Varian Batu</span>
                  <ArrowRight className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                </Link>
              </div>

              {/* Quick Trust Highlights (4-Column Data Grid) */}
              <div className="pt-6 border-t border-[#D9DCDD] dark:border-[#30363A] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="border-l-2 border-[#1F4E5F] dark:border-[#6F9AAA] pl-3">
                  <div className="text-[#171A1C] dark:text-white font-bold text-lg font-heading">
                    {productsData.length} Varian
                  </div>
                  <span className="text-[#6B7378] dark:text-[#A5ADB2] block mt-0.5">
                    Fraksi Siap Kirim
                  </span>
                </div>

                <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3">
                  <div className="text-[#171A1C] dark:text-white font-bold text-lg font-heading">
                    Dusun Jambe, Desa Sanggulan
                  </div>
                  <span className="text-[#6B7378] dark:text-[#A5ADB2] block mt-0.5">
                    Fasilitas Stockpile
                  </span>
                </div>

                <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3">
                  <div className="text-[#171A1C] dark:text-white font-bold text-lg font-heading">
                    Kutai Kartanegara
                  </div>
                  <span className="text-[#6B7378] dark:text-[#A5ADB2] block mt-0.5">
                    Fokus Distribusi
                  </span>
                </div>

                <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3">
                  <div className="text-[#171A1C] dark:text-white font-bold text-lg font-heading">
                    Dump Truck & Ponton
                  </div>
                  <span className="text-[#6B7378] dark:text-[#A5ADB2] block mt-0.5">
                    Armada Mandiri
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (Authentic Material Photo Slider) */}
            <div className="lg:col-span-5">
              <HeroImageSlider companyName={siteConfig.name} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / COMPANY SNAPSHOT (Factual Corporate Proof) */}
      <section className="bg-white dark:bg-[#181C1F] border-b border-[#D9DCDD] dark:border-[#30363A] py-7">
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
                  Badan Hukum PT Terdaftar
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Lokasi Operasional
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  Dusun Jambe, Desa Sanggulan, Kec. Sebulu
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Tersedia Titik Google Maps
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Kesiapan Dokumen
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  NIB &amp; Akta Notaris
                </span>
                <span className="block text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5">
                  Tersedia untuk Verifikasi SPK
                </span>
              </div>

              <div className="border-l-2 border-[#D9DCDD] dark:border-[#30363A] pl-3.5">
                <span className="block text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase tracking-wider">
                  Jangkauan Logistik
                </span>
                <span className="block text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  Kutai Kartanegara &amp; Sekitarnya
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

      {/* 3. OPERATIONAL STANDARDS (Kenapa Memilih Kami - Faktual & Nyata) */}
      <section className="bg-[#EEF0F0]/50 dark:bg-[#181C1F]/40 border-b border-[#D9DCDD] dark:border-[#30363A] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Standar Operasional &amp; Kepastian Proyek
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1.5 font-heading">
              Komitmen Kualitas &amp; Integritas Pengadaan Material
            </h2>
            <p className="mt-2.5 text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Kami menyadari bahwa keterlambatan material dan ketidaksesuaian
              takaran adalah masalah utama dalam pekerjaan konstruksi. PT. Bumi
              Kutai Perkasa beroperasi dengan prinsip transparansi dan disiplin
              teknis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#181C1F] p-6 border border-[#D9DCDD] dark:border-[#30363A] rounded-lg shadow-xs space-y-3">
              <Scale className="w-6 h-6 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] font-heading">
                Transparansi Takaran Tonase
              </h3>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Volume bak dump truck dapat diinspeksi bersama sebelum muatan
                dibongkar di lokasi. Tidak ada kecurangan tonase di lapangan.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-6 border border-[#D9DCDD] dark:border-[#30363A] rounded-lg shadow-xs space-y-3">
              <Layers className="w-6 h-6 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] font-heading">
                Material Batu Keras Quarry
              </h3>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Batu belah gunung padat bersudut tajam dengan daya rekat semen
                tinggi, sangat kokoh untuk pondasi bangunan dan adukan cor
                beton.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-6 border border-[#D9DCDD] dark:border-[#30363A] rounded-lg shadow-xs space-y-3">
              <Truck className="w-6 h-6 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] font-heading">
                Penjadwalan Armada Disiplin
              </h3>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Koordinasi langsung dengan dispatcher lapangan memastikan
                kontinuitas pengiriman material sesuai jadwal pengecoran proyek.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181C1F] p-6 border border-[#D9DCDD] dark:border-[#30363A] rounded-lg shadow-xs space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] font-heading">
                Badan Usaha Resmi &amp; Legal
              </h3>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Memenuhi legalitas usaha NIB dan NPWP Badan Usaha aktif untuk
                kebutuhan penerbitan faktur pajak serta perikatan kontrak
                formal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D9DCDD] dark:border-[#30363A] gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Katalog Material Pilihan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1 font-heading">
              Material Batu Konstruksi dari {siteConfig.name}
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
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F4E5F] hover:bg-[#173B48] text-white dark:bg-white dark:hover:bg-slate-100 dark:text-[#111416] text-xs sm:text-sm font-semibold transition-colors rounded-md shadow-xs"
          >
            <span>Lihat Seluruh {productsData.length} Varian Produk &amp; Ukuran Batu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. ABOUT / COMPANY PROFILE */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#181C1F] border-t border-b border-[#D9DCDD] dark:border-[#30363A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
                Profil Perusahaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight font-heading">
                Penyedia Material Batu Konstruksi Resmi di Kutai Kartanegara
              </h2>
              <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                <strong>{siteConfig.name}</strong> menyediakan berbagai material
                batu untuk kebutuhan konstruksi di wilayah Kutai Kartanegara dan
                sekitarnya. Fasilitas operasional kami berlokasi di{" "}
                <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu</strong>, dengan fokus
                distribusi utama melayani kebutuhan proyek di{" "}
                <strong>Tenggarong</strong> serta wilayah sekitarnya.
              </p>
              <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                Mulai dari pekerjaan pondasi awal rumah tinggal, dinding penahan
                tebing turap sungai, hingga perkerasan jalan akses alat berat,
                kami berkomitmen menjaga ketepatan tonase serta
                kejelasan komunikasi pengiriman armada.
              </p>

              <div className="border-l-4 border-[#1F4E5F] dark:border-[#6F9AAA] bg-[#EEF0F0]/60 dark:bg-[#202529] p-4 space-y-2 text-xs text-[#3F4549] dark:text-[#C2C8CC] rounded-r-md">
                <div className="font-bold text-[#171A1C] dark:text-[#F1F3F4] font-mono">
                  Komitmen Pelayanan:
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>
                      Konfirmasi ketersediaan stok material secara faktual
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>
                      Penjadwalan ritase dump truck transparan &amp;
                      terkoordinasi
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>
                      Komunikasi mudah &amp; responsif via saluran resmi
                    </span>
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

            {/* <div className="lg:col-span-5">
              <div className="relative aspect-4/3 bg-[#EEF0F0] dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] p-2 rounded-lg">
                <div className="relative w-full h-full overflow-hidden bg-[#D9DCDD] dark:bg-[#30363A] rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Pekerjaan perkerasan dan distribusi batu material oleh PT. Bumi Kutai Perkasa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-[#111416]/95 p-2.5 text-[11px] text-[#171A1C] dark:text-slate-300 font-mono border-t border-[#D9DCDD] dark:border-[#30363A] flex justify-between items-center">
                    <span>Dokumentasi Operasional</span>
                    <span className="text-[#1F4E5F] dark:text-[#6F9AAA] font-bold">
                      Distribusi Lapangan
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 6. LOGISTICS & DELIVERY COVERAGE */}
      <DeliveryCoverage />

      {/* 7. FEATURED GUIDES / BLOG */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D9DCDD] dark:border-[#30363A] gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Pusat Edukasi &amp; Panduan Material
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1 font-heading">
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

      {/* 8. CORPORATE INQUIRY BANNER (Clean Light/Dark Corporate Surface) */}
      <section className="bg-[#EEF0F0]/80 dark:bg-[#181C1F] border-t border-[#D9DCDD] dark:border-[#30363A] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase text-[#1F4E5F] dark:text-[#6F9AAA] font-semibold mb-2">
            Saluran Pengadaan &amp; Pemesanan Resmi
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#171A1C] dark:text-white tracking-tight font-heading">
            Perlu Pasokan Material Batu untuk Proyek di Kukar dan sekitarnya?
          </h2>

          <p className="mt-4 text-[#3F4549] dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Untuk informasi ketersediaan material, penawaran harga resmi, atau
            konsultasi ritase dump truck ke lokasi Anda, silakan hubungi tim
            dispatcher <strong>{siteConfig.name}</strong>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F4E5F] hover:bg-[#173B48] text-white dark:bg-white dark:hover:bg-slate-100 dark:text-[#111416] px-8 py-4 text-sm font-semibold rounded-md shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi Dispatcher via WhatsApp</span>
            </a>
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-[#171A1C] dark:text-white bg-white dark:bg-[#202529] hover:bg-[#E5E8E8] dark:hover:bg-[#282E33] transition-colors border border-[#D9DCDD] dark:border-[#30363A] rounded-md"
            >
              <FileText className="w-4 h-4 mr-2 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <span>Kontak &amp; Titik Lokasi Google Maps</span>
            </Link>
          </div>

          <div className="mt-6 text-xs text-[#6B7378] dark:text-slate-500 font-mono">
            Operasional {siteConfig.name}: {siteConfig.operatingHours} &bull;
            Fasilitas: Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
          </div>
        </div>
      </section>
    </div>
  );
}
