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
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        neuehaasMedium: ['var(--font-neuehaas-medium)'],
        neuehaasLight: ['var(--font-neuehaas-ligh)'],
      }
    },
  },
  plugins: [],
};
export default config;
