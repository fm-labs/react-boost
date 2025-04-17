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
      fileName: 'react-boost-bootstrap',
    },
    rollupOptions: {
      external: [
        'react',
        //'react/jsx-runtime',
        'react-bootstrap',
      ],
      output: {
        globals: {
          react: 'React',
          //'react/jsx-runtime': 'jsxRuntime',
          'react-bootstrap': 'ReactBootstrap',
        },
      },
    },
  },
})
