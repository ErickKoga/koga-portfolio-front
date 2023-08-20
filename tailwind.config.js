/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      waves: "url('../../public/waves.svg')",
    },
    boxShadow: {
      base: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
  },
};
export const plugins = [
  plugin(function ({ addUtilities }) {
    addUtilities({
      ".vertical-writing-lr": { writingMode: "vertical-lr" },
      ".orientation-upright": { textOrientation: "upright" },
    });
  }),
];
