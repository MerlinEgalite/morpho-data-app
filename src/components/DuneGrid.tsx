"use client";
import type { DashboardItem } from "@/data/dashboards";
import { gmorphoDashboards as DEFAULT_DASHBOARDS } from "@/data/dashboards";

export function DuneGrid({ items = DEFAULT_DASHBOARDS }: { items?: DashboardItem[] }) {
  const mainDashboards = items.slice(0, -2);
  const inlineDashboards = items.slice(-2);

  return (
    <section className="flex flex-col items-center gap-8 md:gap-10">
      {/* Main dashboards in single column */}
      {mainDashboards.map((item) => (
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
      
      {/* Last two dashboards inline horizontally */}
      {inlineDashboards.length > 0 && (
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full max-w-[1200px]">
          {inlineDashboards.map((item) => (
            <article key={item.title} className="p-2 md:p-4 w-full md:w-1/2">
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
        </div>
      )}
    </section>
  );
}


