import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      outputDir: 'types',
    }),
  ],
  build: {
    lib: {
      fileName: 'index',
      entry: './src/index.ts',
      formats: ['es'],
    },
    polyfillModulePreload: false,
    modulePreload: false,
    sourcemap: false,
    minify: false,
    copyPublicDir: false,
    cssCodeSplit: true,
    outDir: 'lib',
    rollupOptions: {
      external: ['vue', 'vitepress'],
    },
  },
})
