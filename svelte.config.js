import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
// import node from '@sveltejs/adapter-node';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					components: path.resolve('./src/components'),
					utils: path.resolve('./src/utils'),
					icons: path.resolve('./src/icons')
				}
			}
		}
	}
};

export default config;
