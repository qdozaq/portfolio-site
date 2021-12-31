<script lang="ts">
	import Prism from 'prismjs';
	import Section from '../HomeSection.svelte';
	import NavigationButton from '../NavigationButton.svelte';
	import Modal from '../Model.svelte';
	import Cat from 'icons/Cat.svelte';
	let catFact = '';
	let error = false;
	function onClose() {
		catFact = '';
		error = false;
	}

	let code = Prism.highlight(
		`
  async function handleClick() {
    const response =
      await fetch(catFactApiUrl);
    const data =
      await response.json();
    catFact = data.text;
    // Click for a cat fact 😺
  }
  `,
		Prism.languages.javascript,
		'javascript'
	);

	async function handleClick() {
		const timeout = 4000;
		try {
			const controller = new AbortController();
			const id = setTimeout(() => {
				controller.abort();
			}, timeout);

			const response = await fetch('https://cat-fact.herokuapp.com/facts/random', {
				signal: controller.signal
			});

			if (response.status !== 200) throw 'oh no';

			clearTimeout(id);

			const data = await response.json();

			catFact = data.text;
		} catch (e) {
			catFact =
				'Oh no. Something went wrong when trying to get a cat fact. Well, good thing I put this catch block in here 🧠';
			error = true;
		}
	}
</script>

<style type="scss">
	.actions {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.content {
		position: relative;
		width: inherit;
		height: 14rem;
		border: none;
		background: none;
		border-bottom: #fff solid 4px;
		border-right: #fff solid 4px;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
		text-align: left;

		transition: transform 0.3s cubic-bezier(0.05, 0.64, 0.04, 0.98);
	}

	.content:active {
		transform: scale(0.95);
	}

	.content:focus {
		outline: none;
	}

	.content:after {
		content: '';
		background: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 40%;
		width: 4px;
	}
	.content:before {
		content: '';
		background: #fff;
		position: absolute;
		top: 0;
		right: 0;
		height: 4px;
		width: 50%;
		transform: translateX(1px);
	}

	.hover-card {
		display: flex;
		opacity: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		background: rgba(47, 108, 115, 0.8);
		color: rgb(64, 189, 206);
		font-size: 1.5rem;
		box-sizing: border-box;
		padding: 5rem;
		text-align: center;

		transition: opacity 0.2s ease-in-out;
	}

	code {
		display: inline-block;
		font-size: 12px;
		background: none;
		color: #fff;
		line-height: 1rem;
		white-space: pre;
		transform: translate(-1rem, 1rem);
	}

	.fact {
		font-size: 1rem;
	}

	.author {
		text-align: left;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.5);
	}

	@media (hover: hover) {
		.content:hover {
			.hover-card {
				opacity: 1;
			}
		}
	}

	@media only screen and (min-width: 40em) {
		code {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.content {
			height: 20rem;
		}
	}
</style>

<Section title="Software Developer" {...$$props} load={true}>
	<button class="content" slot="content" on:click={handleClick}>
		<code>
			{@html code}
		</code>
		<div class="hover-card">
			<Cat />
		</div>
	</button>
	<span slot="action" class="actions">
		<span style="margin-top:.5rem">
			<NavigationButton href="/experience" seoText="My Experience">experience</NavigationButton>
		</span>
		<NavigationButton href="/projects" seoText="My Projects">projects</NavigationButton>
	</span>
</Section>
<Modal open={catFact !== ''} {onClose}>
	<div class="fact">{catFact}</div>
	{#if !error}
		<i>
			<p class="author">
				-
				<a
					href="https://alexwohlbruck.github.io/cat-facts/"
					target="_blank"
					rel="noopener noreferrer">alexwohlbruck.github.io/cat-facts</a
				>
			</p>
		</i>
	{/if}
</Modal>
