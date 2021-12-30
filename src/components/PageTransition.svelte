<script lang="ts">
	import { quadOut, quadIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let direction: 'left' | 'right' = 'right';

	function flyPage(
		node: Element,
		{ phase, direction }: { phase: 'in' | 'out'; direction: 'left' | 'right' }
	) {
		return fly(node, {
			delay: phase === 'in' ? 500 : 0,
			duration: 500,
			easing: phase === 'out' ? quadIn : quadOut,
			x: (direction === 'left' ? -1 : 1) * window.innerWidth * 0.8,
			opacity: 0
		});
	}
</script>

<div in:flyPage={{ phase: 'in', direction }} out:flyPage={{ phase: 'out', direction }}>
	<slot />
</div>
