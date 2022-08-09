/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				404: resolve(__dirname, '404.html'),
			},
		},
	},
});
