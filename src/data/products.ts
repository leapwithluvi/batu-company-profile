export interface Product {
  name: string;
  slug: string;
  category: "Material Agregat" | "Material Pondasi" | "Batu Gunung";
  shortDescription: string;
  description: string;
  uses: string[];
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  orderUnitNote: string;
}

export const PRODUCT_CATEGORIES = [
  "Material Agregat",
  "Material Pondasi",
  "Batu Gunung",
] as const;

export const productsData: Product[] = [
  {
    name: "Abu Batu",
    slug: "abu-batu",
    category: "Material Agregat",
    shortDescription:
      "Material halus hasil pemecahan batu untuk campuran aspal, paving block, batako, dan perata lantai.",
    description:
      "Abu batu merupakan fraksi agregat halus yang dihasilkan dari proses pengolahan mesin pemecah batu (stone crusher). Memiliki tekstur butiran tajam dan padat, abu batu menjadi material penting pengganti atau pelengkap pasir dalam berbagai pekerjaan perkerasan, pembuatan precast paving block, dan campuran adukan konstruksi di wilayah Tenggarong dan Kutai Kartanegara.",
    uses: [
      "Campuran perkerasan aspal jalan (asphalt concrete)",
      "Bahan baku utama pembuatan paving block dan batako press presisi",
      "Lapis perata (bedding sand alternative) sebelum pemasangan paving",
      "Campuran adukan plesteran dan pengisi rongga agregat kasar",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tumpukan abu batu agregat halus di stockpile PT. Bumi Kutai Perkasa",
    metaTitle: "Jual Abu Batu Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Jual abu batu berkualitas untuk kebutuhan paving, aspal, dan adukan konstruksi. Melayani pengiriman ke Tenggarong dan area Kutai Kartanegara oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Sistem pengiriman menggunakan dump truck dengan metode perhitungan biaya (ritase / tonase / kubikasi) yang disesuaikan berdasarkan konfirmasi kesepakatan bersama",
  },
  {
    name: "Batu Agregat",
    slug: "batu-agregat",
    category: "Material Agregat",
    shortDescription:
      "Batu pecah bergradasi untuk campuran beton struktur, lapis pondasi jalan, dan stabilisasi lahan.",
    description:
      "Batu agregat yang disediakan PT. Bumi Kutai Perkasa merupakan material batu pecah dengan gradasi butiran yang terukur untuk menjamin kerapatan dan kekuatan tekan struktur. Cocok digunakan sebagai bahan campuran beton bertulang, lapis pondasi jalan, maupun perkuatan area kerja konstruksi di daerah Kutai Kartanegara.",
    uses: [
      "Campuran adukan beton struktural dan non-struktural",
      "Pekerjaan lapis pondasi agregat jalan (base course / sub-base)",
      "Pengerasan lahan parkir, halaman pergudangan, dan jalan akses",
      "Drainase dan lapisan penyaring konstruksi",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Material batu agregat konstruksi berkualitas siap kirim ke Tenggarong",
    metaTitle: "Batu Agregat Tenggarong | Supplier PT. Bumi Kutai Perkasa",
    metaDescription:
      "Penyedia batu agregat berkualitas untuk campuran beton dan pengerasan jalan di Tenggarong & Kutai Kartanegara. Hubungi PT. Bumi Kutai Perkasa untuk penawaran harga.",
    orderUnitNote: "Tersedia pemesanan per ritase dump truck atau armada proyek",
  },
  {
    name: "Batu Pondasi",
    slug: "batu-pondasi",
    category: "Material Pondasi",
    shortDescription:
      "Batu keras alami pilihan untuk pondasi bangunan, turap penahan tanah, dan penguat tanggul.",
    description:
      "Batu pondasi dari PT. Bumi Kutai Perkasa merupakan bongkahan batu alami berkualitas padat yang dirancang khusus untuk menopang beban struktur bangunan gedung, rumah tinggal, ruko, serta dinding penahan tanah di wilayah Tenggarong dan sekitarnya. Bentuk pecahannya memiliki sudut yang memudahkan penguncian spesi mortar semen.",
    uses: [
      "Pondasi lajur rumah tinggal, gedung kantor, dan pergudangan",
      "Pondasi turap penahan tanah (retaining wall) di lereng dan tebing",
      "Konstruksi saluran drainase, gorong-gorong, dan talud sungai",
      "Penguat tanggul dan dinding pelindung gerusan air",
    ],
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Batu pondasi padat untuk konstruksi bangunan di wilayah Kutai Kartanegara",
    metaTitle: "Jual Batu Pondasi Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Supplier batu pondasi berkualitas di Kutai Kartanegara. Melayani pengiriman material pondasi bangunan dan turap ke Tenggarong dan sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Kirim langsung ke titik proyek dengan dump truck",
  },
  {
    name: "Batu Tronjolan",
    slug: "batu-tronjolan",
    category: "Material Pondasi",
    shortDescription:
      "Batu bongkahan berukuran besar untuk pondasi berat, pengisian bronjong kawat, dan penahan erosi.",
    description:
      "Batu tronjolan adalah batuan dengan ukuran bongkahan lebih besar yang sangat efektif digunakan untuk pengisian anyaman bronjong kawat (gabion), pengurugan dasar pondasi di tanah lunak rawa, serta penahan abrasi dan longsoran tebing di kawasan Kutai Kartanegara.",
    uses: [
      "Material pengisi bronjong kawat (gabion) penahan tebing dan bibir sungai",
      "Dasar pengurugan perkuatan tanah lunak dan rawa sebelum pembangunan",
      "Pondasi jembatan darurat, penahan abrasi, dan pemecah arus air",
      "Pekerjaan rip-rap pelindung lereng jalan",
    ],
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Material batu tronjolan bongkahan besar untuk pekerjaan bronjong dan turap",
    metaTitle: "Jual Batu Tronjolan Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Supplier batu tronjolan untuk bronjong kawat, perkuatan tebing, dan konstruksi penahan tanah. Melayani Tenggarong dan Kutai Kartanegara dari PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Konfirmasi ukuran bongkahan dan armada melalui WhatsApp",
  },
  {
    name: "Batu Gunung ukuran 2x1",
    slug: "batu-gunung-2x1",
    category: "Batu Gunung",
    shortDescription:
      "Batu gunung pecah fraksi ukuran 2x1 (1-2 cm) untuk campuran cor beton struktur presisi.",
    description:
      "Batu Gunung ukuran 2x1 merupakan batuan hasil olahan quarry dengan fraksi pecahan ukuran sekitar 1 hingga 2 cm. Karakteristik batuan ini bersudut tajam dan padat, menjadikannya agregat kasar yang sangat baik untuk campuran cor beton bertulang, kolom praktis, dan plat lantai bangunan.",
    uses: [
      "Campuran cor plat lantai, kolom, dan balok beton bertulang",
      "Pengecoran beton mutu presisi untuk struktur bangunan",
      "Pekerjaan rabat beton dan lantai kerja",
      "Bahan precast beton mutu tinggi",
    ],
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Batu Gunung ukuran 2x1 untuk campuran cor beton di Tenggarong",
    metaTitle: "Batu Gunung Ukuran 2x1 Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Jual batu gunung ukuran 2x1 untuk pengecoran beton bermutu. PT. Bumi Kutai Perkasa melayani pengiriman ke Tenggarong, Kutai Kartanegara dan sekitarnya.",
    orderUnitNote: "Takaran isi bak terukur, pengiriman dump truck",
  },
  {
    name: "Batu Gunung ukuran 2x3",
    slug: "batu-gunung-2x3",
    category: "Batu Gunung",
    shortDescription:
      "Batu gunung pecah fraksi ukuran 2x3 (2-3 cm) untuk konstruksi beton massa dan jalan cor.",
    description:
      "Batu Gunung ukuran 2x3 adalah batuan pecah berukuran sekitar 2 hingga 3 cm. Ukuran ini banyak diaplikasikan pada pekerjaan pengecoran beton berskala medium hingga besar, rigid pavement jalan lingkungan, serta pondasi struktur bertingkat di Tenggarong dan kawasan Kukar.",
    uses: [
      "Campuran pengecoran beton jalan (rigid pavement)",
      "Pengecoran pondasi telapak (footplate) dan tiang pancang setempat",
      "Pekerjaan retaining wall dan gorong-gorong beton",
      "Campuran readymix maupun batching manual",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Batu Gunung ukuran 2x3 agregat cor beton berkualitas",
    metaTitle: "Batu Gunung Ukuran 2x3 Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Penyedia batu gunung ukuran 2x3 untuk proyek jalan beton dan konstruksi umum di Tenggarong & Kutai Kartanegara. Hubungi PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Pemesanan armada dump truck siap kirim langsung",
  },
  {
    name: "Batu Gunung ukuran 3x5",
    slug: "batu-gunung-3x5",
    category: "Batu Gunung",
    shortDescription:
      "Batu gunung fraksi ukuran 3x5 (3-5 cm) untuk lapis perkerasan pondasi jalan dan drainase.",
    description:
      "Batu Gunung ukuran 3x5 memiliki dimensi sekitar 3 hingga 5 cm. Ukuran batuan ini sangat ideal difungsikan sebagai lapis pondasi bawah perkerasan jalan, bantalan rel dan drainase rembesan, serta lapisan stabilisasi tanah sebelum pengecoran atau pengaspalan.",
    uses: [
      "Lapis pondasi bawah (sub-base) jalan perumahan dan jalan industri",
      "Lapisan resapan dan sistem drainase rembesan (French drain)",
      "Pengerasan area tambang, perkebunan, dan jalan akses alat berat",
      "Perataan tanah dasar berbatu tahan amblas",
    ],
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Batu Gunung ukuran 3x5 untuk pengerasan pondasi jalan proyek",
    metaTitle: "Batu Gunung Ukuran 3x5 Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Jual batu gunung ukuran 3x5 untuk lapis perkerasan jalan dan drainase proyek di wilayah Tenggarong dan Kutai Kartanegara oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Konfirmasi ketersediaan volume per rit via WhatsApp",
  },
  {
    name: "Batu Gunung ukuran 5x7",
    slug: "batu-gunung-5x7",
    category: "Batu Gunung",
    shortDescription:
      "Batu gunung fraksi kasar ukuran 5x7 (5-7 cm) untuk bantalan dasar perkerasan dan stabilisasi lahan lunak.",
    description:
      "Batu Gunung ukuran 5x7 merupakan batuan fraksi kasar dengan rentang ukuran 5 hingga 7 cm. Batuan jenis ini memiliki kemampuan menahan beban tekan tinggi dan memberikan daya saling kunci (interlocking) yang kokoh, sangat efektif untuk menangani jalan amblas di tanah lembek khas Kalimantan Timur.",
    uses: [
      "Lapis perkerasan awal dan stabilisasi tanah lunak / rawa",
      "Bantalan dasar jalan akses kendaraan muatan berat dan logistik",
      "Saluran pembuangan air terbuka dan pelindung lereng galian",
      "Material urugan padat pondasi jalan utama",
    ],
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Batu Gunung ukuran 5x7 untuk stabilisasi tanah dan jalan berat di Kutai Kartanegara",
    metaTitle: "Batu Gunung Ukuran 5x7 Tenggarong | PT. Bumi Kutai Perkasa",
    metaDescription:
      "Supplier batu gunung ukuran 5x7 untuk stabilisasi tanah lembek dan pondasi jalan muatan berat di Tenggarong & Kutai Kartanegara dari PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Pengiriman terjadwal dump truck kapasitas m³ terukur",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p) => p.slug);
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return productsData.filter((p) => p.category === category);
}
