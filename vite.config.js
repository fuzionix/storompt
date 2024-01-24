import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import path from "path"
import vue from '@vitejs/plugin-vue'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
