export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  relatedProductSlug?: string;
  relatedProductSlugs?: string[];
  sections: ArticleSection[];
}

export const articlesData: Article[] = [
  {
    title: "Apa Itu Abu Batu dan Kegunaannya dalam Pekerjaan Konstruksi?",
    slug: "apa-itu-abu-batu-kegunaan",
    excerpt:
      "Mengenal fungsi abu batu sebagai agregat halus untuk campuran aspal, bahan baku paving block berkualitas, dan pelapis lantai kerja di Tenggarong, Kutai Kartanegara, dan sekitarnya.",
    publishedDate: "15 Februari 2025",
    readTime: "4 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Material Agregat",
    image: "/abu_batu.jpg",
    imageAlt:
      "Stok abu batu untuk kebutuhan konstruksi dan pembuatan paving block di Tenggarong, Kutai Kartanegara, dan sekitarnya",
    relatedProductSlug: "abu-batu",
    sections: [
      {
        heading: "Pengertian Abu Batu dalam Industri Material",
        paragraphs: [
          "Abu batu adalah partikel batuan berukuran halus yang dihasilkan dari proses pengolahan dan pemecahan batu alam di fasilitas stone crusher. Berbeda dengan pasir sungai biasa yang butirannya cenderung membulat akibat gesekan air alami, butiran abu batu memiliki bentuk yang bersudut tajam (angular) dengan kerapatan partikel yang tinggi.",
          "Karakteristik butiran bersudut ini membuat abu batu memiliki daya ikat yang sangat kuat saat dicampur dengan semen atau aspal panas, sehingga banyak dipilih oleh praktisi konstruksi dan produsen beton precast di Kutai Kartanegara.",
        ],
      },
      {
        heading: "Fungsi Utama Abu Batu di Lapangan",
        paragraphs: [
          "1. Bahan Baku Paving Block & Batako: Abu batu menjadi bahan kunci dalam memproduksi paving block press berdensitas tinggi karena dapat mengisi pori-pori mikro adukan, meminimalkan penyerapan air, dan meningkatkan kuat tekan paving.",
          "2. Lapis Perata Pemasangan Paving: Saat memasang conblock atau paving jalan perumahan di Tenggarong, Kutai Kartanegara, dan sekitarnya, abu batu sering digunakan sebagai lapisan perata (bedding sand) karena lebih stabil dan tidak mudah tergerus air hujan dibanding pasir halus biasa.",
          "3. Campuran Aspal Hotmix (Asphaltic Concrete): Abu batu berfungsi sebagai filler agregat halus yang mengunci agregat kasar batu split dengan aspal bitumen.",
        ],
      },
      {
        heading: "Pengadaan Abu Batu di Tenggarong, Kutai Kartanegara, dan Sekitarnya",
        paragraphs: [
          "Untuk kebutuhan proyek jalan, pabrik batako, maupun pekerjaan halaman rumah tinggal, PT. Bumi Kutai Perkasa beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara, menyediakan pasokan abu batu dengan pengiriman armada dump truck langsung ke lokasi proyek di Tenggarong, Kutai Kartanegara, dan sekitarnya.",
          "Untuk kepastian takaran tonase serta jadwal ritase armada, calon pembeli dapat langsung berkonsultasi dengan tim operasional PT. Bumi Kutai Perkasa via WhatsApp.",
        ],
      },
    ],
  },
  {
    title:
      "Fungsi Batu Pondasi dalam Pembangunan dan Cara Memilihnya di Tenggarong, Kutai Kartanegara, dan Sekitarnya",
    slug: "fungsi-dan-cara-memilih-batu-pondasi",
    excerpt:
      "Panduan memilih batu pondasi padat dan tahan lapuk untuk menopang struktur bangunan pada kontur tanah Kalimantan Timur.",
    publishedDate: "02 Februari 2025",
    readTime: "5 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Material Pondasi",
    image: "/pondasi_tronjolan.jpg",
    imageAlt:
      "Pemasangan batu pondasi lajur untuk bangunan rumah di Tenggarong, Kutai Kartanegara, dan sekitarnya",
    relatedProductSlug: "batu-pondasi",
    sections: [
      {
        heading: "Peran Krusial Batu Pondasi pada Bangunan",
        paragraphs: [
          "Pondasi merupakan elemen terbawah yang bertugas meneruskan seluruh beban gravitasi bangunan ke lapisan tanah keras di bawahnya. Pemilihan batu pondasi berkualitas menjadi syarat mutlak untuk mencegah terjadinya penurunan setempat (differential settlement) yang dapat menyebabkan dinding rumah retak struktural.",
          "Wilayah Kutai Kartanegara dan tepian aliran Sungai Mahakam seringkali memiliki tantangan tersendiri pada daya dukung tanah. Di sinilah peran batu pondasi yang kokoh, tidak berpori rapuh, dan tahan terhadap kelembapan air tanah menjadi sangat penting.",
        ],
      },
      {
        heading: "Kriteria Batu Pondasi yang Berkualitas",
        paragraphs: [
          "• Bobot dan Kepadatan: Batu yang baik terasa berat dan padat saat diangkat. Hindari batuan yang terasa ringan atau berpori besar seperti batu apung.",
          "• Suara Benturan: Ketika dua bongkahan batu dipukulkan, batu keras alami akan menghasilkan suara dentingan nyaring, bukan suara redam atau rapuh.",
          "• Kebersihan Batuan: Batuan pondasi sebaiknya minim dari lapisan tanah liat atau padas lumpur tebal yang menempel, agar adukan semen pasir dapat melekat sempurna pada bidang batuan.",
        ],
      },
      {
        heading: "Layanan Pengiriman ke Titik Proyek",
        paragraphs: [
          "PT. Bumi Kutai Perkasa melayani pengiriman batu pondasi untuk pembangunan rumah tinggal, ruko, dinding penahan tanah (turap), hingga saluran drainase di wilayah Tenggarong, Kutai Kartanegara, dan sekitarnya. Pengiriman dilakukan menggunakan armada dump truck dengan penjadwalan yang transparan.",
        ],
      },
    ],
  },
  {
    title:
      "Perbedaan Batu Split Ukuran 1x1, 2x1, 2x3, 3x5, 5x7, dan 7x10 untuk Proyek Konstruksi",
    slug: "perbedaan-ukuran-batu-split",
    excerpt:
      "Memahami perbedaan fungsi fraksi batu split ukuran 1x1, 2x1, 2x3, 3x5, 5x7, dan 7x10 untuk beton mutu tinggi, cor struktur, pondasi jalan, dan stabilisasi tanah lunak di Tenggarong, Kutai Kartanegara, dan sekitarnya.",
    publishedDate: "20 Januari 2025",
    readTime: "6 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Batu Split",
    image: "/koral_23.jpg",
    imageAlt:
      "Pecahan fraksi batu split berbagai ukuran di stockpile PT. Bumi Kutai Perkasa",
    relatedProductSlug: "batu-split-2x1",
    relatedProductSlugs: [
      "batu-split-1x1",
      "batu-split-2x1",
      "batu-split-2x3",
      "batu-split-3x5",
      "batu-split-5x7",
      "batu-split-7x10",
    ],
    sections: [
      {
        heading: "Mengapa Ukuran Fraksi Batu Split Berbeda-beda?",
        paragraphs: [
          "Dalam dunia konstruksi sipil, batu split dipecah dan disortir menjadi berbagai ukuran fraksi agar dapat memenuhi spesifikasi teknis pekerjaan yang berbeda. Setiap fraksi memiliki peruntukan khusus, mulai dari campuran adukan cor yang membutuhkan butiran presisi hingga perkerasan dasar jalan yang menuntut batuan berukuran kasar.",
          "Mengetahui perbedaan ukuran ini akan membantu Anda memesan material yang tepat, menghemat anggaran proyek, serta memastikan ketahanan struktur yang dibangun.",
        ],
      },
      {
        heading: "Rincian Ukuran dan Penggunaannya di Lapangan",
        paragraphs: [
          "1. Batu Split Ukuran 1x1 (±1 cm): Fraksi terkecil untuk campuran beton mutu tinggi (K-300 ke atas). Ukurannya yang sangat kecil mampu mengisi celah antara tulangan rapat tanpa rongga, sangat cocok untuk kolom praktis tipis, panel precast, dan pekerjaan beton presisi.",
          "2. Batu Split Ukuran 2x1 (1 – 2 cm): Fraksi ini biasa digunakan untuk campuran pengecoran beton bertulang seperti kolom praktis, balok gantung, dan plat dak lantai bertingkat. Ukurannya yang proporsional mampu mengisi celah sempit di antara anyaman besi tulangan tanpa menimbulkan rongga keropos.",
          "3. Batu Split Ukuran 2x3 (2 – 3 cm): Ukuran yang sangat umum untuk pengecoran beton jalan (rigid pavement), pondasi telapak cakar ayam, serta lantai gudang berbeban berat.",
          "4. Batu Split Ukuran 3x5 (3 – 5 cm): Cocok untuk lapis pondasi bawah jalan dan lapisan drainase resapan air agar tidak terjadi genangan yang merusak permukaan aspal atau beton.",
          "5. Batu Split Ukuran 5x7 (5 – 7 cm): Fraksi kasar yang dirancang khusus untuk stabilisasi lahan lunak/rawa dan bantalan jalan akses sebelum dilapisi agregat halus. Daya interlocking-nya yang tinggi mencegah amblas.",
          "6. Batu Split Ukuran 7x10 (7 – 10 cm): Fraksi paling kasar. Digunakan sebagai lapis dasar perkerasan jalan berat di area tambang, pengurugan pondasi dalam, dan stabilisasi lereng longsor. Daya tahan beban dinamisnya sangat tinggi.",
        ],
      },
      {
        heading: "Konsultasi Kebutuhan Batu Split di Kutai Kartanegara",
        paragraphs: [
          "PT. Bumi Kutai Perkasa yang beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, menyediakan seluruh varian ukuran Batu Split 1x1, 2x1, 2x3, 3x5, 5x7, dan 7x10 untuk menyuplai proyek konstruksi di Tenggarong, Kutai Kartanegara, dan sekitarnya. Hubungi kami untuk memastikan ketersediaan ukuran dan estimasi tonase armada.",
        ],
      },
    ],
  },
  {
    title:
      "Mengenal Batu Tronjolan: Karakteristik dan Penggunaannya dalam Konstruksi",
    slug: "apa-itu-batu-tronjolan",
    excerpt:
      "Mengenal batuan bongkahan besar untuk pengisian bronjong kawat, penahan abrasi tebing sungai, dan stabilisasi pondasi dasar.",
    publishedDate: "10 Januari 2025",
    readTime: "4 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Material Pondasi",
    image: "/pondasi_tronjolan.jpg",
    imageAlt:
      "Material batu tronjolan bongkahan besar untuk pekerjaan bronjong kawat",
    relatedProductSlug: "batu-tronjolan",
    sections: [
      {
        heading: "Karakteristik Fisik Batu Tronjolan",
        paragraphs: [
          "Batu tronjolan adalah batuan alam dengan bongkahan berdimensi relatif besar yang belum dipecah menjadi fraksi agregat halus. Karena bobot per bongkahannya yang berat dan strukturnya yang padat, batuan ini memiliki ketahanan tinggi terhadap pergeseran tanah maupun dorongan arus air.",
          "Material ini menjadi andalan utama pada pekerjaan rekayasa geoteknik di tepi sungai Mahakam dan lereng bukit di wilayah Kutai Kartanegara yang rawan mengalami erosi dan longsor.",
        ],
      },
      {
        heading: "Aplikasi Utama Batu Tronjolan",
        paragraphs: [
          "• Pengisian Bronjong Kawat (Gabion): Ditata rapi di dalam kotak kawat galvanis untuk membentuk dinding penahan tebing sungai atau lereng bukit jalan poros.",
          "• Stabilisasi Dasar Tanah Rawa: Digunakan sebagai lapisan 'cerucuk batu' untuk menekan tanah lunak sebelum dilakukan penimbunan agregat jalan.",
          "• Pelindung Tanggul (Rip-rap): Melindungi konstruksi jembatan dan dermaga dari hantaman arus air dan pasang surut sungai.",
        ],
      },
      {
        heading: "Pemesanan Material Tronjolan",
        paragraphs: [
          "PT. Bumi Kutai Perkasa menyediakan pasokan batu tronjolan siap kirim menggunakan armada dump truck untuk proyek infrastruktur publik maupun swasta di wilayah Tenggarong, Kutai Kartanegara, dan sekitarnya.",
        ],
      },
    ],
  },
  {
    title: "Kegunaan Batu Agregat dan Perannya dalam Campuran Konstruksi",
    slug: "kegunaan-batu-agregat",
    excerpt:
      "Peran batu agregat terukur dalam meningkatkan kekuatan tekan beton dan kestabilan lapis pondasi jalan di Kutai Kartanegara.",
    publishedDate: "05 Januari 2025",
    readTime: "5 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Material Agregat",
    image: "/agregat.jpg",
    imageAlt:
      "Material batu agregat konstruksi siap kirim untuk proyek perkerasan jalan",
    relatedProductSlug: "batu-agregat",
    sections: [
      {
        heading: "Apa Itu Batu Agregat?",
        paragraphs: [
          "Batu agregat adalah material batuan pecah yang disaring dalam rentang gradasi ukuran tertentu. Dalam struktur beton bertulang, agregat menempati sekitar 70% hingga 80% dari total volume beton, sehingga kualitas batu agregat secara langsung menentukan kekuatan mekanis struktur.",
          "Agregat yang baik harus memiliki bentuk butiran yang seragam, bebas dari kotoran lempung berlebih, dan tidak mudah lapuk saat mengalami perubahan suhu dan kelembapan.",
        ],
      },
      {
        heading: "Fungsi Agregat pada Lapisan Jalan dan Bangunan",
        paragraphs: [
          "Selain sebagai bahan adukan beton cor, batu agregat merupakan material utama pada lapisan Base Course (pondasi atas) dan Sub-base (pondasi bawah) jalan. Saat dipadatkan dengan mesin gilas (roller), susunan batuan agregat akan saling mengunci dan menyebarkan beban roda kendaraan berat secara merata.",
        ],
      },
      {
        heading: "Pengadaan Agregat Terpercaya di Kutai Kartanegara",
        paragraphs: [
          "PT. Bumi Kutai Perkasa yang beroperasi di Dusun Jambe, Desa Sanggulan, Kec. Sebulu, siap memenuhi kebutuhan batu agregat untuk proyek Anda di wilayah Tenggarong, Kutai Kartanegara, dan sekitarnya. Konsultasikan jadwal pengiriman dan estimasi tonase langsung via WhatsApp.",
        ],
      },
    ],
  },
  {
    title:
      "Mengenal Jenis Ukuran Batu Split untuk Cor Beton dan Standar Kualitasnya",
    slug: "mengenal-batu-split-cor-beton",
    excerpt:
      "Panduan lengkap memilih ukuran batu split yang tepat untuk cor dak, kolom beton bertulang, dan perkerasan jalan beton di Tenggarong, Kutai Kartanegara, dan sekitarnya.",
    publishedDate: "20 Februari 2025",
    readTime: "5 menit baca",
    author: "Tim Teknis PT. Bumi Kutai Perkasa",
    category: "Material Agregat",
    image: "/koral_21.jpg",
    imageAlt:
      "Material batu split cor beton berkualitas di stockpile PT. Bumi Kutai Perkasa",
    relatedProductSlug: "batu-split",
    relatedProductSlugs: ["batu-split", "batu-agregat", "abu-batu"],
    sections: [
      {
        heading: "Pengertian dan Peran Batu Split dalam Pengecoran Beton",
        paragraphs: [
          "Batu split (batu pecah mesin) merupakan agregat kasar yang dihasilkan dari proses penghancuran batu gunung menggunakan mesin stone crusher berstandar konstruksi. Dalam campuran beton bertulang, batu split menempati porsi volume terbesar dan berfungsi sebagai kerangka struktural utama yang memikul beban tekan fisik bangunan.",
          "Kualitas batu split yang prima dicirikan dengan bentuk pecahan yang bersudut tajam (angular), bersih dari lapisan lempung berlebih, serta memiliki densitas padat dan tidak mudah retak atau remuk.",
        ],
      },
      {
        heading: "Ukuran Fraksi Batu Split dan Peruntukannya di Lapangan",
        paragraphs: [
          "1. Fraksi Split 1x2 (10-20 mm): Merupakan ukuran paling populer untuk pengecoran plat lantai, dak beton, balok gantung, balok sloof, serta kolom praktis rumah tinggal dan gedung bertingkat.",
          "2. Fraksi Split 2x3 (20-30 mm): Sangat ideal diaplikasikan pada pekerjaan beton massa (mass concrete), pondasi telapak/cakar ayam, dan perkerasan kaku jalan lingkungan (rigid pavement).",
          "3. Fraksi Split 3x5 (30-50 mm): Diperuntukkan bagi bantalan jalan akses berat, pengisi dasar perkerasan jalan, dan konstruksi drainase dasar.",
        ],
      },
      {
        heading:
          "Pasokan Batu Split Berkualitas & Legalitas Resmi di Kutai Kartanegara",
        paragraphs: [
          "Untuk menjamin mutu struktur bangunan Anda di Tenggarong, Kutai Kartanegara, dan sekitarnya, PT. Bumi Kutai Perkasa menyediakan pasokan batu split teruji dari stockpile Dusun Jambe, Desa Sanggulan, Kec. Sebulu. Pengiriman ditangani langsung armada dump truck dengan perhitungan ritase yang transparan dan tertib administrasi, siap menerbitkan Faktur Pajak resmi (PPN) untuk kebutuhan perusahaan Anda.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articlesData.map((a) => a.slug);
}
