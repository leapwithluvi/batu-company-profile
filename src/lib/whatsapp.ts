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

  // Pesan dari halaman produk spesifik
  if (namaProduk) {
    return `Halo Admin PT. Bumi Kutai Perkasa 👋

Saya ingin pesan *${namaProduk}* untuk proyek di [wilayah/kecamatan].

Mohon info:
1. Harga per rit / per ton
2. Estimasi ongkos kirim ke lokasi saya
3. Ketersediaan armada & jadwal pengiriman

Terima kasih.`;
  }

  // Pesan dari halaman artikel blog
  if (judulArtikel) {
    return `Halo Admin PT. Bumi Kutai Perkasa 👋

Saya baru baca artikel "${judulArtikel}" dan ingin konsultasi kebutuhan material untuk proyek di [wilayah/kecamatan].

Mohon info harga terbaru dan ketersediaan pengiriman.

Terima kasih.`;
  }

  // Pesan umum (floating button, beranda, navbar)
  return `Halo Admin PT. Bumi Kutai Perkasa 👋

Saya ingin konsultasi kebutuhan material batu untuk proyek di [wilayah/kecamatan].

Mohon info:
1. Jenis & harga material yang tersedia
2. Estimasi ongkos kirim
3. Ketersediaan armada dump truck

Terima kasih.`;
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
