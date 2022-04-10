import type { RequestHandler } from '@sveltejs/kit';
export const get: RequestHandler = async ({ params }) => {
	const [v1, v2] = params.id.split('/');
	const isAlbum = v1 === 'a';
	const id = isAlbum ? v2 : v1;

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
		body: { data }
	};
};
