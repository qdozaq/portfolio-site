<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { projects, projectMap } from './_projects';
	import type { Project } from './_projects';
	export const load: Load = async ({ url }) => {
		const project = url.searchParams.get('project');
		if (project) {
			const index = projectMap[project];
			return { props: { selected: projects[index] } };
		}
		return { props: { selected: null } };
	};
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';
	import { send, receive } from 'utils/crossfade';
	import Pill from 'components/Pill.svelte';
	import { goto } from '$app/navigation';

	export let selected: Project | null;

	$: browser && document.body.classList.toggle('noscroll', selected !== null);

	let hover: number | undefined;

	function play(index: number) {
		return () => {
			hover = index;
		};
	}

	function pause() {
		hover = undefined;
	}

	function back() {
		goto('/projects', { noscroll: true });
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

	.selected video {
		display: block;
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

	.link {
		display: block;
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
	<title>Projects</title>
	<meta name="description" content="A collection of my programming projects" />
</svelte:head>

<h1>Projects</h1>

<div class="container">
	{#each projects as { key, title, novideo }, index}
		<div class="project" on:mouseover={play(index)} on:mouseout={pause}>
			{#if !selected || (selected && selected.key !== key)}
				<div class="project-inner" out:send={{ key }} in:receive={{ key }}>
					<h2>{title}</h2>
					<article class="card">
						<a href="/projects?project={key}" sveltekit:noscroll>
							<img alt={title} src="/{key}.jpg" class:display={novideo || hover !== index} />
							{#if !novideo}
								<video playsinline autoplay muted loop class:display={hover === index}>
									<source src="/{key}.webm" type="video/webm" />
									<source src="/{key}.mp4" type="video/mp4" />
								</video>
							{/if}
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
			{#await selected then { title, key, description, link, github, tools, novideo }}
				<div style="margin-bottom: 1rem" out:send={{ key }} in:receive={{ key }}>
					<div class="header" on:click={back}>
						<h2>{title}</h2>
						<button name="close" class="close">&#10005</button>
					</div>
					<a href="/projects" sveltekit:noscroll>
						<video playsinline autoplay muted loop poster="/{key}.jpg">
							<source src="/{key}.webm" type="video/webm" />
							<source src="/{key}.mp4" type="video/mp4" />
						</video>
					</a>
				</div>
				<a class="link" target="_blank" rel="noopener noreferrer" href={link}>{link}</a>
				{#if github !== undefined}
					<a class="link" target="_blank" rel="noopener noreferrer" href={github}>{github}</a>
				{/if}
				<p>
					{@html description}
				</p>
				<p>
					<em>Created with:</em>
					<br />
					{#each tools as [tool, toolLink]}
						<Pill href={toolLink} text={tool} />
					{/each}
				</p>
			{/await}
		</div>
	</div>
{/if}
