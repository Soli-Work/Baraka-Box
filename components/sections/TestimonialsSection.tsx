"use client";

const testimonials = [
  {
    text: "When I found out I was pregnant, I was worried about affording everything. Baraka Box blessed me with a crib, clothes, and so much more. My baby boy has everything he needs!",
    author: "Jane W., First-time Mom",
  },
  {
    text: "As my daughter outgrew her items, I was happy to return them to Baraka Box. It feels good knowing another family will benefit from them.",
    author: "Mary K., Returning Donor",
  },
  {
    text: "The team at Emmanuel Baptist made me feel so welcome. No judgment, just love and support. God bless Baraka Box!",
    author: "Sarah M., Recipient",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 md:px-16 py-24 bg-[#FFF8F0]">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#D4AEED] text-[#2C1810] text-[10px] font-extrabold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-5">
          Testimonials
        </span>
        <h2 className="font-['var(--font-fredoka)'] text-[clamp(1.8rem,4vw,2.8rem)] text-[#2C1810]">
          Stories of Blessing
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="bg-white rounded-[32px] p-10 shadow-[0_4px_24px_rgba(44,24,16,0.06)] relative overflow-hidden"
          >
            <span className="font-['var(--font-fredoka)'] text-8xl text-[#FFD166] opacity-30 absolute -top-2 left-4 leading-none">
              &quot;
            </span>
            <p className="font-['var(--font-caveat)'] text-lg leading-[1.85] text-[#3D2314] font-semibold relative z-10">
              {testimonial.text}
            </p>
            <div className="mt-6 text-[11px] font-extrabold tracking-[0.1em] uppercase text-[#8C6B5A]">
              {testimonial.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
