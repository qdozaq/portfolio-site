import type { PageLoad } from './$types';
import { projects, projectMap } from './_projects';

export const load = (({ url }) => {
	const project = url.searchParams.get('project');
	if (project) {
		const index = projectMap[project];
		return { selected: projects[index] };
	}
	return { selected: null };
}) satisfies PageLoad;
