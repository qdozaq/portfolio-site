<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { videos, videoMap } from './_videos';
	import type { Video } from './_videos';
	export const load: Load = async ({ url }) => {
		const project = url.searchParams.get('project');
		if (project) {
			const index = videoMap[project];
			return { props: { selected: videos[index] } };
		}
		return { props: { selected: null } };
	};
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';
	import { send, receive } from 'utils/crossfade';
	import { goto } from '$app/navigation';
	import { accent } from 'utils/color';

	export let selected: Video | null;

	$: browser && document.body.classList.toggle('noscroll', selected !== null);

	let hover: number | undefined;

	const playerUrl = 'https://player.vimeo.com/video/';
	const playerOptions = ['title=0', 'byline=0', 'portrait=0', `color=${accent}`].join('&');

	function play(index: number) {
		return () => {
			hover = index;
		};
	}

	function pause() {
		hover = undefined;
	}

	function back() {
		goto('/motion', { noscroll: true });
	}
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}

	h2 {
		font-weight: 100;
	}

	img,
	video {
		width: 100%;
		cursor: pointer;
	}
	video {
		display: none;
	}

	.container {
		display: grid;
		row-gap: 1rem;
		margin-bottom: 2rem;
	}

	.card {
		box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
		transition: transform 0.4s cubic-bezier(0.23, 0.2, 0.09, 1);
	}

	.selected-container {
		position: fixed;
		overflow-y: auto;
		z-index: 15;
		background: rgba(0, 0, 0, 0.9);
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
	}

	.selected {
		margin: 1rem;
		margin-bottom: 6rem;
	}

	.project {
		/* maintain 16:9 aspect ratio */
		padding-top: calc(56.25% + 3rem);
		position: relative;
	}

	.project:hover {
		z-index: 5;
	}
	.project:hover .card {
		transform: scale(1.07);
	}

	.project-inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.iframe-wrapper {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		/* margin: 0 0.5em; */
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

	@media only screen and (min-width: 40em) {
		.card img,
		.card video {
			display: none;
		}
		.card .display {
			display: block;
		}
	}

	@media only screen and (min-width: 50em) {
		.selected {
			margin: 3rem 2rem;
		}
		.container {
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
			row-gap: 2rem;
		}
	}

	@media only screen and (min-width: 70em) {
		.selected {
			width: calc(70rem - 4rem);
			margin: auto;
			margin-top: 3rem;
		}
	}
</style>

<svelte:head>
	<title>Motion Work</title>
	<meta name="description" content="Collection of my motion graphics work" />
</svelte:head>

<h1>Motion Work</h1>

<div class="container">
	{#each videos as { key, title }, index}
		<div class="project" on:mouseover={play(index)} on:mouseout={pause}>
			{#if !selected || (selected && selected.key !== key)}
				<div class="project-inner" out:send={{ key }} in:receive={{ key }}>
					<h2>{title}</h2>
					<article class="card">
						<a href="/motion?project={key}" sveltekit:noscroll>
							<img alt={title} src="/{key}.jpg" class:display={hover !== index} />
							<video playsinline autoplay muted loop class:display={hover === index}>
								<source src="/{key}.webm" type="video/webm" />
								<source src="/{key}.mp4" type="video/mp4" />
							</video>
						</a>
					</article>
				</div>
			{/if}
		</div>
	{/each}
</div>

{#if selected !== null}
	<div class="selected-container scrollbar" transition:fade on:click|self={back}>
		<div class="selected">
			{#await selected then { title, key, description, videoId }}
				<div style="margin-bottom: 1rem" out:send={{ key }} in:receive={{ key }}>
					<div class="header" on:click={back}>
						<h2>{title}</h2>
						<button name="close" class="close">&#10005</button>
					</div>
					<div class="iframe-wrapper">
						<iframe
							class="video"
							{title}
							src="{playerUrl}{videoId}?{playerOptions}"
							frameborder="0"
							allowfullscreen
						/>
					</div>
				</div>
				<p>
					{@html description}
				</p>
			{/await}
		</div>
	</div>
{/if}
