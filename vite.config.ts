import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 상대 경로로 빌드해서 GitHub Pages(https://taegun41.github.io/Portopolio/)처럼
  // 하위 경로에 올려도, Vercel처럼 루트에 올려도 그대로 동작하게 합니다.
  base: './',
})
