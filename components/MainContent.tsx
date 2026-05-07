"use client";

import MissionSection from "./sections/MissionSection";
import StatsSection from "./sections/StatsSection";
import ItemsSection from "./sections/ItemsSection";
import DonateInfoSection from "./sections/DonateInfoSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FormsSection from "./sections/FormsSection";
import Footer from "./sections/Footer";

export default function MainContent() {
  return (
    <main className="relative z-[5] bg-[#FFF8F0]">
      <MissionSection />
      <StatsSection />
      <ItemsSection />
      <DonateInfoSection />
      <TestimonialsSection />
      <FormsSection />
      <Footer />
    </main>
  );
}
