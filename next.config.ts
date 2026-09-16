import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Content Security Policy yang dikonfigurasi secara ketat sesuai resource aplikasi
const contentSecurityPolicy = [
  "default-src 'self'",
  // Development: React membutuhkan 'unsafe-eval' untuk debugging (stack traces, source maps).
  // Production: 'unsafe-eval' dihapus — CSP tetap ketat.
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  // Pembatasan sumber gambar hanya ke origin sendiri, data URIs, dan domain Unsplash terverifikasi
  "img-src 'self' data: https://images.unsplash.com https://i.ytimg.com",
  "font-src 'self' data:",
  "connect-src 'self'",
  // YouTube embed untuk ProductMediaViewer (iframe)
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  // Video self-hosted dari folder /videos/
  "media-src 'self'",
  // Perlindungan modern anti-clickjacking
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // HSTS HANYA diaktifkan pada lingkungan HTTPS production, TIDAK dipaksakan pada localhost
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false, // Menghapus header X-Powered-By: Next.js untuk information hiding
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
