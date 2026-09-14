"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Sun, Moon, Monitor } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { useTheme, type Theme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Blog", href: "/blog" },
  { name: "Hubungi Kami", href: "/kontak" },
];

const emptySubscribe = () => () => {};

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return <span className="w-24 h-7 inline-block rounded bg-slate-800/50" aria-hidden="true" />;
  }

  const options: { id: Theme; label: string; icon: typeof Sun }[] = [
    { id: "light", label: "Terang", icon: Sun },
    { id: "system", label: "Sistem", icon: Monitor },
    { id: "dark", label: "Gelap", icon: Moon },
  ];

  return (
    <div
      className="inline-flex items-center p-0.5 rounded border border-slate-700 bg-slate-900/90 text-slate-400 shadow-xs"
      role="group"
      aria-label="Pilihan Tema Tampilan"
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setTheme(opt.id)}
            aria-label={`Ganti tema ke mode ${opt.label}`}
            aria-pressed={isActive}
            title={`Mode ${opt.label}`}
            className={`p-1.5 rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#1F4E5F] dark:focus-visible:outline-[#6F9AAA] ${
              isActive
                ? "bg-[#1F4E5F] dark:bg-[#6F9AAA] text-white dark:text-[#111416] font-medium shadow-xs"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
            }`}
          >
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = getWhatsappUrl({});

  return (
    <header className="sticky top-0 z-50 bg-[#171A1C] text-slate-100 border-b border-[#30363A]">
      {/* Top bar dengan informasi lokasi operasional yang jujur */}
      <div className="hidden sm:block border-b border-[#30363A]/80 bg-[#111416]/90 px-4 py-1.5 text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operasional: DSN Jambe, Kukar &bull; Melayani Tenggarong &amp; Sekitarnya</span>
          </p>
          <div className="flex items-center gap-4">
            <span>Operasional: {siteConfig.operatingHours}</span>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex flex-col group py-2 focus-visible:outline-none"
            aria-label={`${siteConfig.name} - Beranda`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#1F4E5F] dark:bg-[#6F9AAA] inline-block shrink-0 rounded-xs" />
              <span className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-mono">
                {siteConfig.name}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Supplier Material Batu &bull; Tenggarong &amp; Kukar
            </span>
          </Link>

          {/* Desktop Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-xs ${
                    isActive
                      ? "text-white border-b-2 border-[#1F4E5F] dark:border-[#6F9AAA] font-semibold bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA + Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors rounded-xs shadow-xs"
              aria-label="Hubungi WhatsApp PT. Bumi Kutai Perkasa"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Tanya Harga WhatsApp</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-[#1F4E5F]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#30363A] bg-[#111416] px-4 pt-3 pb-6 space-y-2">
          <nav aria-label="Navigasi Seluler" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-base font-medium transition-colors rounded-xs ${
                    isActive
                      ? "text-white bg-[#181C1F] border-l-4 border-[#1F4E5F] dark:border-[#6F9AAA] font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-[#181C1F]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-4 border-t border-[#30363A]/80 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20BA59] text-white py-3 text-sm font-semibold rounded-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanya Harga via WhatsApp</span>
            </a>
            <div className="text-xs text-slate-400 text-center pt-2 font-mono">
              Operasional: DSN Jambe, Kutai Kartanegara
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
