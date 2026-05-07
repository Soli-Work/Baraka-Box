"use client";

const canDonate = [
  "Baby clothing (0-2 years) in good condition",
  "Maternity wear that's still stylish",
  "Feeding equipment (bottles, sterilizers, breast pumps)",
  "Bassinets, cots, and cribs",
  "Car seats with no damage or recalls",
  "Strollers and baby carriers",
  "Bath items and changing mats",
  "Books, toys, and educational items",
];

const cantAccept = [
  "Expired car seats (check the date!)",
  "Broken or damaged items",
  "Stained or heavily worn clothing",
  "Items with missing parts",
  "Recalled products",
  "Formula or opened food items",
];

export default function DonateInfoSection() {
  return (
    <section className="px-6 md:px-16 py-24 bg-[#FFF3E0] grid md:grid-cols-2 gap-12 items-start">
      {/* What We Accept */}
      <div>
        <h3 className="font-['var(--font-fredoka)'] text-2xl md:text-3xl text-[#F4645C] mb-7">
          What We Accept
        </h3>
        <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_16px_rgba(44,24,16,0.06)]">
          <ul className="flex flex-col gap-4">
            {canDonate.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-[#3D2314] leading-[1.5]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A8E6CF] text-[#6B3F2A] flex items-center justify-center text-[11px] font-black mt-0.5">
                  
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What We Can't Accept */}
      <div>
        <h3 className="font-['var(--font-fredoka)'] text-2xl md:text-3xl text-[#6B3F2A] mb-7">
          What We Can&apos;t Accept
        </h3>
        <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_16px_rgba(44,24,16,0.06)]">
          <ul className="flex flex-col gap-4">
            {cantAccept.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-[#3D2314] leading-[1.5]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFE0DD] text-[#D94840] flex items-center justify-center text-[11px] font-black mt-0.5">
                  
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
