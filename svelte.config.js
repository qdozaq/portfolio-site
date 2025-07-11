import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess({
		scss: {
			prependData: '@import "src/sass/vars.scss";'
		}
	}),
	kit: {
		adapter: adapter(),
		alias: {
			components: './src/components',
			utils: './src/utils',
			icons: './src/icons'
		}
	}
};

export default config;
