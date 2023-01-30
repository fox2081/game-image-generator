import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${pathSrc}/`,
    },
  },
  base: './',
  plugins: [vue(), unocss()],
});
