export interface LegalDocument {
  id: string;
  name: string;
  category:
    | "Legalitas Badan Usaha"
    | "Perizinan Operasional"
    | "Administrasi Perpajakan";
  issuer: string;
  documentNumber?: string; // Nomor resmi dokumen (misal: NIB, NPWP, No. Akta Notaris)
  description: string;
  status: "Tersedia & Terverifikasi" | "Tersedia untuk Verifikasi Proyek";
  fileUrl?: string; // Path ke file dokumen (misal: /documents/nib.pdf atau URL scan)
  verificationNote: string;
}

export interface OperationalGalleryItem {
  id: string;
  title: string;
  category:
    | "Stockpile"
    | "Armada Dump Truck"
    | "Fraksi Material"
    | "Pengiriman";
  description: string;
  imageUrl: string;
  location: string;
}

export interface CompanyData {
  officialName: string;
  shortName: string;
  businessType: string;
  operationalLocation: {
    village: string;
    subdistrict?: string;
    regency: string;
    province: string;
    country: string;
    fullAddress: string;
  };
  serviceAreaFocus: string;
  serviceAreas: string[];
  contact: {
    phoneDisplay: string;
    whatsappNumber: string;
    operatingHours: string;
  };
  legalSummary: string;
  legalDocuments: LegalDocument[];
  operationalGallery: OperationalGalleryItem[];
}

export const companyData: CompanyData = {
  officialName: "PT. Bumi Kutai Perkasa",
  shortName: "Bumi Kutai Perkasa",
  businessType:
    "Perseroan Terbatas (PT) Perdagangan & Distribusi Material Konstruksi",
  operationalLocation: {
    village: "Dusun Jambe",
    subdistrict: "Kec. Sebulu",
    regency: "Kutai Kartanegara",
    province: "Kalimantan Timur",
    country: "Indonesia",
    fullAddress:
      "Dusun Jambe, Kec. Sebulu, Kutai Kartanegara, Kalimantan Timur, Indonesia 75511",
  },
  serviceAreaFocus: "Tenggarong & Wilayah Kutai Kartanegara Sekitarnya",
  serviceAreas: [
    "Tenggarong Kota",
    "Tenggarong Seberang",
    "Loa Janan",
    "Loa Kulu",
    "Sebulu",
    "Anggana",
    "Samarinda & Sekitarnya",
  ],
  contact: {
    phoneDisplay: "+62 831-5224-8722",
    whatsappNumber: "6281234567890",
    operatingHours: "Senin – Sabtu: 08.00 – 17.00 WITA",
  },
  legalSummary:
    "PT. Bumi Kutai Perkasa merupakan badan hukum resmi yang terdaftar dan memenuhi kewajiban perizinan usaha sesuai ketentuan perundang-undangan Republik Indonesia. Salinan dokumen legalitas disediakan bagi mitra kontraktor, instansi, maupun pengembang untuk keperluan audit perikatan, kontrak pengadaan, dan penerbitan faktur.",
  legalDocuments: [
    {
      id: "nib",
      name: "Nomor Induk Berusaha (NIB)",
      category: "Legalitas Badan Usaha",
      issuer:
        "Pemerintah Republik Indonesia (Kementerian Investasi / BKPM melalui OSS)",
      // Masukkan nomor NIB resmi Anda di sini (contoh: "0220008123456") agar langsung tampil di web
      documentNumber: undefined,
      // Masukkan path PDF di sini (contoh: "/documents/nib.pdf") jika ingin ada tombol "Lihat Dokumen PDF"
      fileUrl: undefined,
      description:
        "Legalitas identitas pelaku usaha dan bukti registrasi operasional resmi untuk aktivitas perdagangan material batu alam dan agregat.",
      status: "Tersedia & Terverifikasi",
      verificationNote:
        "Dokumen resmi aktif. Salinan berkas dapat dibuka langsung atau diverifikasi via tim administrasi.",
    },
    {
      id: "akta-pendirian",
      name: "Akta Pendirian Perseroan Terbatas",
      category: "Legalitas Badan Usaha",
      issuer: "Notaris Resmi & Pengesahan Kemenkumham RI",
      documentNumber: undefined, // Contoh: "AHU-0012345.AH.01.01.TAHUN 2023"
      fileUrl: undefined,
      description:
        "Akta autentik pendirian badan hukum PT. Bumi Kutai Perkasa lengkap dengan Surat Keputusan (SK) Pengesahan dari Kementerian Hukum dan HAM RI.",
      status: "Tersedia & Terverifikasi",
      verificationNote:
        "Terdokumentasi lengkap dan sah secara hukum sebagai dasar perikatan bisnis formal.",
    },
    {
      id: "npwp-badan",
      name: "NPWP Badan Usaha & Administrasi Fiskal",
      category: "Administrasi Perpajakan",
      issuer: "Direktorat Jenderal Pajak (Kemenkeu RI)",
      documentNumber: undefined, // Contoh: "00.000.000.0-000.000"
      fileUrl: undefined,
      description:
        "Kepatuhan administrasi perpajakan badan usaha untuk penerbitan faktur pajak dan transaksi pengadaan material konstruksi.",
      status: "Tersedia & Terverifikasi",
      verificationNote:
        "NPWP aktif terdaftar pada kantor pelayanan pajak wilayah Kalimantan Timur.",
    },
    {
      id: "izin-operasional",
      name: "Izin Operasional Depot & Distribusi",
      category: "Perizinan Operasional",
      issuer: "Pemerintah Daerah / Instansi Terkait",
      documentNumber: undefined,
      fileUrl: undefined,
      description:
        "Izin pendukung operasional fasilitas stockpile serta armada logistik pengantaran material ke wilayah Kutai Kartanegara.",
      status: "Tersedia untuk Verifikasi Proyek",
      verificationNote:
        "Dapat disertakan pada berkas tender / verifikasi teknis administrasi proyek lapangan.",
    },
  ],
  operationalGallery: [
    {
      id: "stockpile-jambe",
      title: "Stockpile & Area Penimbunan Material",
      category: "Stockpile",
      description:
        "Penampungan material batu belah, abu batu, dan agregat dengan pemisahan fraksi rapi untuk menjaga mutu sebelum dimuat ke armada.",
      imageUrl:
        "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80",
      location: "Dusun Jambe, Kec. Sebulu, Kutai Kartanegara",
    },
    {
      id: "armada-loading",
      title: "Pemuatan Dump Truck & Pengawasan Kubikasi",
      category: "Armada Dump Truck",
      description:
        "Proses pemuatan material ke bak dump truck dengan inspeksi volume kubikasi bersama mandor sebelum armada diberangkatkan.",
      imageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      location: "Fasilitas Operasional Dusun Jambe, Kec. Sebulu",
    },
    {
      id: "batu-pondasi-quarry",
      title: "Material Batu Belah Gunung Padat",
      category: "Fraksi Material",
      description:
        "Batu belah gunung keras dengan bidang rekat tajam, ideal untuk pondasi cakar ayam, retaining wall, dan turap bibir sungai.",
      imageUrl:
        "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
      location: "Stockpile Fraksi Batu Pondasi",
    },
    {
      id: "pengiriman-proyek",
      title: "Distribusi ke Titik Pekerjaan Lapangan",
      category: "Pengiriman",
      description:
        "Armada dump truck Colt Diesel dan Fuso siap melintasi rute Tenggarong dan kawasan sekitar Kutai Kartanegara secara terjadwal.",
      imageUrl:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
      location: "Rute Distribusi Tenggarong & Sekitarnya",
    },
  ],
};
