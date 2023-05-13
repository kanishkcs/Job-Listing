import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to the desired port number
    open: true, // Set this to true to automatically open the browser
    host: '192.168.1.8', // Set this to your local IP address to access the dev server from other devices on your network
  },
});

