import path from "path"
import react from "@vitejs/plugin-react"
import {defineConfig, loadEnv} from "vite"
import vitePluginSingleSpa from "vite-plugin-single-spa";
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'

export default defineConfig(({mode}) => {
  // for simultaneous running development, you need disable HMR.
  const isDevSpa = mode === 'development-spa';

  const env = loadEnv(mode, process.cwd(), "");

  return ({
    server: {
      hmr: !isDevSpa,
      port: Number(env.VITE_PORT),
    },
    preview: {
      port: Number(env.VITE_PORT),
    },
    plugins: [react(), TanStackRouterVite(),
      vitePluginSingleSpa({
      type: 'mife',
      projectId: 'mf-application1',
      serverPort: Number(env.VITE_PORT),
      spaEntryPoints: 'src/spa.tsx'
    })
    ],
    build: {
      rollupOptions: {
        external: ['react', 'react-dom/client'],
        preserveEntrySignatures: 'strict',
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
})
