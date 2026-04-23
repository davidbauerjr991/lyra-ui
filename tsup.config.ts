import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  loader: {
    ".svg": "dataurl",
  },
  // Copy the CSS tokens file to dist
  onSuccess: "cp -r src/styles dist/styles",
});
