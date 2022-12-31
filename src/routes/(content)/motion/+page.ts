import type { PageLoad } from './$types';
import { videos, videoMap } from './_videos';
export const load =  (({ url }) => {
	const project = url.searchParams.get('project');
	if (project) {
		const index = videoMap[project];
		return { selected: videos[index] };
	}
	return { selected: null };
}) satisfies PageLoad;
