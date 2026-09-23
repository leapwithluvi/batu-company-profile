import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/lib/site-config";
import { companyData } from "@/data/company";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  FileCheck,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profil Perusahaan Supplier Batu Koral Tenggarong | PT. Bumi Kutai Perkasa",
  description:
    "Profil resmi, identitas badan usaha, ketersediaan dokumen legalitas, dan fasilitas operasional PT. Bumi Kutai Perkasa — supplier batu koral Tenggarong di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara.",
  keywords: [
    // Intent verifikasi dan kepercayaan bisnis
    "profil PT Bumi Kutai Perkasa",
    "legalitas supplier batu koral tenggarong",
    "NIB PT Bumi Kutai Perkasa",
    "faktur pajak batu split kutai kartanegara",
    "SPK pengadaan material batu kaltim",
    "supplier batu koral sebulu kutai kartanegara",
    "quarry batu split dusun jambe sanggulan",
    "stone crusher tenggarong kapasitas 60 ton jam",
  ],
  alternates: {
    canonical: "https://www.bumikutaiperkasa.co.id/tentang-kami",
  },
};

export default function TentangKamiPage() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* 1. TOP HEADER */}
      <section className="bg-white dark:bg-[#16191C] text-[#171A1C] dark:text-[#F1F3F4] border-b border-[#D9DCDD] dark:border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Tentang Kami" }]}
            className="text-[#6B7378] dark:text-[#A5ADB2] [&_a]:text-[#6B7378] [&_a:hover]:text-[#1F4E5F] dark:[&_a]:text-[#A5ADB2] dark:[&_a:hover]:text-white [&_span]:text-[#171A1C] dark:[&_span]:text-white mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Profil &amp; Identitas Perusahaan
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#171A1C] dark:text-white tracking-tight mt-1 font-heading">
              Supplier Batu Koral Tenggarong &amp; Material Konstruksi Resmi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              <strong>{siteConfig.name}</strong> adalah penyedia{" "}
              <strong>batu koral</strong>, batu split, abu batu, batu agregat, dan batu
              pondasi berizin resmi yang beroperasi di{" "}
              <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara</strong>.
              Melayani pengiriman terjadwal ke <strong>Tenggarong</strong>,
              Tenggarong Seberang, Samarinda, dan seluruh wilayah Kalimantan Timur.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FACTUAL IDENTITY TABLE */}
      <section className="border-b border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
            <h2 className="text-xs font-mono uppercase font-bold text-[#6B7378] dark:text-[#A5ADB2] tracking-wider">
              Ringkasan Data Identitas Perusahaan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Nama Resmi Badan Usaha
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block">
                {companyData.officialName}
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Bentuk Hukum: Perseroan Terbatas (PT)
              </span>
            </div>

            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Fasilitas Stockpile &amp; Operasional
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block">
                Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Provinsi Kalimantan Timur 75511
              </span>
            </div>

            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Fokus Distribusi Pengiriman
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block">
                Tenggarong, Kutai Kartanegara &amp; Sekitarnya
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Kutai Kartanegara, Samarinda &amp; sekitarnya
              </span>
            </div>

            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Bidang Usaha Utama
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block">
                Perdagangan Besar Semen, Kapur, Pasir Dan Batu
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Pondasi, Adukan Cor &amp; Perkerasan Jalan
              </span>
            </div>

            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Waktu Pelayanan Dispatcher
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block">
                {siteConfig.operatingHours}
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Pengiriman proyek dapat dijadwalkan
              </span>
            </div>

            <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] rounded-md">
              <span className="text-[#6B7378] dark:text-[#A5ADB2] block mb-1">
                Saluran Komunikasi Resmi
              </span>
              <strong className="text-[#171A1C] dark:text-[#F1F3F4] text-sm block font-mono">
                {siteConfig.phoneDisplay}
              </strong>
              <span className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-0.5 block">
                Respon langsung tim operasional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFIL & PRINSIP OPERASIONAL */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-[#3F4549] dark:text-[#C2C8CC] text-sm sm:text-base leading-relaxed">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
                Latar Belakang &amp; Komitmen
              </span>
              <h2 className="text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1">
                Menghadirkan Kepastian Pasokan Material di Medan Konstruksi
                Kalimantan
              </h2>
            </div>

            <p>
              Didirikan sebagai entitas bisnis legal di Kalimantan Timur,{" "}
              <strong>{siteConfig.name}</strong> hadir menjawab kendala yang
              kerap dihadapi kontraktor, pengembang perumahan, dan pemilik
              proyek:{" "}
              <em>
                ketidakpastian takaran tonase bak armada serta jadwal pengiriman
                yang tidak teratur
              </em>
              .
            </p>

            <p>
              Karakteristik tanah di Kalimantan Timur—dengan kontur perbukitan,
              tanah lempung lunak, serta rawa pasang surut di sekitar aliran
              Sungai Mahakam—menuntut ketegasan spesifikasi material pondasi dan
              agregat. Penggunaan batu yang rapuh atau agregat berdebu lumpur
              tebal dapat menurunkan kekuatan daya dukung konstruksi secara
              drastis.
            </p>

            <div className="border-l-4 border-[#1F4E5F] dark:border-[#6F9AAA] bg-white dark:bg-[#181C1F] p-5 border border-[#D9DCDD] dark:border-[#30363A] rounded-r-xs shadow-xs">
              <h3 className="font-bold text-[#171A1C] dark:text-[#F1F3F4] text-base mb-2 font-mono">
                Standar Operasional 3T PT. Bumi Kutai Perkasa:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tepat Tonase:</strong> Setiap ritase armada ditimbang
                    secara akurat dan transparan sesuai pesanan, disertai bukti
                    timbangan resmi sebelum material dibongkar di lokasi proyek.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tepat Waktu:</strong> Penjadwalan ritase jelas dan
                    terencana sehingga pekerjaan tukang dan pengecoran tidak
                    terhambat keterlambatan logistik.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tepat Mutu:</strong> Bebatuan keras pilihan dengan
                    bidang rekat padat, disortir berdasarkan ukuran fraksi
                    standar SNI untuk kebutuhan pondasi dan cor.
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Fasilitas stockpile kami di{" "}
              <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu</strong> dikelola
              untuk menjaga ketersediaan material yang stabil, siap melayani
              pengadaan eceran ritase perumahan hingga kebutuhan pengadaan untuk
              proyek infrastruktur jalan dan gedung bertingkat.
            </p>
          </div>

          {/* Right Column / Key Highlights & Facilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-4/3 w-full bg-[#EEF0F0] dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] overflow-hidden rounded-lg shadow-xs">
              <Image
                src="/mesin/mesin1_crusher.jpg"
                alt="Stockpile dan operasional material batu PT. Bumi Kutai Perkasa di Dusun Jambe, Desa Sanggulan, Kec. Sebulu"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#111416]/90 p-2.5 text-[11px] text-slate-300 font-mono border-t border-[#30363A] flex justify-between items-center">
                <span>Dusun Jambe, Desa Sanggulan, Kec. Sebulu</span>
                <span className="text-[#6F9AAA]">Kutai Kartanegara</span>
              </div>
            </div>

            <div className="bg-[#171A1C] text-slate-100 p-6 border border-[#30363A] space-y-4 rounded-xl shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#6F9AAA] font-bold tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Kredibilitas Operasional</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="border border-[#30363A] p-3 bg-[#111416] rounded-md">
                  <div className="text-[#6F9AAA] font-bold text-base font-sans">
                    Fisik &amp; Nyata
                  </div>
                  <div className="text-slate-400 text-[11px] mt-1">
                    Stockpile di Dusun Jambe, Desa Sanggulan, Kec. Sebulu
                  </div>
                </div>
                <div className="border border-[#30363A] p-3 bg-[#111416] rounded-md">
                  <div className="text-[#6F9AAA] font-bold text-base font-sans">
                    Armada Mandiri
                  </div>
                  <div className="text-slate-400 text-[11px] mt-1">
                    Dump Truck &amp; Ponton Sungai
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                PT. Bumi Kutai Perkasa siap menerbitkan dokumen penawaran harga
                resmi, surat jalan, dan faktur untuk kebutuhan pengadaan
                perusahaan rekanan.
              </p>

              <WhatsappButton
                label="Konsultasi Pengadaan via WhatsApp"
                variant="primary"
                className="w-full text-xs py-3 justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEGALITAS & DOKUMEN PERUSAHAAN */}
      <section className="bg-white dark:bg-[#181C1F] border-t border-b border-[#D9DCDD] dark:border-[#30363A] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider mb-2">
              <FileCheck className="w-4 h-4" />
              <span>Kepatuhan Hukum &amp; Legalitas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
              Legalitas &amp; Dokumen Resmi Perusahaan
            </h2>
            <p className="mt-3 text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              {companyData.legalSummary}
            </p>
          </div>

          {/* Legal Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.legalDocuments.map((doc) => (
              <div
                key={doc.id}
                className="border border-[#D9DCDD] dark:border-[#30363A] bg-[#F7F7F5] dark:bg-[#111416] p-6 rounded-lg flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase">
                      {doc.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-[#E8EEF0] dark:bg-[#1C2A30] text-[#1F4E5F] dark:text-[#6F9AAA] px-2 py-0.5 rounded-sm font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{doc.status}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4]">
                    {doc.name}
                  </h3>

                  <p className="text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-1 font-mono">
                    Instansi Penerbit: {doc.issuer}
                  </p>

                  {/* Nomor Registrasi / Dokumen Faktual */}
                  {doc.documentNumber ? (
                    <div className="mt-3.5 p-2.5 bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] rounded-md flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase">
                        Nomor Registrasi:
                      </span>
                      <span className="text-xs font-mono font-bold text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wide">
                        {doc.documentNumber}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-3.5 p-2 bg-[#EEF0F0]/50 dark:bg-[#181C1F]/50 border border-dashed border-[#D9DCDD] dark:border-[#30363A] rounded-md flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2]">
                        Status Registrasi:
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[#1F4E5F] dark:text-[#6F9AAA]">
                        Terdaftar Resmi
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] mt-3 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DCDD]/80 dark:border-[#30363A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[11px] text-[#6B7378] dark:text-[#A5ADB2] italic">
                    {doc.verificationNote}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    {doc.fileUrl ? (
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#1F4E5F] text-white hover:bg-[#183E4C] rounded-md transition-colors shrink-0"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Lihat Berkas</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    ) : (
                      <WhatsappButton
                        customMessage={`Halo PT. Bumi Kutai Perkasa, saya ingin meminta salinan / verifikasi dokumen ${doc.name} untuk keperluan pengadaan material.`}
                        label="Minta Salinan Berkas"
                        variant="outline"
                        className="shrink-0 text-xs py-1.5 px-3"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KBLI Section */}
          <div className="mt-8 border border-[#D9DCDD] dark:border-[#30363A] bg-[#F7F7F5] dark:bg-[#111416] p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DCDD] dark:border-[#30363A]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1F4E5F] dark:text-[#6F9AAA] font-semibold">
                  Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)
                </span>
                <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-0.5">
                  Bidang Usaha Terdaftar (Sistem OSS BKPM)
                </h3>
              </div>
              <span className="text-xs font-mono text-[#6B7378] dark:text-[#A5ADB2]">
                Sesuai NIB:{" "}
                <strong className="text-[#1F4E5F] dark:text-[#6F9AAA]">
                  {companyData.legalDocuments.find((d) => d.id === "nib")
                    ?.documentNumber || "Terdaftar"}
                </strong>
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {companyData.kbliList.map((kbli) => (
                <div
                  key={kbli.code}
                  className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-4 rounded-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#E8EEF0] dark:bg-[#1C2A30] text-[#1F4E5F] dark:text-[#6F9AAA] rounded-sm">
                        KBLI {kbli.code}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#171A1C] dark:text-[#F1F3F4] leading-snug">
                      {kbli.title}
                    </h4>
                    <p className="text-[11px] text-[#3F4549] dark:text-[#C2C8CC] mt-2 leading-relaxed">
                      {kbli.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#D9DCDD]/50 dark:border-[#30363A]/50">
                    <span className="text-[10px] font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase">
                      {kbli.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#EEF0F0]/60 dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] text-xs text-[#3F4549] dark:text-[#C2C8CC] rounded-lg flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Kebijakan Perlindungan Dokumen:</strong> Untuk menjaga
              privasi dan keamanan identitas pengurus perseroan, dokumen resmi
              lengkap diserahkan secara langsung melalui saluran resmi
              korespondensi atau pertemuan teknis dengan tim administrasi PT.
              Bumi Kutai Perkasa.
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOKASI OPERASIONAL & GOOGLE MAPS PREVIEW */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
                Lokasi Nyata &amp; Geografis
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1">
                Fasilitas Operasional di Dusun Jambe, Desa Sanggulan, Kec.
                Sebulu
              </h2>
            </div>

            <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              PT. Bumi Kutai Perkasa beroperasi secara fisik di{" "}
              <strong>
                Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
              </strong>
              . Lokasi stockpile ini dipilih secara strategis agar armada dump
              truck dapat dengan mudah mengakses jalur logistik utama menuju
              wilayah <strong>Tenggarong</strong>, <strong>Loa Kulu</strong>,{" "}
              <strong>Sebulu</strong>, <strong>Muara Kaman</strong>,{" "}
              <strong>Loa Janan</strong>, hingga koridor{" "}
              <strong>Samarinda</strong>.
            </p>

            <div className="space-y-3 text-xs sm:text-sm bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-5 rounded-lg shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">
                    Alamat Stockpile:
                  </strong>
                  <span className="text-[#3F4549] dark:text-[#C2C8CC] text-xs">
                    {companyData.operationalLocation.fullAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">
                    Jam Buka Fasilitas:
                  </strong>
                  <span className="text-[#3F4549] dark:text-[#C2C8CC] text-xs">
                    {siteConfig.operatingHours} (Melayani Setiap Hari)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">
                    Kontak Dispatcher:
                  </strong>
                  <span className="text-[#3F4549] dark:text-[#C2C8CC] text-xs font-mono">
                    {siteConfig.phoneDisplay}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">
                    Email Resmi:
                  </strong>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#3F4549] dark:text-[#C2C8CC] text-xs font-mono hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171A1C] dark:bg-[#202529] hover:bg-[#282E33] text-white text-xs font-semibold rounded-md shadow-xs transition-colors border border-[#30363A]"
              >
                <MapPin className="w-4 h-4 text-[#6F9AAA]" />
                <span>Buka Lokasi di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Visual Map Preview Card */}
          <div className="lg:col-span-6">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat lokasi operasional PT. Bumi Kutai Perkasa di Google Maps"
              className="group block relative overflow-hidden rounded-xl border border-[#D9DCDD] dark:border-[#30363A] bg-[#181C1F] p-8 sm:p-12 text-center transition-all hover:border-[#6F9AAA] shadow-xs"
            >
              {/* Industrial Grid Vector Texture */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-grid-industrial pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1F4E5F]/40 border border-[#6F9AAA]/50 text-[#6F9AAA] group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6F9AAA] block">
                    Peta Lokasi Operasional
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    Dusun Jambe, Desa Sanggulan, Kec. Sebulu
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Kutai Kartanegara, Kalimantan Timur, Indonesia
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1F4E5F] dark:bg-white dark:text-[#111416] px-4 py-2 rounded-md shadow-xs group-hover:bg-[#173B48] dark:group-hover:bg-slate-100 transition-colors">
                  <span>Lihat di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 6. GALERI / DOKUMENTASI OPERASIONAL NYATA */}
      {/* <section className="bg-white dark:bg-[#181C1F] border-t border-b border-[#D9DCDD] dark:border-[#30363A] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Dokumentasi Lapangan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight mt-1">
              Fasilitas Stockpile, Material &amp; Armada Operasional
            </h2>
            <p className="mt-3 text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Bukti nyata aktivitas logistik, penimbunan material fraksi batu
              gunung, dan proses pemuatan armada dump truck PT. Bumi Kutai
              Perkasa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.operationalGallery.map((item) => (
              <div
                key={item.id}
                className="border border-[#D9DCDD] dark:border-[#30363A] bg-[#F7F7F5] dark:bg-[#111416] rounded-lg overflow-hidden flex flex-col justify-between shadow-xs group"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#EEF0F0] dark:bg-[#202529]">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#111416]/90 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] mt-1.5 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#D9DCDD]/60 dark:border-[#30363A] text-[11px] text-[#6B7378] dark:text-[#A5ADB2] font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. CTA PENUTUP WHATSAPP */}
      <section className="bg-[#171A1C] text-slate-100 py-16 sm:py-20 border-t border-[#30363A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-mono uppercase text-[#6F9AAA] font-semibold">
            Kemitraan &amp; Pengadaan Proyek
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Siap Bekerja Sama dengan PT. Bumi Kutai Perkasa?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Hubungi tim dispatcher kami untuk permintaan penawaran harga resmi,
            konfirmasi ketersediaan tonase material, atau penjadwalan inspeksi
            tonase di lokasi proyek Anda di Tenggarong dan sekitarnya.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsappButton
              label="Konsultasi Kebutuhan Material via WhatsApp"
              variant="primary"
              className="text-sm py-3.5 px-6 w-full sm:w-auto"
            />
          </div>

          <div className="text-xs text-slate-500 font-mono pt-4 border-t border-[#30363A]/80">
            Operasional Resmi: Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai
            Kartanegara, Kalimantan Timur
          </div>
        </div>
      </section>
    </div>
  );
}
