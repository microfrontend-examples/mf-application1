import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  plugins: [react(), vitePluginSingleSpa({
    type: 'mife',
    projectId: 'mf-application1',
    serverPort: 4175,
    spaEntryPoints: 'src/spa.tsx',
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
