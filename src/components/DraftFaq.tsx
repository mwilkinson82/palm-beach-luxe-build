import { Link } from "react-router-dom";
import type { FaqItem } from "@/lib/site";

type RelatedLink = { href: string; label: string };

/**
 * Visible FAQ for crawlers and readers.
 * Marked as draft until AJ Hoover approves the wording.
 */
export function DraftFaq({
  items,
  headingId,
  sectionId = "faq",
  related,
}: {
  items: FaqItem[];
  headingId: string;
  sectionId?: string;
  related?: RelatedLink[];
}) {
  return (
    <section
      id={sectionId}
      data-copy-status="draft"
      aria-labelledby={headingId}
      className="relative bg-background text-foreground border-t border-accent/20 py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent mb-6">
          Draft for review
        </p>
        <h2
          id={headingId}
          className="font-display text-4xl md:text-5xl font-light text-primary leading-tight mb-6"
        >
          Questions
        </h2>
        <p className="font-sans font-light text-sm text-muted-foreground mb-12 max-w-2xl">
          Draft copy for AJ Hoover's review. These answers use the office, license, and service details already published on this site.
        </p>
        <dl className="space-y-10">
          {items.map((item) => (
            <div key={item.question} className="border-t border-accent/20 pt-8">
              <dt className="font-display text-2xl md:text-3xl font-light text-primary leading-snug">
                {item.question}
              </dt>
              <dd className="mt-4 font-sans font-light text-base leading-relaxed text-foreground/80">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
        {related && related.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[11px] uppercase tracking-[0.22em]">
            {related.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-primary hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
