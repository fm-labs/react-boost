import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [react(), dts({ include: ['lib'] })],
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
        //'react/jsx-runtime',
        // '@mui/material',
        // '@mui/system',
        // '@mui/x-date-picker',
        // '@mui/icons-material',
        'react-dom',
        'react-router-dom',
        'moment',
      ],
      output: {
        globals: {
          react: 'React',
          // 'react/jsx-runtime': 'jsxRuntime',
          // '@mui/material': 'MaterialUI',
          // '@mui/system': 'MaterialUISystem',
          // '@mui/icons-material': 'MaterialUIIcons',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          moment: 'moment',
        },
      },
    },
  },
})
