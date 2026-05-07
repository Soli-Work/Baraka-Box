"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 900);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#F4645C] z-[9999] flex flex-col items-center justify-center transition-all duration-[900ms] ease-out ${
        isExiting ? "opacity-0 invisible" : ""
      }`}
    >
      {/* Floating decorative stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[
          { top: "10%", left: "8%", delay: "0s" },
          { top: "70%", left: "12%", delay: "1s" },
          { top: "20%", right: "10%", delay: "0.5s" },
          { top: "75%", right: "15%", delay: "1.5s" },
          { top: "40%", left: "5%", delay: "0.8s" },
          { top: "50%", right: "8%", delay: "1.2s" },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-35 animate-spin"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDuration: "6s",
              animationDelay: pos.delay,
            }}
          >
            {i % 2 === 0 ? "" : ""}
          </span>
        ))}
      </div>

      <div className="relative">
        <div className="font-['var(--font-fredoka)'] text-4xl md:text-5xl text-white tracking-wide mb-2">
          Baraka Box
        </div>
        <div className="font-['var(--font-caveat)'] text-lg md:text-xl text-white/80 text-center mb-12">
          share the good stuff!
        </div>
      </div>

      <div className="w-[220px] h-1.5 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <div className="mt-4 text-xs text-white/60 tracking-wider">
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  );
}
