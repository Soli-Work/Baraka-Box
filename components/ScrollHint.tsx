"use client";

interface ScrollHintProps {
  visible: boolean;
}

export default function ScrollHint({ visible }: ScrollHintProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] flex flex-col items-center gap-2">
      <div className="w-px h-10 bg-gradient-to-b from-[#F4645C] to-transparent opacity-35 animate-[pulse_2s_ease-in-out_infinite]" />
      <span className="text-[9px] tracking-[0.2em] uppercase text-[#8C6B5A] opacity-60 font-bold">
        Scroll to explore
      </span>
    </div>
  );
}
