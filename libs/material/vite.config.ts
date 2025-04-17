import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
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
      entry: resolve(`${__dirname}`, 'lib/index.ts'),
      name: 'ReactBoost',
      // the proper extensions will be added
      fileName: 'react-boost-material',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        // '@mui/material',
        // '@mui/system',
        // '@mui/x-date-picker',
        // '@mui/icons-material',
        // 'react-dom',
        // 'react-router-dom',
        // 'moment'
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          // '@mui/material': 'MaterialUI',
          // '@mui/system': 'MaterialUISystem',
          // '@mui/icons-material': 'MaterialUIIcons',
          // 'react-dom': 'ReactDOM',
          // 'react-router-dom': 'ReactRouterDOM',
          // moment: 'moment',
        },
      },
    },
  },
})
