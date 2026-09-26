import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#08090F",
        panel: "#10131C",
        panel2: "#171B28",
        line: "#2A3040",
        cyan: "#62F5C1",
        coral: "#FF7A90",
        sky: "#8EA7FF",
        violet: "#8EA7FF",
        emerald: "#FF7A90",
        warm: "#F5F0E6",
        ink: "#EEF2F7",
        inkdim: "#9BA5B7",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
