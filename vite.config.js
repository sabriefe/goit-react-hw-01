import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// <https://vitejs.dev/config/>
export default defineConfig({
  base: "/goit-react-hw-01/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rolldownOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
