import React from "react";

export default function BlogLoading() {
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

      {/* Main Content Skeleton */}
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Skeleton */}
        <div className="space-y-4">
          <div className="w-28 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] grid grid-cols-1 md:grid-cols-12 gap-0 rounded-xs overflow-hidden">
            <div className="aspect-16/10 md:aspect-auto md:h-72 md:col-span-5 bg-[#EEF0F0] dark:bg-[#202529] animate-pulse" />
            <div className="p-6 sm:p-8 md:col-span-7 space-y-4">
              <div className="w-48 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-3/4 h-7 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-full h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-5/6 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="pt-4 border-t border-[#D9DCDD]/60 dark:border-[#30363A] flex justify-between">
                <div className="w-24 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                <div className="w-28 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles Skeleton */}
        <div className="space-y-6">
          <div className="w-40 h-6 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] rounded-xs overflow-hidden space-y-4 pb-5"
              >
                <div className="aspect-16/10 bg-[#EEF0F0] dark:bg-[#202529] animate-pulse" />
                <div className="px-5 space-y-2">
                  <div className="w-32 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                  <div className="w-full h-5 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                  <div className="w-4/5 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
