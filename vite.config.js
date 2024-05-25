import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { AngularCompilerPlugin } from '@ngtools/webpack';
import path from 'path';

export default defineConfig({
  plugins: [
    createVuePlugin(), // Используем Vue плагин для аналогичной работы
    AngularCompilerPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      mainPath: path.resolve(__dirname, './src/main.ts')
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.ts'),
      output: {
        file: path.resolve(__dirname, 'dist/app.js'),
        format: 'es',
        name: 'App'
      }
    }
  }
});
