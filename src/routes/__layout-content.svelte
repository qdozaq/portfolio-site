<script lang="ts">
	import PageTransition from 'components/PageTransition.svelte';
	import NavigationButton from 'components/NavigationButton.svelte';
	import { browser } from '$app/env';
	$: browser && document.body.classList.toggle('noscroll', false);
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
	}
</style>

<main>
	<PageTransition>
		<div class="back">
			<NavigationButton href="/" point="left">Back</NavigationButton>
		</div>
		<slot />
	</PageTransition>
</main>
