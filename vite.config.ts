import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { InlineConfig } from 'vitest/node'

export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			enabled: true,
			exclude: [
				'dist',
				'node_modules',
				'public',
				'tests',
			],
			include: ['src'],
			provider: 'v8',
			reporter: [
				'html',
				'lcov',
				'text',
			],
		},
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.ts'],
		transformMode: { web: [/\.(jsx|tsx)$/] },
	},
} as UserConfig & { test: InlineConfig })
