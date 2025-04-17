import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mdx } from "@cyco130/vite-plugin-mdx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
});
