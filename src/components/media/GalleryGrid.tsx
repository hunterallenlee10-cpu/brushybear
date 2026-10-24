"use client";

import { useState } from "react";
import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import type { GalleryItem } from "@/data/gallery";

type Option = { value: string; label: string };

/** Filter real jobs by service and city. Shown only when there are jobs. */
export function GalleryGrid({ items, services, cities }: { items: GalleryItem[]; services: Option[]; cities: Option[] }) {
  const [service, setService] = useState("all");
  const [city, setCity] = useState("all");
  const shown = items.filter((i) => (service === "all" || i.service === service) && (city === "all" || i.city === city));
  const select = "min-h-12 rounded-full border-2 border-forest bg-white px-4 font-bold text-forest";
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 font-bold">
          Service
          <select className={select} value={service} onChange={(e) => setService(e.target.value)}>
            <option value="all">All services</option>
            {services.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 font-bold">
          City
          <select className={select} value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="all">All cities</option>
            {cities.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p aria-live="polite" className="mt-4 text-sm font-semibold text-charcoal-soft">
        Showing {shown.length} of {items.length} jobs
      </p>
      <ul className="mt-6 grid gap-10 md:grid-cols-2">
        {shown.map((item) => (
          <li key={item.id}>
            <BeforeAfterSlider item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
