import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
        commonjs(),
        tailwindcss(),
    ],
    base: '/public/build/',
    optimizeDeps: {
        include: [
            //   'bootstrap', // Add bootstrap here
        ],
    },
});
