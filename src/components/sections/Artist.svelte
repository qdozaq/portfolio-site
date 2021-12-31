<script lang="ts">
	import Section from '../HomeSection.svelte';
	import NavigationButton from '../NavigationButton.svelte';
</script>

<style type="scss">
	img {
		width: inherit;
		box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
		position: absolute;

		transition: transform 0.5s cubic-bezier(0.23, 0.2, 0.09, 1);
	}

	.img-1 {
		transform: translate(-2rem, 2rem);
	}

	.img-2 {
		transform: translate(0, 0);
	}

	.img-3 {
		transform: translate(2rem, -2rem);
	}

	.content {
		position: relative;
		width: inherit;
		height: 14rem;
		transform: translate(-1rem, -4rem);
	}

	@media only screen and (min-width: 40em) {
		.content {
			height: 20rem;
		}

		img:active {
			z-index: 10;
		}
	}

	@media (hover: hover) {
		.content:hover {
			& > .img-1 {
				transform: translate(-6rem, 6rem);
			}

			& > .img-2:hover {
				transform: translate(0, -4rem);
			}

			& > .img-3 {
				transform: translate(6rem, -6rem);
				&:hover {
					transform: translate(6rem, -8rem);
				}
			}
		}
	}
</style>

<Section title="Artist" {...$$props}>
	<div class="content" slot="content">
		<img class="img-3" alt="4th" src="/4th_400.jpg" />
		<img class="img-2" alt="hand" src="/hand_400.jpg" />
		<img class="img-1" alt="hypnotized" src="/hypnotized_400.jpg" />
	</div>
	<span slot="action">
		<NavigationButton href="/art" seoText="My Artwork">more</NavigationButton>
	</span>
</Section>
