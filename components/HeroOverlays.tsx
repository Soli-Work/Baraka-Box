"use client";

import { useEffect, useState } from "react";

interface OverlayProps {
  scrollProgress: number;
}

export default function HeroOverlays({ scrollProgress }: OverlayProps) {
  const [activeOverlay, setActiveOverlay] = useState(0);

  useEffect(() => {
    if (scrollProgress < 0.25) setActiveOverlay(0);
    else if (scrollProgress < 0.5) setActiveOverlay(1);
    else if (scrollProgress < 0.75) setActiveOverlay(2);
    else setActiveOverlay(3);
  }, [scrollProgress]);

  const overlays = [
    {
      tag: "Emmanuel Baptist Church",
      title: (
        <>
          Share the
          <br />
          <em className="text-[#F4645C] not-italic">Good Stuff!</em>
        </>
      ),
      body: "Babies grow fast. The things you once needed can be just what another family needs right now. Baraka Box is a shared space of blessing for Nairobi families.",
      cta: "Learn More",
      ctaHref: "#about",
      align: "left",
    },
    {
      tag: "Community Driven",
      title: (
        <>
          Give, Receive,
          <br />
          <em className="text-[#F4645C] not-italic">Return</em>
        </>
      ),
      body: "A beautiful cycle of generosity. Donate what you no longer need, receive what you do, and return when your little one outgrows it.",
      cta: "Get Involved",
      ctaHref: "#forms",
      align: "right",
    },
    {
      tag: "Items Available",
      title: (
        <>
          Strollers, Cribs,
          <br />
          <em className="text-[#F4645C] not-italic">& More</em>
        </>
      ),
      body: "From baby clothes to car seats, feeding supplies to toys - our inventory is filled with gently-used items ready for their next home.",
      cta: "View Items",
      ctaHref: "#stock",
      align: "center",
    },
    {
      tag: "Join the Blessing",
      title: (
        <>
          Every Gift
          <br />
          <em className="text-[#F4645C] not-italic">Matters</em>
        </>
      ),
      body: "Your donation could be exactly what a new parent needs. Together, we make parenthood a little easier for everyone.",
      cta: "Donate Now",
      ctaHref: "#forms",
      align: "left",
    },
  ];

  return (
    <>
      {overlays.map((overlay, index) => {
        const isActive = activeOverlay === index;
        const alignClass =
          overlay.align === "right"
            ? "items-end"
            : overlay.align === "center"
            ? "items-center"
            : "items-start";
        const textAlign =
          overlay.align === "right"
            ? "text-right"
            : overlay.align === "center"
            ? "text-center"
            : "text-left";

        return (
          <div
            key={index}
            className={`fixed inset-0 z-10 flex flex-col justify-center pointer-events-none transition-opacity duration-700 ${alignClass} ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`px-6 md:px-[8%] max-w-[640px] ${textAlign}`}>
              <span className="inline-block bg-[#FFD166] text-[#2C1810] text-[10px] font-extrabold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5">
                {overlay.tag}
              </span>
              <h1 className="font-['var(--font-fredoka)'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] text-[#2C1810] mb-5">
                {overlay.title}
              </h1>
              <p
                className={`text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.85] text-[#8C6B5A] max-w-[420px] font-semibold ${
                  overlay.align === "right"
                    ? "ml-auto"
                    : overlay.align === "center"
                    ? "mx-auto"
                    : ""
                }`}
              >
                {overlay.body}
              </p>
              <a
                href={overlay.ctaHref}
                className="inline-block mt-9 bg-[#F4645C] text-white px-8 py-3.5 rounded-full text-[12px] font-extrabold tracking-[0.12em] uppercase no-underline pointer-events-auto transition-all hover:bg-[#D94840] hover:-translate-y-0.5"
              >
                {overlay.cta}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
