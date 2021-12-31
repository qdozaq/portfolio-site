<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { scrollEnabled } from 'utils';
	export let open: boolean = false;
	export let onClose: () => void;

	$: {
		scrollEnabled.set(!open);
	}

	function close() {
		onClose();
	}
</script>

<style>
	.modal {
		position: fixed;
		width: calc(100% - 4rem);
		height: auto;
		padding: 1rem;
		padding-top: 2rem;
		left: 50%;
		top: 50vh;
		transform: translate(-50%, -50%);
		background: rgba(47, 108, 115, 0.9);
		border-radius: 0.5rem;
		z-index: 5;
	}

	.background {
		background: rgba(0, 0, 0, 0.8);
		position: fixed;
		z-index: 4;
		width: 100%;
		height: 100%;
	}

	button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 200;
		font-family: roboto;
		letter-spacing: 2px;
	}

	button:hover {
		color: #111;
	}

	@media only screen and (min-width: 22em) {
		.modal {
			width: 18rem;
		}
	}
</style>

{#if open}
	<div class="background" on:click={close} transition:fade />
	<div class="modal" transition:fly={{ duration: 500, easing: quintOut, y: 100 }}>
		<slot />
		<button name="close" class="close" on:click={close}>close</button>
	</div>
{/if}
