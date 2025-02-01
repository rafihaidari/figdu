import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        viteSingleFile(),
        viteStaticCopy({
            targets: [
                {
                    src: 'manifest.json',
                    dest: ''
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
