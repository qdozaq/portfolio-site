import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type {Album,Image } from './Image'
import {IMGUR_CLIENT_ID} from '$env/static/private'

export const load =( async () => {
	const res = await fetch('https://api.imgur.com/3/account/qdozaq/submissions/0/', {
		headers: { Authorization: `Client-ID ${IMGUR_CLIENT_ID}` }
	});

	if (res.status !== 200) {
		throw error(500, "Can't fetch images")
	}

	const { data }: {data: Array<Image| Album>} = await res.json();
	const images = data.map((obj) => ({
		...obj,
		thumbnail: obj.is_album ? obj.cover : obj.id
	}));

	return {
		images
	};
}) satisfies PageServerLoad;
