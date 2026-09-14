"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-100 text-slate-900 font-sans min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-300 p-8 text-center">
          <div className="text-red-700 font-mono font-bold text-sm uppercase tracking-wider mb-2">
            Sistem Pemulihan
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Terjadi Kesalahan Sistem
          </h1>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Terjadi gangguan teknis pada server. Silakan muat ulang atau hubungi administrator jika kendala berlanjut.
          </p>
          {error.digest && (
            <div className="mt-3 p-2 bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-500">
              Ref ID: {error.digest}
            </div>
          )}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => reset()}
              className="bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 hover:bg-slate-800 transition-colors"
            >
              Coba Muat Ulang
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
