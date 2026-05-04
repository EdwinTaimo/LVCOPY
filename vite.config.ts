import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/LVCOPY/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    target: "esnext",
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]"
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    },
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"]
  }
}))