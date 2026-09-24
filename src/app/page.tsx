import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ArrowRight,
  Scale,
  FileText,
  Layers,
  ShieldCheck,
  Factory,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { productsData } from "@/data/products";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { DeliveryCoverage } from "@/components/DeliveryCoverage";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { FaqSection } from "@/components/FaqSection";

export default function HomePage() {
  const whatsappConsultUrl = getWhatsappUrl({
    customMessage: `Halo Admin PT. Bumi Kutai Perkasa 👋

Saya ingin konsultasi kebutuhan material batu untuk proyek di [wilayah/kecamatan].

Mohon info:
1. Jenis & harga material yang tersedia
2. Estimasi ongkos kirim
3. Ketersediaan armada dump truck

Terima kasih.`,
  });

  return (
    <div className="flex flex-col bg-white dark:bg-[#0B0F12] text-[#0F172A] dark:text-[#F8FAFC]">
      {/* ============================================================
          1. HERO — MODERN INDUSTRIAL MINIMALIST (ENGAGING & HIGH IMPACT)
          ============================================================ */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#1E293B] bg-gradient-to-b from-[#FFF7ED]/30 via-white to-white dark:from-[#161D24]/40 dark:via-[#0B0F12] dark:to-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
          {/* Subtle Industrial Context Line */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#E2E8F0] dark:border-[#1E293B] text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#EA580C]" />
              <span className="font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">
                {siteConfig.name}
              </span>
              <span>/</span>
              <span>KUTAI KARTANEGARA</span>
            </div>
            <div className="flex items-center gap-3">
              <span>STOCKPILE: DUSUN JAMBE, SEBULU</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="hidden sm:inline font-semibold text-[#EA580C] dark:text-[#FB923C]">
                OUTPUT: 60 TON/JAM
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] dark:bg-[#EA580C]/15 border border-[#FED7AA] dark:border-[#EA580C]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
                  <span>Produsen &amp; Supplier Berizin Resmi</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.1] font-heading">
                  Jual Batu Koral Tenggarong &amp; Batu Split Berkualitas
                </h1>

                <p className="text-lg sm:text-xl text-[#EA580C] dark:text-[#FB923C] font-semibold tracking-tight font-heading">
                  Pasokan Langsung dari Stone Crusher Sebulu, Kutai Kartanegara
                </p>
              </div>

              <p className="text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
                <strong>{siteConfig.name}</strong> melayani penjualan khusus
                material batu murni: <strong>jual batu koral</strong>,{" "}
                <strong>jual batu split</strong> aneka fraksi (1x1, 1x2, 2x3, 3x5,
                5x7), <strong>abu batu</strong>, <strong>batu agregat</strong>,
                dan <strong>batu pondasi belah</strong> langsung dari fasilitas
                stone crusher. Kami menjamin transparansi timbangan tonase akurat
                dan kesiapan armada dump truck serta ponton pengiriman terjadwal ke{" "}
                <strong>Tenggarong</strong> dan seluruh wilayah{" "}
                <strong>Kutai Kartanegara</strong>.
              </p>

              {/* Call to Actions (High Conversion) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white px-7 py-3.5 text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
                >
                  <WhatsappIcon className="w-4 h-4 shrink-0" />
                  <span>Konsultasi &amp; Tanya Harga</span>
                </a>

                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#161D24] hover:bg-[#FFF7ED] dark:hover:bg-[#1E293B] text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#EA580C] dark:hover:text-[#FB923C] px-6 py-3.5 text-sm font-semibold border border-[#E2E8F0] dark:border-[#30363A] hover:border-[#EA580C] dark:hover:border-[#FB923C] rounded-lg transition-all"
                >
                  <span>Katalog 11 Fraksi Batu</span>
                  <ArrowRight className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
                </Link>
              </div>

              {/* Minimalist 4-Metric Bar */}
              <div className="pt-6 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-xs font-mono">
                  <div className="space-y-0.5">
                    <span className="text-[#64748B] dark:text-[#94A3B8] uppercase text-[10px] tracking-wider block">
                      Throughput Crusher
                    </span>
                    <span className="font-extrabold text-[#0F172A] dark:text-white text-base block font-heading">
                      60 Ton/Jam
                    </span>
                    <span className="text-[#EA580C] dark:text-[#FB923C] text-[11px] block font-medium">
                      Produksi Kontinu
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[#64748B] dark:text-[#94A3B8] uppercase text-[10px] tracking-wider block">
                      Kontrak Minimal
                    </span>
                    <span className="font-extrabold text-[#0F172A] dark:text-white text-base block font-heading">
                      &ge; 3.000 MT
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8] text-[11px] block">
                      Per Bulan
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[#64748B] dark:text-[#94A3B8] uppercase text-[10px] tracking-wider block">
                      Variasi Fraksi
                    </span>
                    <span className="font-extrabold text-[#0F172A] dark:text-white text-base block font-heading">
                      11 Produk
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8] text-[11px] block">
                      Split s/d Boulder
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[#64748B] dark:text-[#94A3B8] uppercase text-[10px] tracking-wider block">
                      Armada Angkut
                    </span>
                    <span className="font-extrabold text-[#0F172A] dark:text-white text-base block font-heading">
                      Truck &amp; Ponton
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8] text-[11px] block">
                      Darat &amp; Sungai
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media Frame (5 Cols) — Authentic Industrial Photography */}
            <div className="lg:col-span-5">
              <div className="relative group bg-white dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {/* Main Crusher Photo */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F1F5F9] dark:bg-[#1E293B] rounded-lg">
                  <Image
                    src="/mesin/mesin1_crusher.jpg"
                    alt="Unit Stone Crusher 60 Ton per jam PT. Bumi Kutai Perkasa di Dusun Jambe, Sebulu"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/10">
                    <span className="text-[#FB923C] font-bold mr-1.5">&bull;</span>
                    Stone Crusher 60 Ton/Jam
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                    Dusun Jambe, Sebulu
                  </div>
                </div>

                {/* Sub-strip: Real Stone Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="relative aspect-square overflow-hidden bg-[#F1F5F9] dark:bg-[#1E293B] rounded-md border border-[#E2E8F0] dark:border-[#30363A]">
                    <Image
                      src="/koral_21.jpg"
                      alt="Batu Split 1-2 cm untuk cor beton struktur"
                      fill
                      sizes="15vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 left-1 bg-[#0F172A]/85 text-[9px] font-mono text-white px-1.5 py-0.5 rounded-xs">
                      Split 1x2
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden bg-[#F1F5F9] dark:bg-[#1E293B] rounded-md border border-[#E2E8F0] dark:border-[#30363A]">
                    <Image
                      src="/koral_23.jpg"
                      alt="Batu Split 2-3 cm untuk jalan dan jembatan"
                      fill
                      sizes="15vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 left-1 bg-[#0F172A]/85 text-[9px] font-mono text-white px-1.5 py-0.5 rounded-xs">
                      Split 2x3
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden bg-[#F1F5F9] dark:bg-[#1E293B] rounded-md border border-[#E2E8F0] dark:border-[#30363A]">
                    <Image
                      src="/pondasi_tronjolan.jpg"
                      alt="Batu Pondasi Belah & Tronjolan Bronjong"
                      fill
                      sizes="15vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 left-1 bg-[#0F172A]/85 text-[9px] font-mono text-white px-1.5 py-0.5 rounded-xs">
                      Pondasi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. VISUAL STONE SPECIMEN MATRIX (KATALOG PRODUK PILIHAN)
          ============================================================ */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#E2E8F0] dark:border-[#1E293B] gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
                KATALOG MATERIAL PILIHAN
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight mt-1 font-heading">
                Jual Batu Koral &amp; Batu Split dari {siteConfig.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] max-w-md leading-relaxed">
              Pilihan batu split, abu batu, agregat, dan batu pondasi murni
              langsung dari stone crusher di Dusun Jambe, Sebulu untuk proyek cor
              dan infrastruktur di Tenggarong &amp; seluruh Kukar.
            </p>
          </div>

          {/* 6 High-Impact Real Stone Specimen Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.slice(0, 6).map((product) => {
              const productWaUrl = getWhatsappUrl({ namaProduk: product.name });

              return (
                <article
                  key={product.slug}
                  className="relative group bg-white dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#EA580C] dark:hover:border-[#FB923C] rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* Stretched Link to open specification */}
                  <Link
                    href={`/produk/${product.slug}`}
                    className="absolute inset-0 z-0"
                    aria-label={`Buka spesifikasi ${product.name}`}
                  />

                  <div className="relative z-0 pointer-events-none">
                    {/* Real Stone Photography Frame */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F1F5F9] dark:bg-[#1E293B]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border border-white/10 tracking-wider">
                        {product.category}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white font-heading group-hover:text-[#EA580C] dark:group-hover:text-[#FB923C] transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Technical Uses Bullet */}
                      <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E293B] space-y-1 text-xs text-[#475569] dark:text-[#94A3B8]">
                        {product.uses.slice(0, 2).map((use, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-[#EA580C] dark:text-[#FB923C] font-bold">
                              &bull;
                            </span>
                            <span className="truncate">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-5 pt-0 border-t border-[#E2E8F0]/80 dark:border-[#1E293B] mt-2 flex items-center justify-between gap-3 relative z-10">
                    <span className="text-xs font-mono font-bold text-[#0F172A] dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-[#FB923C] inline-flex items-center gap-1 transition-colors">
                      <span>Lihat Spesifikasi</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>

                    <a
                      href={productWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs font-semibold rounded-md shadow-xs transition-colors relative z-20"
                    >
                      <WhatsappIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Tanya Harga</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-colors rounded-lg shadow-sm font-heading"
            >
              <span>Lihat Semua 11 Fraksi Batu Koral &amp; Batu Split</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. INTEGRATED PLANT & LEGAL CAPABILITY (PABRIK & LEGALITAS TERPADU)
          ============================================================ */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
              KAPASITAS PABRIK &amp; STANDAR OPERASIONAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight mt-1 font-heading">
              Integritas Pasokan: Kapasitas Nyata, Tonase Transparan &amp; Legal
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              Kombinasi unit mesin pemecah batu (stone crusher) aktif berkapasitas
              tinggi di Dusun Jambe, Sebulu dengan kepatuhan legalitas formal untuk
              mendukung kelancaran proyek kontraktor dan instansi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Stone Crusher Facility Block (5 Cols) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-6 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-[#EA580C] dark:text-[#FB923C]" />
                    <span className="text-xs font-mono font-bold uppercase text-[#0F172A] dark:text-white">
                      Unit Stone Crusher
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#FFF7ED] dark:bg-[#EA580C]/20 text-[#EA580C] dark:text-[#FB923C] px-2 py-0.5 rounded font-bold">
                    60 Ton / Jam
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-[#E2E8F0] dark:bg-[#1E293B]">
                  <Image
                    src="/mesin/mesin1_crusher.jpg"
                    alt="Fasilitas Unit Pemecah Batu Stone Crusher PT. Bumi Kutai Perkasa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>

                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  Mesin stone crusher kami memproses batuan keras alam dengan
                  sistem pemilahan bertingkat, menghasilkan fraksi seragam untuk
                  memenuhi standar adukan cor beton ready mix maupun lapisan jalan
                  aspal.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#64748B] dark:text-[#94A3B8] block text-[10px]">
                    KONTRAK MINIMAL
                  </span>
                  <span className="font-bold text-[#0F172A] dark:text-white text-sm">
                    &ge; 3.000 MT/Bulan
                  </span>
                </div>
                <Link
                  href="/tentang-kami"
                  className="text-xs font-bold text-[#EA580C] dark:text-[#FB923C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Profil &amp; Legalitas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Box: 4 Trust Pillars (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-5 rounded-xl space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] dark:bg-[#EA580C]/15 border border-[#FED7AA] dark:border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] dark:text-[#FB923C]">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] dark:text-white font-heading">
                  Transparansi Tonase Nyata
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  Setiap muatan ditimbang secara akurat dan transparan dengan
                  jembatan timbang sebelum armada keluar dari stockpile. Bebas
                  kecurangan takaran.
                </p>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-5 rounded-xl space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] dark:bg-[#EA580C]/15 border border-[#FED7AA] dark:border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] dark:text-[#FB923C]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] dark:text-white font-heading">
                  Batu Quarry Gunung Padat
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  Batuan keras bersudut tajam dengan densitas tinggi, minim pori,
                  dan daya rekat semen maksimal untuk cor beton mutu tinggi dan
                  pondasi kokoh.
                </p>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-5 rounded-xl space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] dark:bg-[#EA580C]/15 border border-[#FED7AA] dark:border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] dark:text-[#FB923C]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] dark:text-white font-heading">
                  Badan Usaha &amp; Faktur Pajak
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  Berbadan hukum PT resmi, NIB 1012240094415, Kemenkumham RI, dan
                  NPWP Badan Usaha aktif. Siap penerbitan Faktur Pajak resmi (PPN)
                  dan perikatan SPK.
                </p>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#1E293B] p-5 rounded-xl space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] dark:bg-[#EA580C]/15 border border-[#FED7AA] dark:border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] dark:text-[#FB923C]">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] dark:text-white font-heading">
                  Disiplin Ritase Dump Truck
                </h4>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                  Koordinasi pengiriman langsung dengan dispatcher lapangan
                  menjamin kontinuitas pasokan material sesuai target waktu
                  pengecoran proyek Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. LOGISTICS & DELIVERY COVERAGE
          ============================================================ */}
      <DeliveryCoverage />

      {/* ============================================================
          5. FAQ & HIGH-CONVERSION CORPORATE CLOSING BANNER
          ============================================================ */}
      <FaqSection />

      {/* Corporate Final Callout */}
      <section className="bg-gradient-to-b from-[#FFF7ED] to-white dark:bg-gradient-to-r dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] text-[#0F172A] dark:text-white py-16 sm:py-20 border-t border-[#FED7AA]/60 dark:border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/10 dark:bg-[#EA580C]/20 border border-[#EA580C]/30 dark:border-[#EA580C]/40 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pemesanan &amp; Pengadaan Resmi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Perlu Pasokan Material Batu untuk Proyek di Kukar?
          </h2>

          <p className="text-[#475569] dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Untuk informasi ketersediaan stok riil di stockpile, penawaran harga
            resmi per ton/rit, atau jadwal ritase dump truck ke lokasi Anda,
            silakan hubungi dispatcher <strong>{siteConfig.name}</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white px-8 py-4 text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              <WhatsappIcon className="w-4 h-4 shrink-0" />
              <span>Hubungi Dispatcher via WhatsApp</span>
            </a>

            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#0F172A] dark:text-white bg-white dark:bg-white/10 hover:bg-[#FFF7ED] dark:hover:bg-white/15 border border-[#E2E8F0] dark:border-white/20 rounded-lg transition-colors font-heading shadow-xs"
            >
              <MapPin className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
              <span>Titik Lokasi Google Maps</span>
            </Link>
          </div>

          <div className="pt-4 text-xs text-[#64748B] dark:text-slate-400 font-mono">
            Operasional {siteConfig.name}: {siteConfig.operatingHours} &bull;
            Fasilitas: Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
          </div>
        </div>
      </section>
    </div>
  );
}
