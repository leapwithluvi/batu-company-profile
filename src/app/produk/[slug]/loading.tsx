import React from "react";

export default function ProductDetailLoading() {
  return (
    <div className="bg-[#F7F7F5] dark:bg-[#111416] min-h-screen">
      {/* Breadcrumb Bar Skeleton */}
      <div className="bg-white dark:bg-[#181C1F] border-b border-[#D9DCDD] dark:border-[#30363A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="w-48 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
        </div>
      </div>

      {/* Main Product Layout Skeleton */}
      <div className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Image Column Skeleton */}
          <div className="lg:col-span-6">
            <div className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-2 rounded-xs">
              <div className="aspect-4/3 w-full bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="p-4 bg-[#EEF0F0]/60 dark:bg-[#202529]/60 mt-2 flex justify-between rounded-xs">
                <div className="w-36 h-4 bg-[#D9DCDD] dark:bg-[#30363A] rounded-xs animate-pulse" />
                <div className="w-36 h-4 bg-[#D9DCDD] dark:bg-[#30363A] rounded-xs animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content Column Skeleton */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="w-24 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-3/4 h-8 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-full h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-5/6 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            </div>

            {/* Uses Box Skeleton */}
            <div className="border border-[#D9DCDD] dark:border-[#30363A] bg-white dark:bg-[#181C1F] p-5 rounded-xs space-y-3">
              <div className="w-40 h-4 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-full h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-4/5 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
              <div className="w-3/4 h-3 bg-[#EEF0F0] dark:bg-[#202529] rounded-xs animate-pulse" />
            </div>

            {/* WhatsApp CTA Box Skeleton */}
            <div className="bg-[#171A1C] p-6 border border-[#30363A] space-y-4 rounded-xs">
              <div className="w-32 h-3 bg-[#30363A] rounded-xs animate-pulse" />
              <div className="w-64 h-6 bg-[#30363A] rounded-xs animate-pulse" />
              <div className="w-full h-11 bg-[#30363A] rounded-xs animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
