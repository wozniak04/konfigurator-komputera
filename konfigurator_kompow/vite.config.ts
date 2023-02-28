import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    console.log(mode)
    if (mode === 'development') {
        return {
            plugins: [react()],
            server: {
                port: 5173,
                proxy: {
                    '/ordersFiles': {
                        target: 'http://172.16.111.172:8080',
                        changeOrigin: true,
                        secure: false,
                        ws: true,
                    }
                }
            }
        }
    }
    else {
        return {
            plugins: [react()]
        }
    }
})
