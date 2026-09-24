import vinext from "vinext";
import { defineConfig } from "vite";

// Render build: no Cloudflare, Sites, or ChatGPT-hosting bindings are used.
// vinext only supplies the Next-compatible build and server output.
export default defineConfig({
  plugins: [vinext()],
});
