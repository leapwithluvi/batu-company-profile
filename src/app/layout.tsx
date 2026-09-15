import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site-config";
import { safeJsonLdReplacer } from "@/lib/json-ld";

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
    default: `${siteConfig.name} | Supplier Batu & Material Konstruksi Tenggarong`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "jual batu tenggarong",
    "batu tenggarong",
    "supplier batu tenggarong",
    "jual batu split tenggarong",
    "batu split tenggarong",
    "jual batu koral tenggarong",
    "batu koral tenggarong",
    "supplier material tenggarong",
    "jual batu kutai kartanegara",
    "supplier batu kutai kartanegara",
    "material konstruksi tenggarong",
    "jual abu batu tenggarong",
    "batu pondasi tenggarong",
    "batu tronjolan tenggarong",
    "batu agregat tenggarong",
  ],
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
    title: `${siteConfig.name} - Supplier Batu di Tenggarong, Kutai Kartanegara & Sekitarnya`,
    description: siteConfig.description,
    images: [
      {
        url: "/logo/full_logo.png",
        width: 1024,
        height: 1024,
        alt: `${siteConfig.name} - Supplier Batu & Material Konstruksi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Supplier Batu di Tenggarong, Kutai Kartanegara & Sekitarnya`,
    description: siteConfig.description,
    images: [
      {
        url: "/logo/full_logo.png",
        width: 1024,
        height: 1024,
        alt: `${siteConfig.name} - Supplier Batu & Material Konstruksi`,
      },
    ],
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
    "@type": "LocalBusiness",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/logo.png`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.operationalLocation.village,
      addressLocality: siteConfig.operationalLocation.regency,
      addressRegion: siteConfig.operationalLocation.province,
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
        ],
        opens: "07:30",
        closes: "17:30",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Kalimantan Timur`,
    })),
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
