<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { progress } from 'utils';
	import type { Section } from './sections';
	export let sections: Section[];
	export let winHeight: number;

	const coords = spring({ y: 0 }, { stiffness: 0.1, damping: 1, precision: 0.01 });

	let containerRef: HTMLDivElement;
	let containerHeight = 0;
	let mounted = false;
	let showMenu = false;

	$: {
		coords.set({ y: ($progress / 100) * containerHeight });
	}

	function handleResize() {
		containerHeight = containerRef.getBoundingClientRect().height - 4 - 32;
	}

	function goToSection(s: number) {
		return () => {
			const sectionSize = 100 / (sections.length - 1);
			const pct = sectionSize * s;
			progress.set(pct);
			showMenu = false;
		};
	}

	onMount(() => {
		mounted = true;
		// 4 to offset for the pixel radius of the circle
		// 32 to offset padding from buttons
		containerHeight = containerRef.getBoundingClientRect().height - 4 - 32;
	});
</script>

<style type="scss">
	.container {
		display: flex;
		position: fixed;
		justify-content: space-between;
		flex-direction: column;
		height: 50vh;
		top: var(--win-height);
		margin-left: 1rem;
		transform: translateY(-50%);
	}

	.container.ssr {
		top: 50%;
	}

	.circle {
		width: 4px;
		height: 4px;
		background: #3c3c3c;
		border-radius: 1rem;

		transition: background-color 0.3s var(--reaction-curve), width 0.3s var(--reaction-curve),
			height 0.3s var(--reaction-curve), box-shadow 0.3s var(--reaction-curve);

		&.glow {
			width: 5px;
			height: 5px;
			background: #fff;
			box-shadow: 0 0 5px #fff;
			position: absolute;
			top: 0px;
		}
	}

	button {
		background: none;
		cursor: pointer;
		border: none;
		padding: 1rem;
		color: #fff;

		&:focus {
			outline: none;
		}
	}

	.section-button {
		cursor: pointer;
		display: flex;
		align-items: center;
		transform: translate(-1rem, -1rem);

		@media (hover: hover) {
			&:hover {
				.circle {
					background-color: #fff;
					box-shadow: 0 0 5px #fff;
				}
			}
		}
	}

	.section-title {
		display: inline-block;
		opacity: 0;
		transform: translateX(-1rem);
		color: #8f8f8f;
		transition: opacity 0.3s var(--reaction-curve), transform 0.3s var(--reaction-curve);
	}

	.menu-button {
		z-index: 11;
		position: fixed;
		top: 1rem;
		cursor: pointer;
		background: none;
		padding: 0;
		color: rgba(255, 255, 255, 0.2);
		border: 1px solid currentColor;
		border-left: none;

		transition: color 0.3s var(--reaction-curve);

		&:hover,
		&:active {
			color: rgba(255, 255, 255, 1);
		}

		svg {
			width: 2.5rem;
			height: 2.5rem;
			/* padding: 1px; */

			rect {
				fill: currentColor;
			}
		}
	}

	.menu {
		z-index: 10;
		&:before {
			content: '';
			background-color: rgba(0, 0, 0, 0.9);
			position: absolute;
			height: 100%;
			width: 100%;
			transform: translate(-1rem, -1rem);
		}
		.section-title {
			opacity: 1;
			transform: translateX(-0.5rem);
		}
	}

	@media only screen and (min-width: 50em) {
		.menu-button {
			display: none;
		}
		.container {
			margin-left: 2rem;
			&:hover {
				.section-title {
					opacity: 1;
					transform: translateX(-0.5rem);
				}
			}
		}

		.section-title {
			display: inline-block;
			opacity: 0;
			color: #3c3c3c;
		}

		.section-button {
			&:hover {
				.section-title {
					color: #fff;
					transform: translateX(0);
				}
			}
		}
	}
</style>

<svelte:window on:resize={handleResize} on:orientationchange={handleResize} />
<div
	class="container"
	class:menu={showMenu}
	bind:this={containerRef}
	style="--win-height: {winHeight / 2}px"
	class:ssr={!mounted}
>
	{#each sections as { title }, index}
		<div class="section-button">
			<button aria-label={title} on:click={goToSection(index)}>
				<div class="circle" />
			</button>
			<span class="section-title" on:click={goToSection(index)}>{title}</span>
		</div>
	{/each}
	<div class="circle glow" style="transform:translateY({$coords.y}px);" />
</div>

<button aria-label="menu" class="menu-button" on:click={() => (showMenu = !showMenu)}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
		<rect x="24" y="58.78" width="80" height="10.43" rx="4.94" />
		<rect x="24" y="82.26" width="80" height="10.43" rx="4.94" />
		<rect x="24" y="35.3" width="80" height="10.43" rx="4.94" />
	</svg>
</button>
