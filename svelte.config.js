import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	runes: true,
	kit: {
		adapter: adapter({
			fallback: "index.html",
			strict: true,
		})
	}
};

export default config;
