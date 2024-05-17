import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react()
   ],
   resolve: {},
   server: {
      port: 314,
      host: true
   },
   build: {
      rollupOptions: {
         output: {
            hashCharacters: 'hex',
            assetFileNames: '_ghchart/[name].[hash].[ext]',
            chunkFileNames: '_ghchart/[name].[hash].js',
            entryFileNames: '_ghchart/[name].[hash].js',
            manualChunks: {
               vendor_highlight: ['highlight.js', 'highlight.js/lib/languages/javascript.js'],
               vendor_react: ['react-dom']
            }
         }
      }
   },
   css: {
      preprocessorOptions: {
         less: {
            javascriptEnabled: true
         }
      }
   }
})
