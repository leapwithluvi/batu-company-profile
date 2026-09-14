import React from "react";

export default function ProdukLoading() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Top Header Skeleton */}
      <div className="bg-[#171A1C] border-b border-[#30363A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="w-32 h-4 bg-[#30363A] rounded-xs animate-pulse" />
          <div className="w-48 h-3 bg-[#30363A] rounded-xs animate-pulse" />
          <div className="w-72 sm:w-96 h-8 bg-[#30363A] rounded-xs animate-pulse" />
          <div className="w-full max-w-xl h-4 bg-[#30363A]/70 rounded-xs animate-pulse" />
        </div>
      </div>

      {/* Catalog Content Skeleton */}
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Nav Skeleton */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D9DCDD] dark:border-[#30363A]">
          <div className="w-36 h-5 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-7 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            ))}
          </div>
        </div>

        {/* Section Heading Skeleton */}
        <div className="space-y-2 border-l-4 border-[#D9DCDD] dark:border-[#30363A] pl-4">
          <div className="w-48 h-6 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="w-64 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
        </div>

        {/* Product Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div
              key={idx}
              className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] rounded-xs overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 bg-[#EEF0F0] dark:bg-[#202529] animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="w-20 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                  <div className="w-3/4 h-5 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                  <div className="w-full h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                  <div className="w-5/6 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-[#D9DCDD]/60 dark:border-[#30363A] space-y-2">
                <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse mt-3" />
                <div className="w-full h-8 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
