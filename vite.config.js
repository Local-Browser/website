import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                // Add more inputs if needed
            },
        },
    },
    css: {
    // Optional: Configure CSS modules or preprocessors if needed
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
