"use client";

export default function MissionSection() {
  return (
    <section id="about" className="bg-[#F4645C] px-6 md:px-16 py-24 text-center relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 54C16.8 54 6 43.2 6 30S16.8 6 30 6s24 10.8 24 24-10.8 24-24 24z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {["", "", "", ""].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-15 animate-[float_5s_ease-in-out_infinite]"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <span className="inline-block bg-white/20 text-white text-[10px] font-extrabold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-6">
          Our Mission
        </span>
        <h2 className="font-['var(--font-fredoka)'] text-[clamp(2rem,5vw,3.5rem)] text-white mb-6 leading-[1.1]">
          Blessing Families, One Box at a Time
        </h2>
        <p className="text-[1rem] leading-[1.9] text-white/85 max-w-[680px] mx-auto font-semibold">
          Baraka Box is a community initiative housed under Emmanuel Baptist Church, Nairobi. 
          We believe every family deserves support during the beautiful journey of parenthood. 
          Through donations of gently-used baby items, we create a cycle of blessing that keeps 
          on giving.
        </p>
      </div>
    </section>
  );
}
