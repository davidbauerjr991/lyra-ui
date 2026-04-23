/** @type {import('tailwindcss').Config} */
import lyraPreset from "./src/tailwind-preset.ts";

export default {
  presets: [lyraPreset],
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")],
};
