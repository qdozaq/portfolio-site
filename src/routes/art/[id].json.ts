import type { RequestHandler } from '@sveltejs/kit';
export const get: RequestHandler = async ({ params, url }) => {
	const isAlbum = url.searchParams.get('album') === 'true';
	const { id } = params;

	const res = await fetch(`https://api.imgur.com/3/${isAlbum ? 'album' : 'image'}/${id}`, {
		headers: { Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}` }
	});

	if (res.status !== 200) {
		return {
			status: 500,
			body: { error: "Can't fetch images" }
		};
	}

	const { data } = await res.json();
	return {
		body: data
	};
};
