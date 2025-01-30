import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import vitePluginSingleSpa from "vite-plugin-single-spa";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig(({mode}) => {
  // for simultaneous running development, you need disable HMR.
  const isDevSpa = mode === 'development-spa';

  return ({
    plugins: [react(), TanStackRouterVite(), vitePluginSingleSpa({
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
    server: {
      hmr: !isDevSpa
    }
  })
})
