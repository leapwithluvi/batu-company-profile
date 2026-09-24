import React from "react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

export interface WhatsappButtonProps {
  namaProduk?: string;
  judulArtikel?: string;
  customMessage?: string;
  variant?: "primary" | "secondary" | "outline" | "floating" | "compact";
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export function WhatsappButton({
  namaProduk,
  judulArtikel,
  customMessage,
  variant = "primary",
  label,
  className = "",
  showIcon = true,
}: WhatsappButtonProps) {
  const url = getWhatsappUrl({ namaProduk, judulArtikel, customMessage });

  const defaultLabel =
    variant === "floating"
      ? "Chat WhatsApp"
      : namaProduk
      ? `Tanya Harga ${namaProduk}`
      : judulArtikel
      ? "Konsultasi Material Ini"
      : "Tanya Harga via WhatsApp";

  const buttonText = label || defaultLabel;

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 select-none rounded-md";

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-[#25D366] hover:bg-[#20BA59] text-white border border-[#25D366] hover:border-[#20BA59] px-5 py-3 text-sm font-semibold tracking-wide shadow-sm active:bg-[#1DA851]";
      break;
    case "secondary":
      variantStyles =
        "bg-[#F1F5F9] hover:bg-[#E2E6E7] text-[#171A1C] border border-[#E2E8F0] dark:bg-[#1F2428] dark:hover:bg-[#2A3036] dark:text-[#F0F2F2] dark:border-[#30363A] px-5 py-3 text-sm font-medium shadow-xs";
      break;
    case "outline":
      variantStyles =
        "bg-transparent hover:bg-[#25D366]/10 text-[#25D366] border border-[#25D366] dark:text-[#25D366] dark:border-[#25D366] dark:hover:bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold";
      break;
    case "compact":
      variantStyles =
        "bg-[#25D366] hover:bg-[#20BA59] text-white border border-[#25D366] hover:border-[#20BA59] px-3.5 py-1.5 text-xs font-semibold shadow-xs active:bg-[#1DA851]";
      break;
    case "floating":
      variantStyles =
        "fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-xl px-4 py-3 text-sm font-semibold rounded-full border border-[#25D366] flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:bg-[#1DA851]";
      break;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Hubungi WhatsApp ${siteConfig.shortName}: ${buttonText}`}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {showIcon && (
        <WhatsappIcon
          className={`${
            variant === "compact" ? "w-3.5 h-3.5 mr-1.5" : "w-4 h-4 mr-2"
          } shrink-0`}
          aria-hidden="true"
        />
      )}
      <span>{buttonText}</span>
    </a>
  );
}
