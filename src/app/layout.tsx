import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";
import { seoKeywords200 } from "@/data/seo-keywords";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url.startsWith("http")
      ? siteConfig.url
      : `https://${siteConfig.url}`,
  ),
  title: {
    default: `Batu Koral Tenggarong Berkualitas - ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Supplier batu koral terpercaya di Tenggarong, Kutai Kartanegara. PT. Bumi Kutai Perkasa menyediakan batu koral, batu split, abu batu, batu agregat, batu tronjolan untuk kebutuhan proyek konstruksi — pengiriman dump truck ke seluruh Kukar & Kaltim.",
  keywords: seoKeywords200,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Batu Koral Tenggarong & Material Konstruksi - ${siteConfig.name}`,
    description:
      "Supplier batu koral terpercaya di Tenggarong, Kutai Kartanegara. Menyediakan batu koral, batu split, abu batu, batu agregat, dan batu tronjolan untuk proyek konstruksi. PT. Bumi Kutai Perkasa.",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `Batu Koral Tenggarong - ${siteConfig.name} · Supplier Resmi Kutai Kartanegara`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Batu Koral Tenggarong & Material Konstruksi - ${siteConfig.name}`,
    description:
      "Supplier batu koral terpercaya di Tenggarong, Kutai Kartanegara. Menyediakan batu koral, batu split, abu batu, batu agregat untuk proyek konstruksi.",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `Batu Koral Tenggarong - ${siteConfig.name}`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// Anti-FOUC script: dieksekusi sebelum browser render apapun
// Mendukung mode light (default), dark, dan system
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = false;
    if (stored === 'dark') {
      isDark = true;
    } else if (stored === 'light') {
      isDark = false;
    } else if (stored === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      // Default: Light
      isDark = false;
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    name: siteConfig.name,
    alternateName: [
      siteConfig.shortName,
      "Batu Koral Tenggarong",
      "PT Bumi Kutai Perkasa",
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/logo/full_logo.png`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "IDR",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Transfer Bank",
    hasMap: siteConfig.googleMapsUrl,
    // Geo coordinates GPS: Dusun Jambe, Desa Sanggulan, Kec. Sebulu, Kutai Kartanegara
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-0.2758",
      longitude: "117.0425",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.operationalLocation.village,
      addressLocality: siteConfig.operationalLocation.regency,
      addressRegion: siteConfig.operationalLocation.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Kalimantan Timur`,
    })),
    sameAs: [
      siteConfig.googleMapsUrl,
      `https://wa.me/${siteConfig.whatsappNumber}`,
      siteConfig.url,
    ],
    knowsAbout: [
      "Batu Koral",
      "Batu Split",
      "Abu Batu",
      "Batu Agregat",
      "Batu Tronjolan",
      "Material Konstruksi",
      "Stone Crusher",
      "Quarry Kalimantan Timur",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "Batu Koral Tenggarong",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/produk?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="id"
      className={`${sourceSans.variable} ${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: harus dieksekusi sebelum paint pertama */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdReplacer(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdReplacer(websiteSchema),
          }}
        />

        {/* google site verification */}
        <meta
          name="google-site-verification"
          content="nfPMvC3-Z6tH0Yg8ShmywxgkmfrpSbuDgS7iKH4e7uY"
        />
      </head>
      <body className="font-[family-name:var(--font-sans)] min-h-full flex flex-col antialiased bg-[#F7F7F5] dark:bg-[#111416] text-[#171A1C] dark:text-[#F1F3F4] transition-colors duration-150">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsappButton variant="floating" />
        </ThemeProvider>
      </body>
    </html>
  );
}
