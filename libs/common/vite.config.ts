import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: { // Fixes: Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'),
      '~react-tabulator': path.resolve(__dirname, 'node_modules/react-tabulator'),
    },
  },
  plugins: [react(), dts({ include: ['lib'] }), libInjectCss()],
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
      external: [
        'react',
        'react/jsx-runtime',
        'react-bootstrap',
        'react-toastify',
        'react-tabulator',
        'react-dom',
        'react-router-dom',
        'react-icons',
        'react-dropzone',
        'axios',
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react-bootstrap': 'ReactBootstrap',
          'react-toastify': 'ReactToastify',
          'react-tabulator': 'ReactTabulator',
          'react-router-dom': 'ReactRouterDOM',
          'react-dropzone': 'ReactDropzone',
          axios: 'axios',
        },
      },
    },
  },
})
