import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: true,
      }),
    }),
    ViteAliases(),
    // ... autres plugins
  ],
});
