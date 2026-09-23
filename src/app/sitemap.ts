import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { productsData } from "@/data/products";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    {
      // Homepage — konten produk berubah, priority tertinggi
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      // Katalog produk — halaman transaksional utama
      url: `${baseUrl}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      // Blog listing — konten aktif bertambah
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      // Kontak — halaman transaksional, jarang berubah
      url: `${baseUrl}/kontak`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      // Tentang kami — profil perusahaan, sangat jarang berubah
      url: `${baseUrl}/tentang-kami`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
  ];

  // Halaman produk individual — paling transaksional setelah homepage
  const productPages = productsData.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Halaman artikel blog — konten informatif
  const articlePages = articlesData.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...productPages, ...articlePages];
}
