"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("Internal Application Error:", error);
    }
  }, [error]);

  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-8 sm:p-10 rounded-xs shadow-xs">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 mb-4 rounded-xs">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
          Terjadi Gangguan Sementara
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
          Mohon maaf, sistem sedang mengalami kendala memuat data. Tidak ada data transaksi atau informasi sensitif yang terdampak.
        </p>

        {error.digest && (
          <div className="mt-4 p-2 bg-[#EEF0F0] dark:bg-[#202529] text-[10px] font-mono text-[#6B7378] dark:text-[#A5ADB2] border border-[#D9DCDD] dark:border-[#30363A] rounded-xs">
            Kode Referensi Insiden: {error.digest}
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-[#D9DCDD]/60 dark:border-[#30363A] flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-[#1F4E5F] hover:bg-[#173B48] dark:bg-[#6F9AAA] dark:hover:bg-[#598291] text-white dark:text-[#111416] text-xs font-semibold px-4 py-2.5 transition-colors cursor-pointer rounded-xs shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Muat Ulang Halaman</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#EEF0F0] dark:bg-[#202529] hover:bg-[#E5E8E8] dark:hover:bg-[#282E33] text-[#171A1C] dark:text-[#F1F3F4] border border-[#D9DCDD] dark:border-[#30363A] text-xs font-semibold px-4 py-2.5 transition-colors rounded-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
