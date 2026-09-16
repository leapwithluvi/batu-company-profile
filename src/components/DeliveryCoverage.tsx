import React from "react";
import { Truck, MapPin, CheckCircle, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WhatsappButton } from "./WhatsappButton";

export function DeliveryCoverage() {
  return (
    <section className="border-t border-[#D9DCDD] dark:border-[#30363A] bg-[#EEF0F0]/50 dark:bg-[#181C1F]/40 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider mb-2">
                <Truck className="w-4 h-4" />
                <span>Logistik &amp; Jangkauan Distribusi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
                Layanan Pengiriman ke Kutai Kartanegara dan Sekitarnya
              </h2>
            </div>

            <p className="text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              <strong>{siteConfig.name}</strong> beroperasi di{" "}
              <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara</strong>. Untuk mendukung
              kelancaran pasokan proyek konstruksi, kami melayani pengiriman
              material batu dan agregat menggunakan armada <strong>dump truck</strong> (jalur darat) serta <strong>kapal ponton</strong> (jalur perairan / sungai)
              langsung ke titik proyek Anda di wilayah Kutai Kartanegara.
            </p>

            {/* Armada Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-4 rounded-lg shadow-xs">
                <div className="text-xs font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase font-bold">
                  Armada Jalur Darat
                </div>
                <div className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-1">
                  Dump Truck
                </div>
                <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] mt-2 leading-relaxed">
                  Pengiriman langsung ke titik proyek pembangunan, jalan lingkungan, perumahan, dan stockpile di area Kutai Kartanegara dan sekitarnya.
                </p>
              </div>

              <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-4 rounded-lg shadow-xs">
                <div className="text-xs font-mono text-[#6B7378] dark:text-[#A5ADB2] uppercase font-bold">
                  Armada Jalur Perairan / Sungai
                </div>
                <div className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] mt-1">
                  Ponton (Tongkang)
                </div>
                <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] mt-2 leading-relaxed">
                  Distribusi tonase besar via perairan Sungai Mahakam untuk suplai jetty pelabuhan, proyek tanggul, dan kebutuhan konstruksi skala masif.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsappButton
                customMessage="Halo Admin PT. Bumi Kutai Perkasa, saya ingin cek ketersediaan armada dan ongkir pengiriman batu ke lokasi proyek saya di [wilayah]."
                label="Cek Pengiriman ke Lokasi Anda"
                variant="primary"
              />
              <span className="text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono">
                *Konsultasi akses jalan &amp; estimasi ritase
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 sm:p-8 rounded-xl shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#D9DCDD]/60 dark:border-[#30363A]">
              <MapPin className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-[#171A1C] dark:text-[#F1F3F4]">
                Area Distribusi yang Dilayani
              </h3>
            </div>

            <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] mb-6 leading-relaxed">
              Kami melayani pengiriman material konstruksi untuk berbagai
              kawasan yang terjangkau di Kalimantan Timur:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {siteConfig.serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-2 p-2.5 bg-[#EEF0F0] dark:bg-[#202529] border border-[#D9DCDD] dark:border-[#30363A] text-xs font-medium text-[#171A1C] dark:text-[#F1F3F4] rounded-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                  <span className="leading-snug">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#D9DCDD]/60 dark:border-[#30363A] flex items-start gap-3 bg-[#EEF0F0]/80 dark:bg-[#202529]/60 p-3.5 rounded-md">
              <Clock className="w-4 h-4 text-[#6B7378] dark:text-[#A5ADB2] shrink-0 mt-0.5" />
              <div className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                <strong>Catatan Operasional:</strong> Lokasi operasional berada
                di <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu</strong>. Jadwal pengantaran dan
                ketersediaan ritase armada dikonfirmasi secara langsung oleh tim
                dispatcher sesuai antrean harian.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
