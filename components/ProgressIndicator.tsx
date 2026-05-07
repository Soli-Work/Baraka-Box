"use client";

interface ProgressIndicatorProps {
  scrollProgress: number;
}

export default function ProgressIndicator({ scrollProgress }: ProgressIndicatorProps) {
  const dots = [0, 0.25, 0.5, 0.75];

  const getActiveIndex = () => {
    if (scrollProgress < 0.25) return 0;
    if (scrollProgress < 0.5) return 1;
    if (scrollProgress < 0.75) return 2;
    return 3;
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="fixed right-7 top-1/2 -translate-y-1/2 z-[200] flex-col gap-3 hidden md:flex">
      {dots.map((_, index) => (
        <div
          key={index}
          className={`w-2 rounded-sm bg-[#F4645C] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeIndex === index
              ? "opacity-100 h-7"
              : "opacity-20 h-2 rounded-full"
          }`}
          onClick={() => {
            window.scrollTo({
              top: (index / 4) * document.body.scrollHeight * 0.45,
              behavior: "smooth",
            });
          }}
        />
      ))}
    </div>
  );
}
