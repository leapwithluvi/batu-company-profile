import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Truck } from "lucide-react";
import { Product } from "@/data/products";
import { WhatsappButton } from "./WhatsappButton";

export interface ProductCardProps {
  product: Product;
  variant?: "editorial" | "grid";
  index?: number;
}

export function ProductCard({
  product,
  variant = "grid",
  index = 0,
}: ProductCardProps) {
  if (variant === "editorial") {
    const isReversed = index % 2 !== 0;

    return (
      <article className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] transition-colors hover:border-[#B8BEC0] dark:hover:border-[#41494E] rounded-lg overflow-hidden">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Product Image Column */}
          <div
            className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-full lg:col-span-5 bg-[#EEF0F0] dark:bg-[#202529] ${
              isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#111416]/90 text-white text-xs font-mono uppercase px-2.5 py-1 tracking-wider rounded-sm">
              {product.category}
            </div>
          </div>

          {/* Product Content Column */}
          <div
            className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between lg:col-span-7 ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xs font-mono text-[#1F4E5F] dark:text-[#6F9AAA] uppercase font-semibold">
                  {product.category}
                </span>
                <span className="text-[11px] bg-[#EEF0F0] dark:bg-[#202529] text-[#3F4549] dark:text-[#C2C8CC] border border-[#D9DCDD] dark:border-[#30363A] px-2 py-0.5 font-mono rounded-sm">
                  PT. Bumi Kutai Perkasa
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
                <Link
                  href={`/produk/${product.slug}`}
                  className="hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors"
                >
                  {product.name}
                </Link>
              </h3>

              <p className="mt-2.5 text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Practical Applications */}
              <div className="mt-6 pt-5 border-t border-[#D9DCDD]/60 dark:border-[#30363A]">
                <h4 className="text-xs font-mono uppercase text-[#6B7378] dark:text-[#A5ADB2] font-semibold mb-3 tracking-wider">
                  Rekomendasi Penggunaan di Proyek:
                </h4>
                <ul className="space-y-2 text-xs text-[#3F4549] dark:text-[#C2C8CC]">
                  {product.uses.slice(0, 3).map((use, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E5F] dark:text-[#6F9AAA] shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="mt-8 pt-6 border-t border-[#D9DCDD] dark:border-[#30363A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono">
                <Truck className="w-4 h-4 text-[#6B7378] dark:text-[#A5ADB2]" />
                <span>{product.orderUnitNote}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <Link
                  href={`/produk/${product.slug}`}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#171A1C] dark:text-[#F1F3F4] bg-[#EEF0F0] dark:bg-[#202529] hover:bg-[#E5E8E8] dark:hover:bg-[#282E33] transition-colors border border-[#D9DCDD] dark:border-[#30363A] rounded-md"
                >
                  <span>Detail &amp; Kegunaan</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>

                <WhatsappButton
                  namaProduk={product.name}
                  variant="primary"
                  className="text-xs py-2.5 px-4"
                  label="Tanya Harga &amp; Stok"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid Catalog variant
  return (
    <article className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] flex flex-col justify-between transition-colors hover:border-[#B8BEC0] dark:hover:border-[#41494E] rounded-lg overflow-hidden shadow-xs">
      <div>
        <div className="relative aspect-16/10 bg-[#EEF0F0] dark:bg-[#202529] overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#111416]/90 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm">
            {product.category}
          </div>
        </div>

        <div className="p-5">
          <div className="text-[11px] font-mono text-[#1F4E5F] dark:text-[#6F9AAA] font-semibold mb-1">
            {product.category}
          </div>

          <h3 className="text-lg font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight leading-snug">
            <Link
              href={`/produk/${product.slug}`}
              className="hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-[#3F4549] dark:text-[#C2C8CC] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-4 pt-3 border-t border-[#D9DCDD]/60 dark:border-[#30363A] space-y-1.5 text-[11px] text-[#3F4549] dark:text-[#C2C8CC]">
            {product.uses.slice(0, 2).map((use, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#1F4E5F] dark:text-[#6F9AAA] font-bold">&bull;</span>
                <span className="line-clamp-1">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 border-t border-[#D9DCDD]/60 dark:border-[#30363A] mt-2 flex flex-col gap-2">
        <Link
          href={`/produk/${product.slug}`}
          className="text-xs font-semibold text-[#171A1C] dark:text-[#F1F3F4] hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors inline-flex items-center justify-between py-1"
        >
          <span>Detail Material &amp; Aplikasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <WhatsappButton
          namaProduk={product.name}
          variant="compact"
          className="w-full py-2 text-xs justify-center"
          label="Tanya Harga via WhatsApp"
        />
      </div>
    </article>
  );
}
