<script lang="ts">
	import type { Image, Album } from './_types/Image';
	import { send, receive } from 'utils/crossfade';
	export let images: Array<Image | Album>;
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}

	img {
		width: 8rem;
		height: 8rem;
		object-fit: cover;
	}

	.grid {
		display: grid;
		justify-items: center;

		grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
		column-gap: 0.5rem;
		row-gap: 0.5rem;
	}
	img {
		box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
		transition: transform 0.4s cubic-bezier(0.23, 0.2, 0.09, 1);
	}

	img:hover {
		transform: scale(1.07);
	}

	@media only screen and (min-width: 22.5em) {
		img {
			width: 10rem;
			height: 10rem;
		}
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		}
	}

	@media only screen and (min-width: 40em) {
		img {
			width: 12rem;
			height: 12rem;
		}
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		}
	}

	@media only screen and (min-width: 70em) {
		img {
			width: 20rem;
			height: 20rem;
		}
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			row-gap: 1rem;
		}
	}
</style>

<svelte:head>
	<title>Art</title>
	<meta name="description" content="A collection of my art work and experiments" />
</svelte:head>

<h1>Art</h1>
<div class="grid">
	{#each images as img}
		<a sveltekit:noscroll href="/art/{img.is_album ? 'a/' : ''}{img.id}">
			<img
				alt={img.title}
				out:send={{ key: img.id }}
				in:receive={{ key: img.id }}
				src="https://i.imgur.com/{img.thumbnail}t.jpg"
				sizes="(min-width: 40em) and (max-width:70em) 12rem, (min-width: 70em) 25rem,  8rem"
				srcset="
      https://i.imgur.com/{img.thumbnail}t.jpg 160w,
      https://i.imgur.com/{img.thumbnail}m.jpg 320w,
      https://i.imgur.com/{img.thumbnail}l.jpg 640w"
			/>
		</a>
	{/each}
</div>
