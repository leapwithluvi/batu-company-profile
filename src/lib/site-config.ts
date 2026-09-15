export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  phoneDisplay: string;
  whatsappNumber: string;
  operationalLocation: {
    village: string; // Dusun Jambe
    subdistrict?: string; // Kec. Sebulu
    regency: string; // Kutai Kartanegara
    province: string; // Kalimantan Timur
    country: string; // Indonesia
  };
  address: {
    street: string;
    subdistrict: string;
    regency: string;
    province: string;
    postalCode: string;
  };
  primaryTargetArea: string; // Tenggarong
  serviceAreas: string[];
  operatingHours: string;
  googleMapsUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "PT. Bumi Kutai Perkasa",
  shortName: "Bumi Kutai Perkasa",
  tagline:
    "Supplier Batu & Material Konstruksi Melayani Tenggarong dan Kutai Kartanegara",
  description:
    "PT. Bumi Kutai Perkasa beroperasi di Dusun Jambe, Kec. Sebulu, Kutai Kartanegara, menyediakan material batu pondasi, abu batu, batu agregat, batu tronjolan, dan aneka ukuran batu gunung untuk kebutuhan konstruksi di Tenggarong dan sekitarnya.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://bumikutaiperkasa.vercel.app",
  phoneDisplay: "+62 831-5224-8722",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    "https://maps.google.com/?q=Dusun+Jambe,+Kec.+Sebulu,+Kutai+Kartanegara,+Kalimantan+Timur",
  operationalLocation: {
    village: "Dusun Jambe",
    subdistrict: "Kec. Sebulu",
    regency: "Kutai Kartanegara",
    province: "Kalimantan Timur",
    country: "Indonesia",
  },
  address: {
    street: "Dusun Jambe",
    subdistrict: "Sebulu",
    regency: "Kutai Kartanegara",
    province: "Kalimantan Timur",
    postalCode: "75511",
  },
  primaryTargetArea: "Tenggarong & Sekitarnya",
  serviceAreas: [
    "Tenggarong",
    "Kutai Kartanegara",
    "Samarinda",
    "Loa Janan",
    "Loa Kulu",
    "Sebulu",
    "Anggana",
    "Wilayah Kalimantan Timur Sekitarnya",
  ],
  operatingHours: "Senin – Sabtu: 08.00 – 17.00 WITA",
};
