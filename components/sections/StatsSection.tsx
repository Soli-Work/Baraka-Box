"use client";

const stats = [
  { icon: "", num: "500+", label: "Items Donated" },
  { icon: "", num: "200+", label: "Families Blessed" },
  { icon: "", num: "150+", label: "Items Returned" },
  { icon: "", num: "3", label: "Years Running" },
];

export default function StatsSection() {
  return (
    <section className="px-6 md:px-16 py-24 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#FFF3E0]">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-[32px] px-6 py-10 text-center shadow-[0_4px_24px_rgba(244,100,92,0.08)] transition-transform hover:-translate-y-1.5"
        >
          <div className="text-3xl mb-4">{stat.icon}</div>
          <div className="font-['var(--font-fredoka)'] text-4xl text-[#F4645C] leading-none">
            {stat.num}
          </div>
          <div className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#8C6B5A] mt-3">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
