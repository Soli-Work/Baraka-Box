import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        warm: "#FFF3E0",
        coral: "#F4645C",
        "coral-lt": "#FF8A84",
        "coral-dk": "#D94840",
        sunshine: "#FFD166",
        "sunshine-dk": "#F0BC4A",
        mint: "#A8E6CF",
        sky: "#B8DFFE",
        lilac: "#D4AEED",
        peach: "#FFB997",
        charcoal: "#2C1810",
        brown: "#6B3F2A",
        text: "#3D2314",
        muted: "#8C6B5A",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "cursive"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        DEFAULT: "20px",
        lg: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
