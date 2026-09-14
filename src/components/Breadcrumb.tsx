import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs py-3 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 list-none m-0 p-0">
        <li>
          <Link
            href="/"
            className="hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors text-[#6B7378] dark:text-[#A5ADB2] font-medium"
          >
            Beranda
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-[#B8BEC0] dark:text-[#41494E]">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#1F4E5F] dark:hover:text-[#6F9AAA] transition-colors text-[#6B7378] dark:text-[#A5ADB2] font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-[#171A1C] dark:text-[#F1F3F4] font-semibold truncate max-w-[220px] sm:max-w-none inline-block align-bottom"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
