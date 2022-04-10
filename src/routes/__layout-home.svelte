<script lang="ts">
	import { browser } from '$app/env';
	import PageTransition from 'components/PageTransition.svelte';

	$: browser && document.body.classList.toggle('noscroll', true);
</script>

<PageTransition direction="left">
	<slot />
</PageTransition>
