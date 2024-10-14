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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-400": "#F6443C",
        "secondary-400": "#48AAEF",
        "secondary-500": "#299CEC",
        "gray-50": "#F7F7F7",
        "gray-100": "#EEE",
        "gray-400": "#ACACAC",
        "gray-500": "#8B8B8B",
        "gray-800": "#333",
        "gray-900": "#131313",
        "gray-300": "#D1D1D1",
        "gray-600": "#646464",
        "gray-700": "#515151",
        "success-100": "#6CE9A6",
        "error-100": "#FECDCA",
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        neuehaasMedium: ['var(--font-neuehaas-medium)'],
        neuehaasLight: ['var(--font-neuehaas-ligh)'],
        "neue-medium": ["Neue Haas Display Medium", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
