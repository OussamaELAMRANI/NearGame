import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const resolve = (file: any) => path.resolve(__dirname, file)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^@\/(.*)/,
                replacement: resolve('./assets/app/$1')
            }
        ]
    },
    plugins: [react()],
    root: './assets/app',
    base: '/assets/',
    build: {
        manifest: true,
        assetsDir: '',
        outDir: '../../public/assets/',
        rollupOptions: {
            output: {
                manualChunks: undefined
            },
            input: {
                'main.tsx': './assets/app/main.tsx'
            }
        },
    }
})
