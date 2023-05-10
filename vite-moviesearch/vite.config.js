import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: `${__dirname}/src` }],
    // .jsx 파일에 대한 MIME 유형 추가
    mainFields: ["browser", "module", "main"],
    extensions: [".mjs", ".js", ".jsx", ".json"],
    server: {
      mimeTypes: {
        "application/javascript": ["js", "mjs", "jsx"],
      },
    },
  },
});
