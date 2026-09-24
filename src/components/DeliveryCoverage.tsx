import React from "react";
import { Truck, MapPin, CheckCircle, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WhatsappButton } from "./WhatsappButton";

export function DeliveryCoverage() {
  return (
    <section className="border-t border-b border-[#E2E8F0] dark:border-[#30363A] bg-[#F8FAFC] dark:bg-[#11161B] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Logistics Capability */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
                LOGISTIK &amp; JANGKAUAN DISTRIBUSI
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171A1C] dark:text-white tracking-tight font-heading">
                Layanan Pengiriman ke Kutai Kartanegara dan Sekitarnya
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              <strong>{siteConfig.name}</strong> beroperasi di{" "}
              <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara</strong>. Untuk mendukung
              kelancaran pasokan proyek, kami melayani pengiriman khusus material batu
              dan agregat menggunakan armada <strong>dump truck</strong> (jalur darat) serta <strong>kapal ponton</strong> (jalur perairan / sungai)
              langsung ke titik lokasi proyek Anda di wilayah Kutai Kartanegara.
            </p>

            {/* Armada Specification Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#30363A] p-5 rounded-lg shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] dark:text-[#FB923C] uppercase">
                  <Truck className="w-4 h-4" />
                  <span>Jalur Darat</span>
                </div>
                <div className="text-base font-bold text-[#171A1C] dark:text-white font-heading">
                  Armada Dump Truck
                </div>
                <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                  Pengiriman langsung per ritase ke titik proyek jalan, jembatan, perumahan, dan stockpile di area Tenggarong, Sebulu, dan seluruh Kukar.
                </p>
              </div>

              <div className="bg-white dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#30363A] p-5 rounded-lg shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] dark:text-[#FB923C] uppercase">
                  <Navigation className="w-4 h-4" />
                  <span>Jalur Perairan</span>
                </div>
                <div className="text-base font-bold text-[#171A1C] dark:text-white font-heading">
                  Ponton / Tongkang
                </div>
                <p className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                  Distribusi tonase besar via Sungai Mahakam untuk suplai jetty, dermaga pelabuhan, turap sungai, dan kebutuhan konstruksi volume masif.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsappButton
                customMessage={`Halo Admin PT. Bumi Kutai Perkasa 👋

Saya ingin cek pengiriman material batu ke proyek di [wilayah/kecamatan].

Mohon info:
1. Estimasi ongkos kirim ke lokasi saya
2. Ketersediaan armada dump truck / ponton
3. Jadwal pengiriman terdekat

Terima kasih.`}
                label="Cek Pengiriman ke Lokasi Anda"
                variant="primary"
              />
              <span className="text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono">
                *Konsultasi akses jalan &amp; estimasi ritase
              </span>
            </div>
          </div>

          {/* Right Column: Service Area Matrix */}
          <div className="lg:col-span-6 bg-white dark:bg-[#161D24] border border-[#E2E8F0] dark:border-[#30363A] p-6 sm:p-8 rounded-lg shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] dark:border-[#30363A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-[#171A1C] dark:text-white">
                  Wilayah Distribusi yang Dilayani
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#6B7378] dark:text-[#A5ADB2]">
                Kutai Kartanegara &amp; Kaltim
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Kami melayani pengiriman material batu murni (batu koral, batu split, abu batu, agregat, pondasi) untuk berbagai kawasan di Kalimantan Timur:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {siteConfig.serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 p-2.5 bg-[#FFF7ED]/50 dark:bg-[#11161B] border border-[#FED7AA]/60 dark:border-[#30363A] text-xs font-medium text-[#171A1C] dark:text-[#F1F3F4] rounded-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#EA580C] dark:text-[#FB923C] shrink-0" />
                  <span className="leading-snug truncate">{area}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#30363A] flex items-start gap-3 bg-[#F8FAFC] dark:bg-[#11161B] p-4 rounded-md border border-[#E2E8F0] dark:border-[#30363A]">
              <Clock className="w-4 h-4 text-[#6B7378] dark:text-[#A5ADB2] shrink-0 mt-0.5" />
              <div className="text-xs text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                <strong>Catatan Operasional:</strong> Lokasi operasional stockpile berada
                di <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu</strong>. Jadwal pengantaran dan
                ketersediaan ritase armada dikonfirmasi langsung oleh dispatcher lapangan sesuai antrean proyek.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
