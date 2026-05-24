import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentLayoutProps {
  children: React.ReactNode;
  breadcrumb?: { label: string; href: string }[];
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}

export default function ContentLayout({
  children,
  breadcrumb,
  prev,
  next,
}: ContentLayoutProps) {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-8 text-[12px]">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-700">/</span>}
                <Link
                  href={crumb.href}
                  className={i === breadcrumb.length - 1
                    ? "text-slate-500 cursor-default"
                    : "text-slate-500 hover:text-cyan-400 transition-colors"
                  }
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* Content */}
        <article>{children}</article>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <div className="mt-16 pt-8 border-t border-white/[0.07] flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={prev.href}
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>{prev.label}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={next.href}
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
              >
                <span>{next.label}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </div>
  );
}
