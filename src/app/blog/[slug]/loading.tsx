import React from "react";

export default function BlogDetailLoading() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Top Breadcrumb Bar Skeleton */}
      <div className="bg-white dark:bg-[#181C1F] border-b border-[#D9DCDD] dark:border-[#30363A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="w-48 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
        </div>
      </div>

      <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Article Header Skeleton */}
        <div className="space-y-3">
          <div className="w-32 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="w-4/5 h-8 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="w-1/2 h-8 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="pt-3 flex gap-4">
            <div className="w-24 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-24 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-20 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="aspect-16/10 w-full bg-[#EEF0F0] dark:bg-[#202529] rounded-xs border border-[#D9DCDD] dark:border-[#30363A] animate-pulse" />

        {/* Article Body Skeleton */}
        <div className="bg-white dark:bg-[#181C1F] border border-[#D9DCDD] dark:border-[#30363A] p-6 sm:p-10 lg:p-12 space-y-6 rounded-xs">
          <div className="border-l-4 border-[#D9DCDD] dark:border-[#30363A] pl-4 py-2 space-y-2">
            <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-3/4 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          </div>

          <div className="space-y-3 pt-4">
            <div className="w-1/3 h-6 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-4/5 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          </div>

          <div className="space-y-3 pt-4">
            <div className="w-2/5 h-6 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            <div className="w-3/4 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
