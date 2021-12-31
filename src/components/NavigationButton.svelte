<script lang="ts">
	import Chevron from 'icons/Chevron.svelte';
	export let href: string;
	export let point: 'left' | 'right' = 'right';
	export let seoText: string = '';
</script>

<style type="scss">
	@import '../sass/vars.scss';
	a {
		position: relative;
		text-decoration: none;
		display: flex;
		align-items: center;
		font-weight: 300;
		font-style: normal;
		letter-spacing: 0.3rem;
		font-size: 1rem;
		text-align: left;
		color: #fff;

		transition: transform 0.4s cubic-bezier(0.13, 0.9, 0.17, 0.95),
			letter-spacing 0.4s cubic-bezier(0.13, 0.9, 0.17, 0.95),
			font-size $fast-transition ease-in-out;

		&:hover {
			color: var(--accent);
		}

		@media (hover: hover) {
			&:hover {
				letter-spacing: 0.5rem;
				transform: translateX(20%);
				color: inherit;
			}

			&.left:hover {
				transform: translateX(-10%);
			}
		}
	}

	.text {
		margin-left: 0.5rem;
		margin-bottom: 3px;
	}

	.left {
		text-align: right;
	}

	/* This bypasses googles SEO warning about non descriptive text links. Sorry Google.. */
	.hack {
		height: 0px;
		font-size: 1px;
		position: absolute;
		opacity: 0;
	}

	@media only screen and (min-width: 40em) {
		a {
			font-weight: 200;
			letter-spacing: 0.4rem;
			font-size: 1.5rem;
			&:hover {
				letter-spacing: 0.6rem;
			}
		}
	}
</style>

<a rel="prefetch" {href} class:left={point === 'left'}>
	{#if point === 'left'}
		<Chevron rotation={180} />
	{/if}
	<span class="hack">{seoText} |</span>
	<span class="text">
		<slot>more</slot>
	</span>
	{#if point === 'right'}
		<Chevron />
	{/if}
</a>
