import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ["."],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
  // 👇 this part ensures refresh works on /register, /login, etc.
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
})
