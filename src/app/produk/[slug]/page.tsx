import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
  productsData,
} from "@/data/products";
import { articlesData } from "@/data/articles";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ProductCard } from "@/components/ProductCard";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";
import { CheckCircle2, Truck, ShieldCheck, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/produk/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.metaDescription,
      url: `${siteConfig.url}/produk/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 800,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or others
  const relatedProducts = productsData
    .filter((p) => p.slug !== product.slug)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 3);

  // Relevant blog articles mentioning this product
  const relevantArticles = articlesData.filter(
    (a) =>
      a.relatedProductSlug === product.slug ||
      a.relatedProductSlugs?.includes(product.slug),
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Katalog Produk",
        item: `${siteConfig.url}/produk`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}/produk/${product.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-white dark:bg-[#181C1F] border-b border-[#D9DCDD] dark:border-[#30363A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Produk", href: "/produk" },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Main Product Layout */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Kolom Gambar */}
          <div className="lg:col-span-6">
            <div className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-2 sticky top-24 rounded-xl shadow-xs">
              <div className="relative aspect-4/3 w-full bg-[#EEF0F0] dark:bg-[#202529] overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#111416]/90 text-white text-xs font-mono uppercase px-2.5 py-1 rounded-sm">
                  {product.category}
                </div>
              </div>

              <div className="p-4 bg-[#EEF0F0] dark:bg-[#202529] border-t border-[#D9DCDD] dark:border-[#30363A] mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#3F4549] dark:text-[#C2C8CC] font-mono rounded-md">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                  <span>PT. Bumi Kutai Perkasa &bull; Dusun Jambe, Kec. Sebulu</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                  <span>Melayani Tenggarong &amp; Sekitarnya</span>
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Detail & Aplikasi */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#1F4E5F] dark:text-[#6F9AAA] font-bold uppercase">
                  {product.category}
                </span>
                <span className="text-[11px] bg-[#EEF0F0] dark:bg-[#202529] text-[#3F4549] dark:text-[#C2C8CC] border border-[#D9DCDD] dark:border-[#30363A] font-medium px-2 py-0.5 rounded-sm font-mono">
                  Kutai Kartanegara
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight font-heading">
                {product.name}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rekomendasi Aplikasi Proyek */}
            <div className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-5 rounded-lg shadow-xs">
              <h2 className="text-xs font-mono uppercase font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-wider mb-3">
                Aplikasi &amp; Penggunaan Lapangan:
              </h2>
              <ul className="space-y-2.5">
                {product.uses.map((use, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informasi Pengiriman & Satuan */}
            <div className="bg-[#EEF0F0]/80 dark:bg-[#202529]/80 border border-[#D9DCDD] dark:border-[#30363A] p-4 text-xs text-[#3F4549] dark:text-[#C2C8CC] space-y-1 rounded-md">
              <div className="font-bold font-mono text-[#171A1C] dark:text-[#F1F3F4]">
                Ketentuan Pengiriman &amp; Pemesanan:
              </div>
              <p>
                {product.orderUnitNote}. Volume bak armada dump truck dapat diinspeksi bersama saat tiba di lokasi proyek Anda di Tenggarong dan sekitarnya.
              </p>
            </div>

            {/* Call To Action Box */}
            <div className="bg-[#171A1C] text-slate-100 p-6 border border-[#30363A] space-y-4 rounded-xl shadow-xs">
              <div>
                <h3 className="text-base font-bold text-white font-heading">
                  Pemesanan &amp; Cek Ketersediaan Armada
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Hubungi kami via WhatsApp untuk mendapatkan penawaran harga resmi (termasuk ongkos kirim) sesuai volume kebutuhan proyek Anda.
                </p>
              </div>

              <div className="pt-2">
                <WhatsappButton
                  namaProduk={product.name}
                  variant="primary"
                  className="w-full text-xs sm:text-sm py-3.5 justify-center"
                  label={`Konsultasi ${product.name} via WhatsApp`}
                />
              </div>

              <p className="text-[11px] text-slate-400 text-center font-mono">
                Respon langsung ditangani operasional PT. Bumi Kutai Perkasa
              </p>
            </div>

            {/* Panduan Terkait Dari Blog */}
            {relevantArticles.length > 0 && (
              <div className="border border-[#1F4E5F]/30 dark:border-[#6F9AAA]/30 bg-[#E8EEF0]/60 dark:bg-[#1C2A30]/40 p-4 space-y-2 rounded-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F4E5F] dark:text-[#6F9AAA] uppercase">
                  <BookOpen className="w-4 h-4 text-[#1F4E5F] dark:text-[#6F9AAA]" />
                  <span>Panduan Terkait Material Ini:</span>
                </div>
                <ul className="space-y-1.5 text-xs">
                  {relevantArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-[#1F4E5F] dark:text-[#6F9AAA] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>&rarr; {article.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Produk Terkait Lainnya */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#D9DCDD] dark:border-[#30363A]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
              Material Konstruksi Lainnya dari {siteConfig.name}
            </h2>
            <Link
              href="/produk"
              className="text-xs font-semibold text-[#1F4E5F] dark:text-[#6F9AAA] hover:text-[#173B48] dark:hover:text-[#8AB2C2] inline-flex items-center gap-1"
            >
              <span>Semua Produk &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.slug}
                product={relProduct}
                variant="grid"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
