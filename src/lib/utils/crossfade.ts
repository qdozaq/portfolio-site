import { quintOut } from 'svelte/easing';
import { crossfade, fade } from 'svelte/transition';

const [send, receive] = crossfade({
	duration: 600,
	easing: quintOut,
	// @ts-expect-error duration property may not match
	fallback: fade
});

export { send, receive };
