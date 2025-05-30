import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'sass';

export default defineConfig({
  plugins: [vue()],
  base: '/', // Replace 'your-repo-name' with your actual repo name
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redirect /api requests to the backend
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
