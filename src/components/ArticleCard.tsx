import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Article } from "@/data/articles";

export interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="border border-[#E2E8F0] dark:border-[#30363A] bg-white dark:bg-[#181C1F] grid grid-cols-1 md:grid-cols-12 gap-0 group rounded-lg overflow-hidden shadow-xs">
        <div className="relative aspect-16/10 md:aspect-auto md:h-full md:col-span-5 bg-[#F1F5F9] dark:bg-[#202529] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#6B7378] dark:text-[#A5ADB2] font-mono mb-2.5">
              <span className="text-[#EA580C] dark:text-[#FB923C] font-semibold">{article.category}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#6B7378] dark:text-[#A5ADB2]" />
                {article.publishedDate}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#6B7378] dark:text-[#A5ADB2]" />
                {article.readTime}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight group-hover:text-[#EA580C] dark:group-hover:text-[#FB923C] transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            <p className="mt-3 text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E2E8F0]/60 dark:border-[#30363A] flex items-center justify-between">
            <span className="text-xs text-[#6B7378] dark:text-[#A5ADB2] font-medium font-mono">
              Oleh: {article.author}
            </span>
            <Link
              href={`/blog/${article.slug}`}
              className="text-xs font-semibold text-[#EA580C] dark:text-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FDBA74] inline-flex items-center gap-1"
            >
              <span>Baca Panduan Lengkap</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="border border-[#E2E8F0] dark:border-[#30363A] bg-white dark:bg-[#181C1F] flex flex-col justify-between group hover:border-[#CBD5E1] dark:hover:border-[#41494E] transition-colors rounded-lg overflow-hidden shadow-xs">
      <div>
        <div className="relative aspect-16/10 bg-[#F1F5F9] dark:bg-[#202529] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#111416]/90 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm">
            {article.category}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[11px] text-[#6B7378] dark:text-[#A5ADB2] font-mono mb-2">
            <span>{article.publishedDate}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-base font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight leading-snug group-hover:text-[#EA580C] dark:group-hover:text-[#FB923C] transition-colors">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs text-[#3F4549] dark:text-[#C2C8CC] line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 mt-3 border-t border-[#E2E8F0]/60 dark:border-[#30363A]">
        <Link
          href={`/blog/${article.slug}`}
          className="pt-3 text-xs font-semibold text-[#EA580C] dark:text-[#FB923C] hover:text-[#C2410C] dark:hover:text-[#FDBA74] inline-flex items-center justify-between w-full"
        >
          <span>Baca Selengkapnya</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
