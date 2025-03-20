import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        commonjs(),
    ],
    base: '/public/',
    optimizeDeps: {
        include: [
          'bootstrap', // Add bootstrap here
        ],
      },
});
