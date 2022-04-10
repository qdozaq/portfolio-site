import type { RequestHandler } from '@sveltejs/kit';
export const get: RequestHandler = async () => {
	const res = await fetch('https://api.imgur.com/3/account/qdozaq/submissions/0/', {
		headers: { Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}` }
	});

	if (res.status !== 200) {
		return {
			status: 500,
			body: { error: "Can't fetch images" }
		};
	}

	const { data } = await res.json();
	const images = data.map((obj) => ({
		...obj,
		thumbnail: obj.is_album ? obj.cover : obj.id
	}));

	return {
		body: { images }
	};
};
