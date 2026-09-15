export interface Product {
  name: string;
  slug: string;
  category: "Material Agregat" | "Material Pondasi" | "Batu Split";
  shortDescription: string;
  description: string;
  uses: string[];
  image: string;
  imageAlt: string;
  videoUrl?: string; // Opsional: URL video file (misal: /videos/batu-split.mp4) atau link YouTube
  metaTitle: string;
  metaDescription: string;
  orderUnitNote: string;
}

export const PRODUCT_CATEGORIES = [
  "Material Agregat",
  "Material Pondasi",
  "Batu Split",
] as const;

export const productsData: Product[] = [
  {
    name: "Abu Batu",
    slug: "abu-batu",
    category: "Material Agregat",
    shortDescription:
      "Material halus hasil pemecahan batu untuk campuran aspal, paving block, batako, dan perata lantai.",
    description:
      "Abu batu merupakan fraksi agregat halus yang dihasilkan dari proses pengolahan mesin pemecah batu (stone crusher). Memiliki tekstur butiran tajam dan padat, abu batu menjadi material penting pengganti atau pelengkap pasir dalam berbagai pekerjaan perkerasan, pembuatan precast paving block, dan campuran adukan konstruksi.",
    uses: [
      "Campuran perkerasan aspal jalan (asphalt concrete)",
      "Bahan baku utama pembuatan paving block dan batako press presisi",
      "Lapis perata (bedding sand alternative) sebelum pemasangan paving",
      "Campuran adukan plesteran dan pengisi rongga agregat kasar",
    ],
    image: "/abu_batu.png",
    imageAlt:
      "Tumpukan abu batu agregat halus di stockpile PT. Bumi Kutai Perkasa",
    metaTitle:
      "Jual Abu Batu | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Jual abu batu berkualitas untuk kebutuhan paving, aspal, dan adukan konstruksi. Melayani pengiriman ke Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote:
      "Sistem pengiriman menggunakan dump truck dengan metode perhitungan biaya (ritase / tonase / kubikasi) yang disesuaikan berdasarkan konfirmasi kesepakatan bersama",
  },
  {
    name: "Batu Agregat",
    slug: "batu-agregat",
    category: "Material Agregat",
    shortDescription:
      "Batu pecah bergradasi untuk campuran beton struktur, lapis pondasi jalan, dan stabilisasi lahan.",
    description:
      "Batu agregat yang disediakan PT. Bumi Kutai Perkasa merupakan material batu pecah dengan gradasi butiran yang terukur untuk menjamin kerapatan dan kekuatan tekan struktur. Cocok digunakan sebagai bahan campuran beton bertulang, lapis pondasi jalan, maupun perkuatan area kerja konstruksi.",
    uses: [
      "Campuran adukan beton struktural dan non-struktural",
      "Pekerjaan lapis pondasi agregat jalan (base course / sub-base)",
      "Pengerasan lahan parkir, halaman pergudangan, dan jalan akses",
      "Drainase dan lapisan penyaring konstruksi",
    ],
    image: "/koral_21.png",
    imageAlt:
      "Material batu agregat konstruksi berkualitas siap kirim ke Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaTitle:
      "Batu Agregat | Supplier PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Penyedia batu agregat berkualitas untuk campuran beton dan pengerasan jalan di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote:
      "Tersedia pemesanan per ritase dump truck atau armada proyek",
  },
  {
    name: "Batu Split",
    slug: "batu-split",
    category: "Material Agregat",
    shortDescription:
      "Batu split pecah mesin berkualitas untuk campuran cor beton bertulang, jembatan, dan rigid pavement.",
    description:
      "Batu split (batu pecah mesin) dari PT. Bumi Kutai Perkasa merupakan agregat kasar pilihan yang diproses melalui mesin stone crusher berstandar konstruksi. Memiliki bidang pecah bersudut tajam (angular), bersih dari kadar lumpur berlebih, dan tingkat kekerasan batuan yang kokoh, sangat ideal untuk campuran pengecoran beton struktural, balok sloof, kolom, plat lantai, serta perkerasan jalan beton.",
    uses: [
      "Campuran utama cor beton bertulang bangunan gedung dan jembatan",
      "Pengecoran jalan lingkungan dan perkerasan kaku (rigid pavement)",
      "Bahan baku adukan ready mix dan industri pracetak beton (precast)",
      "Pengecoran pondasi telapak (footplate) dan kolom struktur",
    ],
    image: "/batu_split.png",
    imageAlt:
      "Material batu split cor beton berkualitas di stockpile PT. Bumi Kutai Perkasa",
    metaTitle:
      "Jual Batu Split | Supplier PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Supplier batu split cor beton berkualitas di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa. Siap melayani pengiriman armada dump truck dengan mutu terjamin.",
    orderUnitNote:
      "Pengiriman langsung armada dump truck, melayani order skala proyek & PPN resmi",
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
    image: "/pondasi_tronjolan.png",
    imageAlt:
      "Batu pondasi padat untuk konstruksi bangunan di wilayah Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaTitle:
      "Jual Batu Pondasi | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Supplier batu pondasi berkualitas di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa. Melayani pengiriman material pondasi bangunan dan turap.",
    orderUnitNote: "Kirim langsung ke titik proyek dengan dump truck",
  },
  {
    name: "Batu Tronjolan",
    slug: "batu-tronjolan",
    category: "Material Pondasi",
    shortDescription:
      "Batu bongkahan berukuran besar untuk pondasi berat, pengisian bronjong kawat, dan penahan erosi.",
    description:
      "Batu tronjolan adalah batuan dengan ukuran bongkahan lebih besar yang sangat efektif digunakan untuk pengisian anyaman bronjong kawat (gabion), pengurugan dasar pondasi di tanah lunak rawa, serta penahan abrasi dan longsoran tebing.",
    uses: [
      "Material pengisi bronjong kawat (gabion) penahan tebing dan bibir sungai",
      "Dasar pengurugan perkuatan tanah lunak dan rawa sebelum pembangunan",
      "Pondasi jembatan darurat, penahan abrasi, dan pemecah arus air",
      "Pekerjaan rip-rap pelindung lereng jalan",
    ],
    image: "/pondasi_tronjolan.png",
    imageAlt:
      "Material batu tronjolan bongkahan besar untuk pekerjaan bronjong dan turap",
    metaTitle:
      "Jual Batu Tronjolan | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Supplier batu tronjolan untuk bronjong kawat, perkuatan tebing, dan konstruksi penahan tanah. Melayani Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Konfirmasi ukuran bongkahan dan armada melalui WhatsApp",
  },
  {
    name: "Batu Split ukuran 1x1",
    slug: "batu-split-1x1",
    category: "Batu Split",
    shortDescription:
      "Batu split pecah fraksi terkecil ukuran 1x1 (±1 cm) untuk campuran beton halus, plesteran struktural, dan precast mutu tinggi.",
    description:
      "Batu Split ukuran 1x1 merupakan fraksi paling halus dari rangkaian batu split pecah mesin. Ukuran butiran sekitar 1 cm ini menghasilkan campuran beton yang sangat rapat, minim rongga udara, dan ideal untuk pekerjaan pengecoran elemen struktural berdimensi kecil seperti kolom praktis tipis, balok anak, plat precast, serta adukan beton mutu tinggi yang menuntut kepadatan maksimum.",
    uses: [
      "Campuran beton mutu tinggi untuk elemen tipis dan padat (kolom mini, balok anak)",
      "Bahan precast beton presisi seperti paving block tebal dan kanstin",
      "Pengisian celah sempit tulangan rapat tanpa rongga keropos",
      "Adukan beton plesteran struktural dan lapis finishing cor",
    ],
    image: "/koral_11.png",
    imageAlt:
      "Batu Split ukuran 1x1 fraksi halus untuk campuran beton mutu tinggi",
    metaTitle:
      "Batu Split Ukuran 1x1 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Jual batu split ukuran 1x1 fraksi halus untuk beton mutu tinggi dan precast presisi. PT. Bumi Kutai Perkasa melayani pengiriman ke Tenggarong, Kutai Kartanegara & Sekitarnya.",
    orderUnitNote: "Takaran isi bak terukur, pengiriman dump truck",
  },
  {
    name: "Batu Split ukuran 2x1",
    slug: "batu-split-2x1",
    category: "Batu Split",
    shortDescription:
      "Batu split pecah fraksi ukuran 2x1 (1-2 cm) untuk campuran cor beton struktur presisi.",
    description:
      "Batu Split ukuran 2x1 merupakan batuan hasil olahan dengan fraksi pecahan ukuran sekitar 1 hingga 2 cm. Karakteristik batuan ini bersudut tajam dan padat, menjadikannya agregat kasar yang sangat baik untuk campuran cor beton bertulang, kolom praktis, dan plat lantai bangunan.",
    uses: [
      "Campuran cor plat lantai, kolom, dan balok beton bertulang",
      "Pengecoran beton mutu presisi untuk struktur bangunan",
      "Pekerjaan rabat beton dan lantai kerja",
      "Bahan precast beton mutu tinggi",
    ],
    image: "/koral_21.png",
    videoUrl: "/videos/koral_21.mp4",
    imageAlt:
      "Batu Split ukuran 2x1 untuk campuran cor beton di Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaTitle:
      "Batu Split Ukuran 2x1 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Jual batu split ukuran 2x1 untuk pengecoran beton bermutu. PT. Bumi Kutai Perkasa melayani pengiriman ke Tenggarong, Kutai Kartanegara & Sekitarnya.",
    orderUnitNote: "Takaran isi bak terukur, pengiriman dump truck",
  },
  {
    name: "Batu Split ukuran 2x3",
    slug: "batu-split-2x3",
    category: "Batu Split",
    shortDescription:
      "Batu split pecah fraksi ukuran 2x3 (2-3 cm) untuk konstruksi beton massa dan jalan cor.",
    description:
      "Batu Split ukuran 2x3 adalah batuan pecah berukuran sekitar 2 hingga 3 cm. Ukuran ini banyak diaplikasikan pada pekerjaan pengecoran beton berskala medium hingga besar, rigid pavement jalan lingkungan, serta pondasi struktur bertingkat.",
    uses: [
      "Campuran pengecoran beton jalan (rigid pavement)",
      "Pengecoran pondasi telapak (footplate) dan tiang pancang setempat",
      "Pekerjaan retaining wall dan gorong-gorong beton",
      "Campuran readymix maupun batching manual",
    ],
    image: "/koral_23.png",
    imageAlt: "Batu Split ukuran 2x3 agregat cor beton berkualitas",
    metaTitle:
      "Batu Split Ukuran 2x3 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Penyedia batu split ukuran 2x3 untuk proyek jalan beton dan konstruksi umum di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa. Hubungi PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Pemesanan armada dump truck siap kirim langsung",
  },
  {
    name: "Batu Split ukuran 3x5",
    slug: "batu-split-3x5",
    category: "Batu Split",
    shortDescription:
      "Batu split fraksi ukuran 3x5 (3-5 cm) untuk lapis perkerasan pondasi jalan dan drainase.",
    description:
      "Batu Split ukuran 3x5 memiliki dimensi sekitar 3 hingga 5 cm. Ukuran batuan ini sangat ideal difungsikan sebagai lapis pondasi bawah perkerasan jalan, bantalan rel dan drainase rembesan, serta lapisan stabilisasi tanah sebelum pengecoran atau pengaspalan.",
    uses: [
      "Lapis pondasi bawah (sub-base) jalan perumahan dan jalan industri",
      "Lapisan resapan dan sistem drainase rembesan (French drain)",
      "Pengerasan area tambang, perkebunan, dan jalan akses alat berat",
      "Perataan tanah dasar berbatu tahan amblas",
    ],
    image: "/koral_57.png",
    videoUrl: "/videos/koral_57.mp4",
    imageAlt: "Batu Split ukuran 3x5 untuk pengerasan pondasi jalan proyek",
    metaTitle:
      "Batu Split ukuran 3x5 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Jual batu split ukuran 3x5 untuk lapis perkerasan jalan dan drainase proyek di wilayah Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Konfirmasi ketersediaan volume per rit via WhatsApp",
  },
  {
    name: "Batu Split ukuran 5x7",
    slug: "batu-split-5x7",
    category: "Batu Split",
    shortDescription:
      "Batu split fraksi kasar ukuran 5x7 (5-7 cm) untuk bantalan dasar perkerasan dan stabilisasi lahan lunak.",
    description:
      "Batu Split ukuran 5x7 merupakan batuan fraksi kasar dengan rentang ukuran 5 hingga 7 cm. Batuan jenis ini memiliki kemampuan menahan beban tekan tinggi dan memberikan daya saling kunci (interlocking) yang kokoh, sangat efektif untuk menangani jalan amblas di tanah lembek khas Kalimantan Timur.",
    uses: [
      "Lapis perkerasan awal dan stabilisasi tanah lunak / rawa",
      "Bantalan dasar jalan akses kendaraan muatan berat dan logistik",
      "Saluran pembuangan air terbuka dan pelindung lereng galian",
      "Material urugan padat pondasi jalan utama",
    ],
    image: "/koral_57.png",
    videoUrl: "/videos/koral_57.mp4",
    imageAlt:
      "Batu Split ukuran 5x7 untuk stabilisasi tanah dan jalan berat di Kutai Kartanegara",
    metaTitle:
      "Batu Split ukuran 5x7 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Supplier batu split ukuran 5x7 untuk stabilisasi tanah lembek dan pondasi jalan muatan berat di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Pengiriman terjadwal dump truck kapasitas m³ terukur",
  },
  {
    name: "Batu Split ukuran 7x10",
    slug: "batu-split-7x10",
    category: "Batu Split",
    shortDescription:
      "Batu split fraksi kasar ukuran 7x10 (7-10 cm) untuk pengurugan pondasi dalam, perkuatan tebing, dan lapis dasar jalan berat.",
    description:
      "Batu Split ukuran 7x10 adalah fraksi paling kasar dalam lini batu split yang disediakan PT. Bumi Kutai Perkasa. Bongkahan berukuran 7 hingga 10 cm ini memiliki daya tahan beban yang sangat tinggi dan daya kunci antar batuan (interlocking) yang kuat, menjadikannya pilihan utama untuk pekerjaan pengurugan pondasi dalam, stabilisasi tebing longsor, serta lapis dasar perkerasan jalan bagi kendaraan muatan berat di area pertambangan dan perkebunan.",
    uses: [
      "Pengurugan dan pemadatan dasar pondasi dalam pada tanah keras",
      "Lapis dasar perkerasan jalan tambang dan jalan akses alat berat",
      "Pengisi cerucuk batu pada stabilisasi lereng dan tebing rawan longsor",
      "Material lapis pertama pada perbaikan jalan amblas akibat muatan overload",
    ],
    image: "/pondasi_tronjolan.png",
    imageAlt:
      "Batu Split ukuran 7x10 fraksi kasar untuk pondasi jalan berat dan stabilisasi lereng",
    metaTitle:
      "Batu Split ukuran 7x10 | PT. Bumi Kutai Perkasa - Tenggarong, Kutai Kartanegara & Sekitarnya",
    metaDescription:
      "Supplier batu split ukuran 7x10 fraksi kasar untuk pondasi jalan berat dan stabilisasi lereng di Tenggarong, Kutai Kartanegara & Sekitarnya oleh PT. Bumi Kutai Perkasa.",
    orderUnitNote: "Konfirmasi ketersediaan volume dan armada via WhatsApp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p) => p.slug);
}

export function getProductsByCategory(
  category: Product["category"],
): Product[] {
  return productsData.filter((p) => p.category === category);
}
