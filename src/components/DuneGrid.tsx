"use client";
import type { DashboardItem } from "@/data/dashboards";
import { gmorphoDashboards as DEFAULT_DASHBOARDS } from "@/data/dashboards";

export function DuneGrid({ items = DEFAULT_DASHBOARDS }: { items?: DashboardItem[] }) {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-10">
      {items.map((item) => (
        <article key={item.title} className="p-2 md:p-4 w-full max-w-[1200px]">
          <div className="w-full overflow-hidden rounded-md">
            <iframe
              src={item.embedUrl}
              height={item.height ?? 460}
              className="w-full"
              title={item.title}
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </section>
  );
}


