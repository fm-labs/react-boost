import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // Fixes: Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      '~react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'),
    },
  },
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    minify: false,
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(`${__dirname}`, 'lib/main.ts'),
      name: 'ReactBoost',
      // the proper extensions will be added
      fileName: 'react-boost-common',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'react-icons', 'axios'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          axios: 'axios',
        },
      },
    },
  },
})
