import { error } from '@sveltejs/kit';
import type { Album, Image } from '../Image';
import type {PageServerLoad} from './$types'
import {VITE_IMGUR_CLIENT_ID} from '$env/static/private'
export const load = (async ({ params }) => {
	const [v1, v2] = params.id.split('/');
	const isAlbum = v1 === 'a';
	const id = isAlbum ? v2 : v1;

	const res = await fetch(`https://api.imgur.com/3/${isAlbum ? 'album' : 'image'}/${id}`, {
		headers: { Authorization: `Client-ID ${VITE_IMGUR_CLIENT_ID}` }
	});

	if (res.status !== 200) {
		throw error(500, "Can't fetch images")
	}

	const { data }: {data: Image | Album} = await res.json();
	return {
		...data
	};
}) satisfies PageServerLoad;
