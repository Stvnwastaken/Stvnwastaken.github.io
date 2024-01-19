import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      userPolling: true,
    },
  },
  base: "./",
});
