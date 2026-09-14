import { siteConfig } from "./site-config";

export interface WhatsappMessageParams {
  namaProduk?: string;
  judulArtikel?: string;
  customMessage?: string;
}

export function buildWhatsappMessage({
  namaProduk,
  judulArtikel,
  customMessage,
}: WhatsappMessageParams): string {
  if (customMessage) {
    return customMessage;
  }

  const subject = namaProduk || judulArtikel;

  if (subject) {
    return `Halo Admin, saya tertarik dengan ${subject} di Tenggarong. Mohon info harga terbaru dan ongkos kirim.`;
  }

  return `Halo Admin, saya ingin konsultasi kebutuhan material batu dan pasir di Tenggarong. Mohon info harga terbaru dan ketersediaan pengiriman armada dump truck.`;
}

/**
 * Menghasilkan link WhatsApp resmi (wa.me) secara aman tanpa risiko open-redirect.
 * Parameter pesan di-encode menggunakan encodeURIComponent.
 */
export function getWhatsappUrl(
  params: WhatsappMessageParams,
  phone: string = siteConfig.whatsappNumber
): string {
  const message = buildWhatsappMessage(params);
  const cleanPhone =
    phone.replace(/[^0-9]/g, "") ||
    siteConfig.whatsappNumber.replace(/[^0-9]/g, "") ||
    "6281234567890";

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
