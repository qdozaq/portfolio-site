<script lang="ts">
	import { browser } from '$app/environment';
	import PageTransition from '$lib/components/PageTransition.svelte';

	$: browser && document.body.classList.toggle('noscroll', true);
</script>

<PageTransition direction="left">
	<slot />
</PageTransition>
