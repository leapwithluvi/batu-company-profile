"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Video,
  ImageIcon,
  PlayCircle,
} from "lucide-react";

interface ProductMediaViewerProps {
  image: string;
  imageAlt: string;
  category: string;
  productName: string;
  videoUrl?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    if (url.includes("youtube.com/embed/")) {
      return url;
    }
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("shorts/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export function ProductMediaViewer({
  image,
  imageAlt,
  category,
  productName,
  videoUrl,
}: ProductMediaViewerProps) {
  const [activeTab, setActiveTab] = useState<"image" | "video">("image");
  const youtubeEmbedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;

  return (
    <div className="border border-[#E2E8F0] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-2 sticky top-24 rounded-xl shadow-xs">
      {/* Tab Switcher jika ada video */}
      {videoUrl && (
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] dark:bg-[#202529] rounded-lg mb-2 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("image")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md transition-all font-semibold ${
              activeTab === "image"
                ? "bg-white dark:bg-[#181C1F] text-[#171A1C] dark:text-white shadow-xs"
                : "text-[#6B7378] dark:text-[#A5ADB2] hover:text-[#171A1C] dark:hover:text-white"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Foto Material</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md transition-all font-semibold ${
              activeTab === "video"
                ? "bg-[#EA580C] text-white dark:bg-white dark:text-[#111416] shadow-xs"
                : "text-[#6B7378] dark:text-[#A5ADB2] hover:text-[#171A1C] dark:hover:text-white"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Fisik</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </button>
        </div>
      )}

      {/* Media Display Area */}
      <div className="relative aspect-4/3 w-full bg-[#F1F5F9] dark:bg-[#202529] overflow-hidden rounded-lg">
        {activeTab === "image" || !videoUrl ? (
          <>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#111416]/90 text-white text-xs font-mono uppercase px-2.5 py-1 rounded-sm">
              {category}
            </div>
            {videoUrl && (
              <button
                type="button"
                onClick={() => setActiveTab("video")}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#111416]/85 hover:bg-[#111416] text-white text-xs font-mono px-3 py-1.5 rounded-md backdrop-blur-xs transition-colors shadow-sm"
              >
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span>Lihat Video Material</span>
              </button>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            {youtubeEmbedUrl ? (
              <iframe
                src={`${youtubeEmbedUrl}?rel=0&autoplay=1`}
                title={`Video ${productName}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                controls
                playsInline
                autoPlay
                muted
                loop
                poster={image}
                className="w-full h-full object-contain bg-black"
                key={videoUrl}
              >
                <source
                  src={
                    videoUrl?.startsWith("/video/") && !videoUrl.startsWith("/videos/")
                      ? videoUrl.replace("/video/", "/videos/")
                      : videoUrl
                  }
                  type="video/mp4"
                />
                <source
                  src={
                    videoUrl?.startsWith("/video/") && !videoUrl.startsWith("/videos/")
                      ? videoUrl.replace("/video/", "/videos/")
                      : videoUrl
                  }
                />
                Browser Anda tidak mendukung pemutaran video langsung.
              </video>
            )}
          </div>
        )}
      </div>

      {/* Info Garansi & Operasional */}
      <div className="p-4 bg-[#F1F5F9] dark:bg-[#202529] border-t border-[#E2E8F0] dark:border-[#30363A] mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#3F4549] dark:text-[#C2C8CC] font-mono rounded-md">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
          <span>PT. Bumi Kutai Perkasa &bull; Dusun Jambe, Desa Sanggulan, Kec. Sebulu</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
          <span>Melayani Kutai Kartanegara &amp; Sekitarnya</span>
        </span>
      </div>
    </div>
  );
}
