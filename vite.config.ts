import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Vercel deployment target.
// TanStack Start emits a .vercel/output bundle that Vercel auto-detects —
// no vercel.json required for default usage.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "vercel",
    }),
    viteReact(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
