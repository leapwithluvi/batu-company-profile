import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Clock, Mail, Truck, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami & Pemesanan Material | Tenggarong",
  description:
    `Hubungi dispatcher ${siteConfig.name}. Cek harga material batu belah, split cor, dan estimasi ongkos kirim dump truck di Kutai Kartanegara langsung via WhatsApp.`,
};

const FAQ_ITEMS = [
  {
    q: "Bagaimana alur pemesanan material melalui WhatsApp?",
    a: "Cukup klik tombol WhatsApp, infokan jenis material yang dibutuhkan, estimasi volume (kubik atau rit), serta share location proyek Anda. Tim kami akan memberikan rincian harga total beserta ongkos kirim resmi.",
  },
  {
    q: "Apakah bisa kirim di hari yang sama (Same-Day Delivery)?",
    a: "Bisa, untuk konfirmasi pesanan yang masuk sebelum pukul 11.00 WITA dan ketersediaan slot antrean armada dump truck pada hari tersebut.",
  },
  {
    q: "Bagaimana cara memastikan isi kubikasi bak dump truck tidak kurang?",
    a: "Saat armada tiba di lokasi proyek Anda sebelum muatan ditumpahkan (dumping), Anda atau mandor lapangan dipersilakan mengukur dimensi bak (panjang x lebar x tinggi muatan) bersama pengemudi kami.",
  },
  {
    q: "Apakah dump truck bisa masuk ke gang perumahan sempit?",
    a: "Armada dump truck kami umumnya membutuhkan lebar jalan minimal 2.8 – 3 meter bebas hambatan kabel rendah untuk bermanuver dan menumpahkan bak dengan aman.",
  },
  {
    q: "Apakah melayani pengiriman via jalur sungai dengan kapal ponton?",
    a: "Ya. Selain pengiriman darat menggunakan dump truck, PT. Bumi Kutai Perkasa melayani pengiriman tonase besar menggunakan kapal ponton (tongkang) melintasi perairan Sungai Mahakam untuk kebutuhan suplai dermaga, jetty, maupun proyek tanggul skala besar.",
  },
];

export default function KontakPage() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Top Header */}
      <section className="bg-white dark:bg-[#16191C] text-[#171A1C] dark:text-[#F1F3F4] border-b border-[#D9DCDD] dark:border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Hubungi Kami" }]}
            className="text-[#6B7378] dark:text-[#A5ADB2] [&_a]:text-[#6B7378] [&_a:hover]:text-[#1F4E5F] dark:[&_a]:text-[#A5ADB2] dark:[&_a:hover]:text-white [&_span]:text-[#171A1C] dark:[&_span]:text-white mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              Layanan Pemesanan &amp; Logistik
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#171A1C] dark:text-white tracking-tight mt-1 font-heading">
              Hubungi Dispatcher &amp; Lokasi Operasional
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Konsultasikan kebutuhan volume batu belah, koral split, abu batu, atau agregat langsung dengan tim operasional Kutai Kartanegara.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Details & WhatsApp Order Guide */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 sm:p-8 space-y-6 rounded-xs shadow-xs">
              <h2 className="text-lg font-bold text-[#171A1C] dark:text-[#F1F3F4] pb-3 border-b border-[#D9DCDD]/60 dark:border-[#30363A] font-mono uppercase tracking-wider">
                Kontak Langsung Operasional
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">Alamat Stockpile / Depot:</strong>
                    <span className="text-[#3F4549] dark:text-[#C2C8CC] text-xs sm:text-sm leading-relaxed">
                      {siteConfig.address.street}, {siteConfig.address.subdistrict}, {siteConfig.address.regency}, {siteConfig.address.province} {siteConfig.address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">Jam Operasional:</strong>
                    <span className="text-[#3F4549] dark:text-[#C2C8CC] text-xs sm:text-sm">
                      {siteConfig.operatingHours} (Minggu/Hari Libur Nasional: Pengiriman Proyek Terjadwal)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">Telepon / WhatsApp Resmi:</strong>
                    <a
                      href={`tel:${siteConfig.whatsappNumber}`}
                      className="text-[#171A1C] dark:text-[#F1F3F4] font-mono font-semibold hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA]"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A1C] dark:text-[#F1F3F4]">Email Resmi:</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#171A1C] dark:text-[#F1F3F4] font-mono font-semibold hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Order Checklist */}
              <div className="mt-6 pt-6 border-t border-[#D9DCDD]/60 dark:border-[#30363A]">
                <h3 className="text-xs font-mono uppercase font-bold text-[#6B7378] dark:text-[#A5ADB2] mb-3 tracking-wider">
                  Data yang Dibutuhkan untuk Cek Ongkir Cepat:
                </h3>
                <ul className="space-y-2 text-xs text-[#3F4549] dark:text-[#C2C8CC]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>Jenis material (Batu Belah / Split / Beskos / Pasir)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>Perkiraan jumlah kebutuhan (rit dump truck atau kubik)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0" />
                    <span>Lokasi titik antar (kelurahan / share location WhatsApp)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <WhatsappButton
                  variant="primary"
                  className="w-full py-3.5 text-sm justify-center"
                  label="Mulai Chat WhatsApp Sekarang"
                />
              </div>
            </div>

            {/* Coverage Notes */}
            <div className="bg-[#EEF0F0]/60 dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 rounded-xs shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#171A1C] dark:text-[#F1F3F4] mb-2">
                <Truck className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                <span>Radius Layanan Utama</span>
              </div>
              <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                SP Sebulu, SP Muara Kaman, kecamatan Muara Kaman sekitarnya, kecamatan Sebulu sekitarnya, Separi, L1, L2, L3.
              </p>
            </div>
          </div>

          {/* Right Column: Practical FAQ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 sm:p-8 rounded-xs shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#D9DCDD]/60 dark:border-[#30363A]">
                <HelpCircle className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-[#171A1C] dark:text-[#F1F3F4]">
                  Pertanyaan Sering Ditanyakan (FAQ)
                </h2>
              </div>

              <div className="space-y-6">
                {FAQ_ITEMS.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#171A1C] dark:text-[#F1F3F4]">
                      {item.q}
                    </h3>
                    <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
