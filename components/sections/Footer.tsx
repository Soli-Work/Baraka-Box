"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2C1810] px-6 md:px-16 pt-20 pb-10 text-white/70">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="font-['var(--font-fredoka)'] text-3xl text-[#F4645C] mb-3">
            Baraka Box
          </div>
          <div className="font-['var(--font-caveat)'] text-lg text-white/60 mb-6">
            share the good stuff!
          </div>
          <div>
            <div className="text-[11px] font-extrabold tracking-[0.1em] uppercase text-white/30 mb-2">
              Contact
            </div>
            <div className="text-sm font-semibold mb-1">Muthoni India</div>
            <a href="tel:0726499182" className="text-[#FFD166] no-underline font-bold">
              0726 499 182
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/30 mb-5">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3 list-none">
            {[
              { href: "#stock", label: "Items in Stock" },
              { href: "#about", label: "About Baraka Box" },
              { href: "#forms", label: "Donate Items" },
              { href: "#forms", label: "Receive Items" },
              { href: "#forms", label: "Return Items" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-white/60 no-underline transition-colors hover:text-[#FF8A84]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* What We Accept */}
        <div>
          <h4 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/30 mb-5">
            What We Accept
          </h4>
          <ul className="flex flex-col gap-3 list-none">
            {[
              "Baby Clothing (0-2 yrs)",
              "Maternity Wear",
              "Feeding Equipment",
              "Toys & Books",
              "Bath & Hygiene",
            ].map((item) => (
              <li key={item}>
                <span className="text-sm font-semibold text-white/60">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-white/30 font-semibold">
          2026 Baraka Box - All blessings reserved
        </div>
        <div className="font-['var(--font-caveat)'] text-sm text-white/40">
          Housed under Emmanuel Baptist Church, Nairobi
        </div>
      </div>
    </footer>
  );
}
