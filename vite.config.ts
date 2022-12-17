import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const PATH_SRC = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '~/': `${PATH_SRC}/`,
    },
  },
  plugins: [react()],
});
