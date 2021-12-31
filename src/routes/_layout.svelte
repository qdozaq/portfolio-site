<script lang="ts">
	import Menu from 'components/Menu.svelte';
	import PageTransition from 'components/PageTransition.svelte';
	import NavigationButton from 'components/NavigationButton.svelte';

	export let segment: string;

	// pages to exclude the media css on
	const excludeMedia = ['projects', 'motion', 'art'];

	$: hasLayout = segment !== undefined;
	$: process.browser && document.body.classList.toggle('noscroll', !hasLayout);
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
			<div class:content={!excludeMedia.includes(segment)}>
				<slot />
			</div>
		</PageTransition>
	</main>
{:else}
	<PageTransition direction="left">
		<slot />
	</PageTransition>
{/if}
