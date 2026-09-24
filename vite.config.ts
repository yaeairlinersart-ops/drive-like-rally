import vinext from "vinext";
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

// Render build: no Cloudflare, Sites, or ChatGPT-hosting bindings are used.
// vinext only supplies the Next-compatible build and server output.
export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
      config: { main: "./worker/index.ts", compatibility_flags: ["nodejs_compat"] },
    }),
  ],
});
