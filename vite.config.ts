import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-start-project-vite-main/', // Убедитесь, что это совпадает с именем репозитория
});