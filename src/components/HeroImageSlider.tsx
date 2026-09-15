"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  src: string;
  alt: string;
  label: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    src: "/mesin/mesin1_crusher.png",
    alt: "Material Mesin Crusher PT. Bumi Kutai Perkasa",
    label: "Mesin Crusher",
  },
  {
    src: "/mesin/mesin2_crusher.png",
    alt: "Material Mesin Crusher PT. Bumi Kutai Perkasa",
    label: "Mesin Crusher",
  },
  {
    src: "/mesin/mesin3_crusher.png",
    alt: "Material Mesin Crusher PT. Bumi Kutai Perkasa",
    label: "Mesin Crusher",
  },
];

interface HeroImageSliderProps {
  companyName: string;
}

export function HeroImageSlider({ companyName }: HeroImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-2.5 rounded-xl shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-[#EEF0F0] dark:bg-[#202529] rounded-lg group">
        {/* Slides Images */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Slide Material Label Badge (Top-left) */}
        <div className="absolute top-3 left-3 z-20 bg-[#111416]/85 backdrop-blur-xs text-white text-xs font-mono px-3 py-1.5 rounded-md shadow-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6F9AAA] animate-pulse" />
          <span>{HERO_SLIDES[currentIndex].label}</span>
        </div>

        {/* Slide Counter (Top-right) */}
        <div className="absolute top-3 right-3 z-20 bg-[#111416]/85 backdrop-blur-xs text-slate-200 text-[11px] font-mono px-2.5 py-1 rounded-md shadow-xs">
          {currentIndex + 1} / {HERO_SLIDES.length}
        </div>

        {/* Navigation Arrow Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Foto sebelumnya"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#111416]/60 hover:bg-[#111416]/90 text-white backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6F9AAA]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Foto selanjutnya"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#111416]/60 hover:bg-[#111416]/90 text-white backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6F9AAA]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-12 inset-x-0 z-20 flex justify-center items-center gap-1.5 pointer-events-auto">
          {HERO_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Pindah ke foto ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? "w-6 bg-white shadow-sm"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Bottom Technical Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-white/95 dark:bg-[#111416]/95 p-3 text-xs text-[#171A1C] dark:text-slate-300 font-mono border-t border-[#D9DCDD] dark:border-[#30363A] flex justify-between items-center">
          <span className="font-semibold truncate mr-2">{companyName}</span>
          <span className="text-[#1F4E5F] dark:text-[#6F9AAA] font-bold shrink-0">
            Dusun Jambe, Kec. Sebulu, Kukar
          </span>
        </div>
      </div>
    </div>
  );
}
