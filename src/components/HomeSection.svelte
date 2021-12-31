<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let position: number = 0;
	export let index: number = 0;
	export let tPos: number = 0;
	export let cPos: number = 0;
	export let load: boolean = false;

	// poor mans lazy load
	$: loaded = loaded || load;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<style type="scss">
	@import '../sass/vars.scss';
	section {
		position: fixed;
		width: 100%;
		top: 50vh;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.grid {
		display: grid;
		margin-left: 2rem;
		margin-right: 2rem;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: 6rem 8rem 1rem;
	}

	h1 {
		z-index: 2;
		font-weight: 500;
		font-size: 3rem;
		text-shadow: 3px 4px 0px rgba(0, 0, 0, 0.4);
		grid-row: 1;
		grid-column: 1 / 3;
		align-self: start;
		justify-self: start;
		margin: 0;
		will-change: transform;
		transition: font-size $fast-transition ease-in-out;
	}

	.content {
		grid-row: 1 / 3;
		grid-column: 2 / 4;
		justify-self: end;
		align-self: end;
		width: 14rem;
		will-change: transform;

		transition: width $fast-transition ease-in-out;
	}

	.action {
		grid-row: 3 / 4;
		grid-column: 2 / 5;
		justify-self: end;
		will-change: transform;
	}

	@media only screen and (min-width: 25em) {
		section {
			width: 25rem;
		}
	}

	@media only screen and (min-width: 40em) {
		section {
			width: 35rem;
		}

		h1 {
			font-size: 5rem;
		}

		.content {
			width: 20rem;
		}

		.grid {
			grid-template-rows: 11rem 11rem 1rem;
		}
	}
</style>

<!-- after mounting use the position calculated off of window instead of css to avoid page jumping on mobile -->
<section style="top: {mounted ? `${position}px` : `calc(100vh * ${index} + 50%)`};">
	<!-- <section style="top: calc(100vh * {index} + 50%);"> -->
	<div class="grid">
		<div style="transform: translateY({cPos}px)" class="content">
			{#if loaded}
				<slot name="content" />
			{/if}
		</div>
		<h1 style="transform: translateY({tPos}px)">{title}</h1>
		<div style="transform: translateY({cPos}px)" class="action">
			<slot name="action" />
		</div>
	</div>
	<div style="transform: translateY({cPos}px)">
		<slot name="alt" />
	</div>
</section>
