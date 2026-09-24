import React from "react";
import Link from "next/link";
import { Home, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111416] min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-white dark:bg-[#181C1F] border border-[#E2E8F0] dark:border-[#30363A] p-8 sm:p-10 rounded-xs shadow-xs">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F1F5F9] dark:bg-[#202529] border border-[#E2E8F0] dark:border-[#30363A] text-[#171A1C] dark:text-[#F1F3F4] mb-4 font-mono font-bold text-lg rounded-xs">
          404
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#171A1C] dark:text-[#F1F3F4] tracking-tight">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-[#3F4549] dark:text-[#C2C8CC] leading-relaxed">
          Halaman atau material yang Anda cari mungkin telah dipindahkan, diubah namanya, atau alamat URL yang dimasukkan salah.
        </p>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0]/60 dark:border-[#30363A] flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#171A1C] dark:bg-[#202529] hover:bg-[#282E33] text-white text-xs font-semibold px-4 py-2.5 transition-colors rounded-xs shadow-xs border border-[#30363A]"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/produk"
            className="inline-flex items-center justify-center gap-2 bg-[#F1F5F9] dark:bg-[#202529] hover:bg-[#E5E8E8] dark:hover:bg-[#282E33] text-[#171A1C] dark:text-[#F1F3F4] border border-[#E2E8F0] dark:border-[#30363A] text-xs font-semibold px-4 py-2.5 transition-colors rounded-xs"
          >
            <Package className="w-3.5 h-3.5" />
            <span>Katalog Produk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
