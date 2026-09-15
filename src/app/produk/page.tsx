import React from "react";
import type { Metadata } from "next";
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Truck, MapPin, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Katalog Batu & Material Konstruksi | PT. Bumi Kutai Perkasa",
  description:
    "Katalog resmi material abu batu, batu split, batu agregat, batu pondasi, batu tronjolan, dan batu split ukuran 1x1, 2x1, 2x3, 3x5, 5x7, 7x10. PT. Bumi Kutai Perkasa melayani pengiriman ke Tenggarong dan Kutai Kartanegara.",
  keywords: [
    "jual batu split tenggarong",
    "jual batu koral tenggarong",
    "jual abu batu tenggarong",
    "jual batu pondasi tenggarong",
    "batu tronjolan tenggarong",
    "batu agregat tenggarong",
    "supplier batu kutai kartanegara",
  ],
};

export default function ProdukCatalogPage() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Top Header */}
      <section className="bg-white dark:bg-[#16191C] text-[#171A1C] dark:text-[#F1F3F4] border-b border-[#D9DCDD] dark:border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Katalog Produk" }]}
            className="text-[#6B7378] dark:text-[#A5ADB2] [&_a]:text-[#6B7378] [&_a:hover]:text-[#1F4E5F] dark:[&_a]:text-[#A5ADB2] dark:[&_a:hover]:text-white [&_span]:text-[#171A1C] dark:[&_span]:text-white mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase text-[#1F4E5F] dark:text-[#6F9AAA] tracking-wider">
              {siteConfig.name} &bull; Dusun Jambe, Desa Sanggulan, Kec. Sebulu
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#171A1C] dark:text-white tracking-tight mt-1 font-heading">
              Katalog Material Batu Konstruksi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              Daftar produk material batu yang disediakan oleh PT. Bumi Kutai
              Perkasa. Beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara, dan
              melayani pengiriman ke Tenggarong dan wilayah sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grouped by Categories */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Category Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D9DCDD] dark:border-[#30363A]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3F4549] dark:text-[#C2C8CC]">
            <Layers className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
            <span>Kategori Material:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-mono bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] hover:border-[#1F4E5F] dark:hover:border-[#6F9AAA] px-3 py-1 text-[#3F4549] dark:text-[#C2C8CC] hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors rounded-xs shadow-xs"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Categories Sections */}
        {PRODUCT_CATEGORIES.map((category) => {
          const categoryProducts = getProductsByCategory(category);
          const anchorId = category.toLowerCase().replace(/\s+/g, "-");

          return (
            <div key={category} id={anchorId} className="space-y-6 pt-4">
              <div className="border-l-4 border-[#1F4E5F] dark:border-[#6F9AAA] pl-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
                  {category}
                </h2>
                <p className="text-xs text-[#6B7378] dark:text-[#A5ADB2] mt-0.5 font-mono">
                  Menyediakan {categoryProducts.length} pilihan spesifikasi
                  material untuk proyek Anda
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    variant="grid"
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Operational Note & Honest Geo Positioning */}
        <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 sm:p-8 space-y-4 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1F4E5F] dark:text-[#6F9AAA] font-bold uppercase">
            <MapPin className="w-4 h-4" />
            <span>Informasi Lokasi &amp; Jangkauan Layanan</span>
          </div>
          <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4]">
            Pengiriman Material ke Tenggarong dan Wilayah Sekitarnya
          </h3>
          <p className="text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
            PT. Bumi Kutai Perkasa beroperasi di{" "}
            <strong>Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara</strong>. Untuk memenuhi
            kebutuhan proyek konstruksi perumahan, gedung, dan infrastruktur
            jalan, kami melayani pengiriman armada dump truck ke area
            Tenggarong, Kutai Kartanegara, Samarinda, dan wilayah Kalimantan
            Timur lainnya yang terjangkau.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D9DCDD]/60 dark:border-[#30363A]">
            <span className="text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#6B7378] dark:text-[#A5ADB2]" />
              <span>
                Detail ukuran dan ketersediaan dapat dikonfirmasi langsung
              </span>
            </span>
            <WhatsappButton
              label="Tanya Ketersediaan Material via WhatsApp"
              variant="primary"
              className="text-xs py-2.5 px-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
