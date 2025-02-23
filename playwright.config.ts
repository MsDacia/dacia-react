import { defineConfig } from '@playwright/test';

export default defineConfig({
	reporter: 'html',
	testDir: './tests',
	use: {
		headless: false,
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
	},
});
