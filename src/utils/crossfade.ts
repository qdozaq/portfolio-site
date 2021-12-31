import { quintOut } from 'svelte/easing';
import { crossfade, fade } from 'svelte/transition';

const [send, receive] = crossfade({
	duration: 600,
	easing: quintOut,
	fallback: fade
	// fallback: (node, params) =>
	//   scale(node, { ...params, duration: 400, easing: quintInOut }),
});

export { send, receive };
