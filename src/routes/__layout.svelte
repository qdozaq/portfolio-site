<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		return { props: { hasLayout: page.path !== '/', path: page.path } };
	};
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import Menu from 'components/Menu.svelte';
	import PageTransition from 'components/PageTransition.svelte';
	import NavigationButton from 'components/NavigationButton.svelte';

	export let hasLayout: boolean;
	export let path: string;

	console.log({ hasLayout, path });

	// pages to exclude the media css on
	const excludeMedia = ['/projects', '/motion', '/art'];

	$: browser && document.body.classList.toggle('noscroll', !hasLayout);
</script>

<style type="scss">
	main {
		margin-left: 1rem;
		margin-right: 1rem;
		padding-bottom: 3rem;
	}

	.back {
		padding-top: 3rem;
		width: 7rem;
	}

	@media only screen and (min-width: 40em) {
		main {
			margin-left: 2rem;
			margin-right: 2rem;
		}
		.content {
			max-width: 40rem;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
</style>

{#if hasLayout}
	<main>
		<PageTransition>
			<!-- <Menu page={segment} /> -->
			<div class="back">
				<NavigationButton href="/" point="left">Back</NavigationButton>
			</div>
			<div class:content={!excludeMedia.includes(path)}>
				<slot />
			</div>
		</PageTransition>
	</main>
{:else}
	<PageTransition direction="left">
		<slot />
	</PageTransition>
{/if}
