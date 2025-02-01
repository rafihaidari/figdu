import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(async () => {
    const { viteStaticCopy } = await import('vite-plugin-static-copy');

    return {
        plugins: [
            react(),
            viteSingleFile(),
            viteStaticCopy({
                targets: [
                    {
                        src: 'manifest.json',
                        dest: '',
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    };
});