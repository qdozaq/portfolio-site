<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import { roundDownToMultiple, roundToNearestMultiple, progress } from 'utils';
	import Chevron from 'icons/Chevron.svelte';
	import { onMount } from 'svelte';
	import type { Section } from './sections';

	export let sections: Section[];
	export let winHeight: number;
	const titleOffsetMultiplier = 2;
	let mounted = false;

	// get the percentage each section takes out of the total progess
	$: sectionPct = 100 / (sections.length - 1);
	$: currentSection = roundToNearestMultiple($progress, sectionPct) / sectionPct;

	const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

	$: {
		const currentSectionFromStart = roundDownToMultiple($progress, sectionPct) / sectionPct;

		const pctDoneOfCurrentSection = ($progress % sectionPct) / sectionPct;

		// use the pct done on a single section as time for the easing function
		const sectionProgress = quadInOut(pctDoneOfCurrentSection);

		const mappedProgress = sectionProgress * sectionPct + sectionPct * currentSectionFromStart;

		const y = (mappedProgress / sectionPct) * winHeight;
		coords.set({ y }).then(() => {
			progress.set(currentSection * sectionPct);
		});
	}

	function onContinue() {
		if (currentSection + 1 < sections.length) {
			progress.set((currentSection + 1) * sectionPct);
		}
	}

	function onBack() {
		if (currentSection - 1 >= 0) {
			progress.set((currentSection - 1) * sectionPct);
		}
	}

	onMount(() => {
		mounted = true;
	});
</script>

<style type="scss">
	@import '../sass/vars.scss';

	h1 {
		position: fixed;
		z-index: 2;
		font-weight: 400;
		font-size: 3rem;
		left: 2rem;
		top: calc(var(--win-height) - 11.5rem);

		text-shadow: 3px 4px 0px rgba(0, 0, 0, 0.4);
		transition: font-size $fast-transition ease-in-out;
	}

	h1.ssr {
		top: calc(50% - 11.5rem);
	}

	.nav {
		position: fixed;
		left: 50%;
		transform: translate(-50%, 0);
		border: none;
		background: none;
		width: 100%;
		padding: 0;
		margin: 0;
		color: #fff;
		cursor: pointer;

		&.continue {
			bottom: 0;
			&:hover {
				& > .chev {
					transform: translateY(0.5rem);
				}
			}
		}

		&.back {
			top: 0;
			&:hover {
				& > .chev {
					transform: translateY(-0.5rem);
				}
			}
		}

		&:active {
			color: #40bdce;
		}
	}
	.chev {
		display: inline-block;
		height: 1.3rem;
		padding: 2rem 0;
		pointer-events: none;

		transition: transform 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95);
	}

	.nav:focus,
	.chev:focus {
		outline: none;
	}

	@media only screen and (min-width: 25em) {
		h1 {
			left: calc(50% - 10.5rem);
		}
	}

	@media only screen and (min-width: 40em) {
		h1 {
			font-size: 5rem;
			top: calc(var(--win-height) - 18.1rem);
			left: calc(50% - 15.5rem);
		}
		h1.ssr {
			top: calc(50% - 18.1rem);
		}
	}

	.article {
		display: inline-block;
		opacity: 0;
		transform: translateX(5rem) rotate(30deg);

		transition: opacity 1s cubic-bezier(0.25, 0.63, 0.4, 0.99),
			transform 1s cubic-bezier(0.25, 0.63, 0.4, 0.99);
	}

	.show {
		opacity: 1;
		transform: translateX(0) rotate(0deg);
	}

	.no-space {
		margin-left: -9.7%;
	}
</style>

<h1 style="--win-height: {winHeight / 2}px;" class:ssr={!mounted}>
	I'm
	<span class="article" class:show={sections[currentSection].prefix}>a</span>
	<span class="article no-space" class:show={sections[currentSection].prefix === 'an'}> n </span>
</h1>
{#each sections as section, index}
	<svelte:component
		this={section.component}
		position={index * winHeight + winHeight / 2}
		{index}
		load={currentSection >= index}
		tPos={-$coords.y * titleOffsetMultiplier + winHeight * index}
		cPos={-$coords.y}
	/>
{/each}

{#if currentSection > 0}
	<button
		aria-label="previous section"
		class="nav back"
		name="back"
		on:click={onBack}
		transition:fade
	>
		<span class="chev" tabindex="-1">
			<Chevron rotation={-90} />
		</span>
	</button>
{/if}

{#if currentSection < sections.length - 1}
	<button
		aria-label="next section"
		class="nav continue"
		name="continue"
		on:click={onContinue}
		transition:fade
	>
		<span class="chev" tabindex="-1">
			<Chevron rotation={90} />
		</span>
	</button>
{/if}
