import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/react-responsive')) {
            return 'ui-vendor'
          }
        },
      },
    },
    cssMinify: true,
  },
})
