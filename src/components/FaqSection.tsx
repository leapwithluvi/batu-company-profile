import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "Apa saja jenis material batu dan ukuran batu split yang diproduksi PT. Bumi Kutai Perkasa?",
    answer:
      "PT. Bumi Kutai Perkasa memproduksi berbagai fraksi material batu konstruksi dari mesin stone crusher berkapasitas 60 Ton/jam, meliputi Batu Split 1-2 (10-20 mm untuk cor dak beton), Batu Split 2-3 (20-30 mm untuk cor jalan/jembatan), Batu Split 1-1 (screening), Batu Split 3-5, Batu Split 5-7, Batu Split 7-10, Abu Batu (agregat halus paving & aspal), Agregat Base Course (Kelas A & B), serta Batu Belah Gunung (Batu Pondasi & Tronjolan/Bronjong kawat).",
  },
  {
    question:
      "Di mana lokasi fasilitas stone crusher dan stockpile PT. Bumi Kutai Perkasa?",
    answer:
      "Fasilitas operasional, mesin stone crusher, dan stockpile utama kami berlokasi fisik di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kabupaten Kutai Kartanegara, Kalimantan Timur. Titik koordinat dan peta rute dapat dibuka langsung melalui Google Maps resmi kami.",
  },
  {
    question:
      "Wilayah mana saja yang dijangkau pengiriman armada dump truck dan ponton?",
    answer:
      "Kami melayani pengiriman material ke seluruh kawasan Kutai Kartanegara dan sekitarnya, termasuk Tenggarong, Tenggarong Seberang, Sebulu, SP Muara Kaman, Separi, L1, L2, L3, Loa Kulu, Loa Janan, Samboja, Kota Bangun, hingga koridor Samarinda, Balikpapan, dan kawasan IKN Nusantara. Distribusi didukung armada dump truck mandiri untuk rute darat serta akses ponton tongkang untuk suplai volume besar jalur perairan Sungai Mahakam.",
  },
  {
    question:
      "Bagaimana sistem takaran tonase dan transparansi penimbangan material?",
    answer:
      "Seluruh pengiriman material menerapkan transparansi tonase nyata yang ditimbang menggunakan jembatan timbang resmi sebelum armada diberangkatkan dari stockpile Dusun Jambe. Setiap ritase disertai surat jalan dan bukti timbang resmi untuk menjamin ketepatan takaran dan mencegah penyusutan volume di lapangan.",
  },
  {
    question:
      "Berapa kapasitas produksi stone crusher dan kesiapan kontrak pengadaan proyek?",
    answer:
      "Kapasitas produksi mesin stone crusher kami mencapai 60 Ton/jam dan mampu memenuhi kebutuhan kontrak suplai terjadwal minimal 3.000 MT/bulan untuk menyuplai batching plant cor ready mix, kontraktor jalan aspal, maupun proyek infrastruktur strategis.",
  },
  {
    question:
      "Apakah PT. Bumi Kutai Perkasa berizin resmi dan melayani penerbitan faktur pajak?",
    answer:
      "Ya. PT. Bumi Kutai Perkasa berbadan hukum Perseroan Terbatas resmi dengan NIB: 1012240094415, Akta Pengesahan Kemenkumham, NPWP Badan Usaha aktif, dan KBLI 46634 (Perdagangan Besar Semen, Kapur, Pasir dan Batu). Kami siap menerbitkan Surat Penawaran Harga (SPH), perjanjian kontrak SPK, dan Faktur Pajak resmi (PPN) untuk keperluan audit proyek rekanan.",
  },
];

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0F12] border-t border-b border-[#E2E8F0] dark:border-[#1E293B]">
      {/* FAQ Schema JSON-LD for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, safeJsonLdReplacer),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase text-[#EA580C] dark:text-[#FB923C] tracking-wider flex items-center justify-center gap-1.5 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tanya Jawab Seputar Pengadaan Material</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight font-heading">
            Pertanyaan Umum (FAQ) Pengadaan Batu &amp; Agregat
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Informasi lengkap seputar spesifikasi ukuran batu split, lokasi stockpile Sebulu, jangkauan armada pengiriman, dan jaminan tonase timbangan resmi {siteConfig.name}.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              className="group border border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#161D24] rounded-xl p-5 transition-colors open:bg-white dark:open:bg-[#1E2630] open:shadow-xs"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] select-none">
                <span className="pr-4">{item.question}</span>
                <ChevronDown className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C] shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed border-t border-[#E2E8F0] dark:border-[#1E293B] pt-3">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
