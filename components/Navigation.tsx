"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-6 md:px-12 py-4 md:py-5 flex justify-between items-center bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#F4645C]/10">
      <div className="font-['var(--font-fredoka)'] text-lg md:text-xl tracking-wide">
        <span className="text-[#F4645C] font-bold">Baraka</span>
        <span className="text-[#2C1810] font-bold"> Box</span>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {[
          { href: "#stock", label: "Items" },
          { href: "#about", label: "About" },
          { href: "#forms", label: "Get Involved" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#8C6B5A] no-underline transition-colors hover:text-[#F4645C]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#forms"
        className="bg-[#F4645C] text-white px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-extrabold tracking-[0.12em] uppercase no-underline transition-all hover:bg-[#D94840] hover:scale-[1.03] whitespace-nowrap"
      >
        Donate / Get Items
      </a>
    </nav>
  );
}
