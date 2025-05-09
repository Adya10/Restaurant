import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: true,
    // Enable history API fallback for SPA routing
    historyApiFallback: true
  },
  preview: {
    port: 3000,
    host: true
  },
  // Remove base config as it might interfere with routing
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});