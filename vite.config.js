import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/styles/_variables";
        @import "@/app/styles/_fonts";
        @import "@/app/styles/_mixins";
        `,
      },
    },
  },
  server: {
    port: 3000,
  },
});
