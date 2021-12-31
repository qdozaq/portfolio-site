<script lang="ts">
	import { browser } from '$app/env';
	import { quadOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	export let page: string;
	let show = false;
	$: browser && document.body.classList.toggle('noscroll', show);

	const links = [
		['Home', '/'],
		['About', '/about'],
		['Motion Work', '/motion'],
		['Art', '/art'],
		['Experience', '/experience'],
		['Projects', '/projects'],
		['Contact', '/contact']
	];

	function toggle() {
		show = !show;
	}

	function off() {
		show = false;
	}
</script>

<style type="scss">
	button {
		z-index: 11;
		cursor: pointer;
		border: none;
		background: none;
		margin-top: 1rem;
		padding: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 5rem;
		color: rgba(255, 255, 255, 0.3);
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);

		transition: color 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95),
			box-shadow 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95),
			transform 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95);

		&:hover,
		&.active {
			color: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
			transform: scale(1.05);
		}

		svg {
			width: inherit;
			height: inherit;

			rect {
				fill: currentColor;
			}
		}
	}
	nav {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.menu {
		position: fixed;
		top: 0;
		left: 0;
		/* background-color: var(--accent); */
		width: 100vw;
		height: 100vh;
		z-index: 10;
		padding-top: 3rem;
		/* border-radius: 0 0 0 24rem; */

		/* clip-path: polygon(0 0, 0 80%, 100% 118%, 100% 0%, 0 0); */

		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			background: var(--accent);
			z-index: -1;
			width: 200vh;
			height: 200vh;
			bottom: 3rem;
			transform: rotate(45deg) translate(20vw, 26vh);
		}

		transform: translate(100%, -100%);

		transition: transform 0.5s cubic-bezier(0.3, 0.26, 0.18, 0.96);
		&.show {
			transform: translate(0, 0);
		}
	}

	/* .menu-transition {
    display: fixed;
    top: 0;
    left: 0;
  } */

	.links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100% - 3rem);
	}

	a {
		color: #111;
		font-style: normal;
		display: block;
		font-size: 2rem;
		font-weight: 500;
		text-decoration: none;

		&.active,
		&:hover {
			text-decoration: underline;
		}
	}

	@media only screen and (min-width: 40em) {
		a {
			font-size: 3rem;
		}
	}
</style>

<!-- {#if show} -->
<div class="menu" class:show>
	<div class="links">
		{#each links as [text, href]}
			<a on:click={off} class:active={'/' + page === href} {href}>{text}</a>
		{/each}
	</div>
</div>
<!-- {/if} -->

<nav>
	<button aria-label="menu" class:active={show} on:click={toggle}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<circle cx="64" cy="64" r="64" />
			<rect x="24" y="58.78" width="80" height="10.43" rx="4.94" />
			<rect x="24" y="82.26" width="80" height="10.43" rx="4.94" />
			<rect x="24" y="35.3" width="80" height="10.43" rx="4.94" />
		</svg>
	</button>
</nav>
