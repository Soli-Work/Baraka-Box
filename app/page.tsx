"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroOverlays from "@/components/HeroOverlays";
import ProgressIndicator from "@/components/ProgressIndicator";
import ScrollHint from "@/components/ScrollHint";
import Loader from "@/components/Loader";
import MainContent from "@/components/MainContent";

// Dynamically import Scene3D to avoid SSR issues with Three.js
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    
    // Calculate progress for the 3D section (first 450vh)
    const heroHeight = clientHeight * 4.5;
    const progress = Math.min(scrollTop / heroHeight, 1);
    setScrollProgress(progress);

    // Hide scroll hint after scrolling
    if (scrollTop > 50) {
      setShowScrollHint(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {/* 3D Scene Background */}
      <Scene3D scrollProgress={scrollProgress} />

      {/* Navigation */}
      <Navigation />

      {/* Scroll container for 3D section */}
      <div className="relative z-[1] h-[450vh]" id="scroll-container">
        {/* Hero Overlays */}
        <HeroOverlays scrollProgress={scrollProgress} />
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator scrollProgress={scrollProgress} />

      {/* Scroll Hint */}
      <ScrollHint visible={showScrollHint && !isLoading && scrollProgress < 0.1} />

      {/* Main Content Sections */}
      <MainContent />
    </>
  );
}
