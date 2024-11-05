/** @type {import('tailwindcss').Config} */3
import plugin from 'tailwindcss/plugin';

const rotateZ = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-z-0': {
      transform: 'rotateZ(0deg)',
    },
    '.rotate-z-45': {
      transform: 'rotateZ(45deg)',
    },
    '.rotateOP-z-45': {
      transform: 'rotateZ(-45deg)',
    },
    '.rotate-z-90': {
      transform: 'rotateZ(90deg)',
    },
    '.rotate-z-180': {
      transform: 'rotateZ(180deg)',
    },
  });
});
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [rotateZ], 
};
