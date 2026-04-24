import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-8 bg-[var(--color-bg)] border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-1.5 text-[12px] text-text-secondary">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight size={11} className="text-muted/40" />
              {item.href ? (
                <Link href={item.href} className="hover:text-accent transition-colors">{item.label}</Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
