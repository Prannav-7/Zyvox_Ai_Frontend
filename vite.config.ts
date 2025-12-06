import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  // Ensure environment variables are available
  define: {
    'process.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(
      process.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_bW92ZWQtbW9uaXRvci04My5jbGVyay5hY2NvdW50cy5kZXYk'
    ),
    'process.env.VITE_API_URL': JSON.stringify(
      process.env.VITE_API_URL || 'https://zyvox-ai-backend.onrender.com/api'
    ),
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'clerk-react': ['@clerk/clerk-react'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
});
