<script lang="ts">
	import type { PageData } from './$types';
	import type { Image, Album } from '../_types/Image';
	import { isAlbum } from '../_types/Image';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { send, receive } from 'utils/crossfade';

	export let data: PageData;
	$: imageData = data.data as Image | Album;

	function back() {
		goto('/art', { noScroll: true });
	}
</script>

<style>
	h2 {
		font-weight: 100;
	}

	.close {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1.3rem;
		margin: 0;
		padding: 0;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		cursor: pointer;
	}

	.container {
		z-index: 15;
		position: absolute;
		background: #111;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
	}

	img,
	video {
		width: 100%;
		height: auto;
	}

	.content {
		margin: 1rem;
		margin-bottom: 6rem;
		padding-bottom: 3rem;
	}

	a {
		display: block;
		margin-bottom: 1rem;
	}

	@media only screen and (min-width: 50em) {
		.content {
			margin: 3rem 2rem;
		}
	}

	@media only screen and (min-width: 70em) {
		.content {
			width: calc(70rem - 4rem);
			margin: auto;
			margin-top: 3rem;
		}
	}
</style>

<svelte:head>
	<title>{imageData?.title || 'Loading...'}</title>
	<meta name="description" content="{imageData?.title || 'Art'} showcase" />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="container" transition:fade on:click|self={back}>
	<div class="content">
		<div class="header" on:click={back}>
			<h2>
				{@html imageData?.title || 'Loading...'}
			</h2>
			<button name="close" class="close">&#10005</button>
		</div>
		{#if imageData.is_album}
			{#each imageData.images as image, index}
				{#if image.animated}
					<video
						out:send={index === 0 && { key: imageData.id }}
						in:receive={index === 0 && { key: imageData.id }}
						playsinline
						autoplay
						muted
						loop
						height={image.height}
						width={image.width}
					>
						<source src={image.mp4} type={image.type} />
					</video>
				{:else}
					<img
						alt="i-{index}"
						width={image.width}
						height={image.height}
						out:send={index === 0 && { key: imageData.id }}
						in:receive={index === 0 && { key: imageData.id }}
						src="https://i.imgur.com/{image.id}l.jpg"
						srcset="
              https://i.imgur.com/{image.id}l.jpg 640w,
              https://i.imgur.com/{image.id}h.jpg 1024w
          "
					/>
				{/if}
				<a target="_blank" rel="noopener noreferrer" href={image.link}>Full Size</a>
				{#if image.description}
					<p>{image.description}</p>
				{/if}
			{/each}
		{:else}
			{#if !isAlbum(data) && imageData.animated}
				<video
					out:send={{ key: imageData.id }}
					in:receive={{ key: imageData.id }}
					playsinline
					autoplay
					muted
					loop
					height={imageData.height}
					width={imageData.width}
				>
					<source src={imageData.mp4} type={imageData.type} />
				</video>
			{:else}
				<img
					alt={imageData.title}
					width={imageData.width}
					height={imageData.height}
					out:send={{ key: imageData.id }}
					in:receive={{ key: imageData.id }}
					src="https://i.imgur.com/{imageData.id}l.jpg"
					srcset="
              https://i.imgur.com/{imageData.id}l.jpg 640w,
              https://i.imgur.com/{imageData.id}h.jpg 1024w
          "
				/>
			{/if}
			<a target="_blank" rel="noopener noreferrer" href={imageData.link}>Full Size</a>
			{#if imageData.description}
				<p>{imageData.description}</p>
			{/if}
		{/if}
	</div>
</div>
