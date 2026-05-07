"use client";

import { useRef } from "react";

const items = [
  { emoji: "", name: "Baby Clothing", qty: "50+", label: "Items", tag: "Popular" },
  { emoji: "", name: "Car Seats", qty: "8", label: "Available", featured: true },
  { emoji: "", name: "Bassinets & Cots", qty: "12", label: "In Stock" },
  { emoji: "", name: "Feeding Items", qty: "30+", label: "Items" },
  { emoji: "", name: "Breast Pumps", qty: "6", label: "Available" },
  { emoji: "", name: "Baby Carriers", qty: "15", label: "In Stock" },
  { emoji: "", name: "Blankets", qty: "25+", label: "Items" },
  { emoji: "", name: "Bath Items", qty: "20", label: "Available" },
  { emoji: "", name: "Books & Toys", qty: "40+", label: "Items" },
  { emoji: "", name: "Maternity Wear", qty: "35", label: "Items" },
];

export default function ItemsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = 340;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="stock" className="py-24 bg-[#FFF8F0] overflow-hidden">
      <div className="px-6 md:px-16 mb-12 flex items-end justify-between">
        <div>
          <span className="inline-block bg-[#FFD166] text-[#2C1810] text-[10px] font-extrabold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-5">
            Browse Items
          </span>
          <h2 className="font-['var(--font-fredoka)'] text-[clamp(1.8rem,4vw,3rem)] text-[#2C1810] mb-3">
            Items in Stock
          </h2>
          <p className="text-[#8C6B5A] font-semibold max-w-[500px]">
            All items are gently used and lovingly maintained. Check availability before visiting.
          </p>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border-2 border-[#F4645C]/30 bg-white text-[#F4645C] flex items-center justify-center transition-all hover:bg-[#F4645C] hover:text-white hover:border-[#F4645C]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border-2 border-[#F4645C]/30 bg-white text-[#F4645C] flex items-center justify-center transition-all hover:bg-[#F4645C] hover:text-white hover:border-[#F4645C]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 px-6 md:px-16 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[280px] rounded-[32px] p-9 text-center transition-all hover:scale-[1.03] ${
              item.featured
                ? "w-[320px] bg-[#F4645C] text-white border-2 border-transparent"
                : "bg-white border-2 border-transparent hover:border-[#FF8A84] shadow-[0_8px_32px_rgba(44,24,16,0.07)]"
            }`}
          >
            <span className="text-5xl block mb-5">{item.emoji}</span>
            <div
              className={`text-[10px] font-extrabold tracking-[0.15em] uppercase mb-2 ${
                item.featured ? "text-white/75" : "text-[#8C6B5A]"
              }`}
            >
              {item.label}
            </div>
            <div
              className={`font-['var(--font-fredoka)'] text-xl mb-2 ${
                item.featured ? "text-white" : "text-[#2C1810]"
              }`}
            >
              {item.name}
            </div>
            <div
              className={`font-['var(--font-fredoka)'] text-3xl ${
                item.featured ? "text-[#FFD166]" : "text-[#F4645C]"
              }`}
            >
              {item.qty}
            </div>
            {item.tag && (
              <span
                className={`inline-block mt-4 text-[9px] font-extrabold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full ${
                  item.featured ? "bg-white/25 text-white" : "bg-[#FFD166] text-[#2C1810]"
                }`}
              >
                {item.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
