import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#e0e5ec',
        'light-surface': '#e0e5ec',
        'light-text': '#2c3e50',
        'light-primary': '#4a90e2',
        'light-secondary': '#6c757d',
        'dark-bg': '#1a1d2e',
        'dark-surface': '#1f2235',
        'dark-text': '#e4e9f0',
        'dark-primary': '#4a90e2',
        'dark-secondary': '#8b92a8',
      },
      boxShadow: {
        'neo-light': '8px 8px 16px #b8bdc6, -8px -8px 16px #ffffff',
        'neo-light-inset': 'inset 8px 8px 16px #b8bdc6, inset -8px -8px 16px #ffffff',
        'neo-dark': '8px 8px 16px #0f1118, -8px -8px 16px #25293c',
        'neo-dark-inset': 'inset 8px 8px 16px #0f1118, inset -8px -8px 16px #25293c',
      },
    },
  },
  plugins: [],
};
export default config;
