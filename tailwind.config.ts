import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/images/header-bg.jpg')",
        'web-service': "url('/images/web-services-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-secondary-fade': 'linear-gradient(to bottom, rgb(var(--color-secondary)), rgba(var(--color-secondary), 0.7), rgba(var(--color-secondary), 0.4), white)',
      },
      colors: {
        primary: '#D4AA70',
        secondary: "#000000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
