import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ShieldCheck,
  Truck,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="bg-[#111416] text-slate-300 border-t border-[#30363A]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Informasi Perusahaan dan Kontak PT. Bumi Kutai Perkasa
      </h2>

      {/* Trust bar */}
      <div className="border-b border-[#30363A]/80 bg-[#181C1F]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#6F9AAA] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Spesifikasi Fraksi Terstandarisasi
                </strong>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Pecahan batu split ukuran 1x1, 2x1, 2x3, 3x5, 5x7, 7x10, abu
                  batu, agregat, dan batu pondasi berkualitas padat.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-[#6F9AAA] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Pengiriman ke Titik Proyek
                </strong>
                <p className="text-slate-400 text-xs leading-relaxed">
                  SP Sebulu, SP Muara Kaman, Kec. Muara Kaman &amp; sekitarnya,
                  Kec. Sebulu &amp; sekitarnya, Separi, L1, L2, L3, Tenggarong,
                  dan wilayah Kutai Kartanegara lainnya.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#6F9AAA] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">
                  Operasional Dusun Jambe, Desa Sanggulan, Kec. Sebulu
                </strong>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Fasilitas operasional berlokasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu,
                  Kutai Kartanegara, Kalimantan Timur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Brief */}
          <div className="space-y-4">
            {/* Logo footer */}
            <div className="flex items-center">
              <Image
                src="/logo/logo_white.png"
                alt="PT. Bumi Kutai Perkasa"
                width={100}
                height={100}
                className="w-12 h-12 object-contain"
              />
              <span className="font-mono text-sm tracking-tight text-white font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Penyedia material batu split, batu pondasi, abu batu, batu
              agregat, batu tronjolan, dan aneka ukuran batu split berizin
              resmi. Melayani kebutuhan proyek konstruksi di Tenggarong dan
              Kutai Kartanegara.
            </p>
            <div className="pt-2 border-t border-[#30363A]/80 text-xs text-slate-400 font-mono">
              <span className="text-[#6F9AAA] font-semibold block">
                Operasional Dusun Jambe, Desa Sanggulan, Kec. Sebulu
              </span>
              Fasilitas operasional berlokasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai
              Kartanegara, Kalimantan Timur.
            </div>
          </div>

          {/* Navigasi Produk */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-[#30363A]">
              Katalog Material
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  href="/produk/abu-batu"
                  className="hover:text-slate-200 transition-colors"
                >
                  Abu Batu (Dust Stone)
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/batu-pondasi"
                  className="hover:text-slate-200 transition-colors"
                >
                  Batu Pondasi Belah Gunung
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/batu-agregat"
                  className="hover:text-slate-200 transition-colors"
                >
                  Batu Agregat Campuran Cor
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/batu-tronjolan"
                  className="hover:text-slate-200 transition-colors"
                >
                  Batu Tronjolan Bronjong
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/batu-koral-2x1"
                  className="hover:text-slate-200 transition-colors"
                >
                  Batu split berbagai ukuran
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/produk"
                  className="text-[#6F9AAA] hover:text-[#8AB2C2] font-medium"
                >
                  Lihat Seluruh Produk &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Panduan & Wilayah Layanan */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-[#30363A]">
              Area Distribusi
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-block bg-[#181C1F] border border-[#30363A] px-2 py-1 text-xs text-slate-300 rounded-md"
                >
                  {area}
                </span>
              ))}
            </div>

            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-2">
              Panduan Material
            </h3>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-slate-200 transition-colors"
                >
                  Pusat Panduan &amp; Edukasi Proyek &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi Operasional */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4 pb-2 border-b border-[#30363A]">
                Kontak &amp; Dispatcher
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#6F9AAA] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    {siteConfig.operationalLocation.village},{" "}
                    {siteConfig.operationalLocation.subdistrict && (
                      <>{siteConfig.operationalLocation.subdistrict}, </>
                    )}
                    {siteConfig.operationalLocation.regency},{" "}
                    {siteConfig.operationalLocation.province}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#6F9AAA] shrink-0" />
                  <span className="text-xs">{siteConfig.operatingHours}</span>
                </li>
                <li className="flex items-center gap-2">
                  <WhatsappIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <a
                    href={getWhatsappUrl({})}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors font-mono text-xs flex items-center gap-1.5"
                  >
                    <span>{siteConfig.phoneDisplay} (WhatsApp)</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#6F9AAA] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-slate-200 transition-colors font-mono text-xs break-all"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Google Maps Visual Preview Card (Ultra-lightweight, no heavy iframes) */}
            <div className="pt-1">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lihat lokasi PT. Bumi Kutai Perkasa di Google Maps"
                className="group relative block overflow-hidden rounded-md border border-[#30363A] bg-[#181C1F] hover:border-[#6F9AAA] transition-all p-3"
              >
                {/* Visual Map Background Motif */}
                <div
                  className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity bg-grid-industrial pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#1F4E5F]/30 border border-[#6F9AAA]/40 text-[#6F9AAA]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white group-hover:text-[#6F9AAA] transition-colors">
                        Peta Lokasi Depot
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-[11px] text-[#6F9AAA] font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#30363A]/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Hak Cipta
            Dilindungi.
          </p>
          <p className="text-slate-500 text-[11px]">
            Beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara &bull;
            Melayani pengiriman ke Tenggarong dan sekitarnya.
          </p>
        </div>
      </div>
    </footer>
  );
}
