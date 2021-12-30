<script lang="ts">
	export let text: string;
	export let href: string = undefined;
</script>

<style>
	.pill {
		display: inline-block;
		text-decoration: none;
		color: #fff;

		margin-right: 0.25rem;
		margin-top: 0.25rem;
		padding: 0.4rem;
		border-radius: 1.5rem;

		background-color: var(--accent);
		transition: transform 400ms cubic-bezier(0.27, 0.59, 0, 0.99), box-shadow 100ms 20ms;
	}

	.pill:hover {
		--secondary: #fff;
		transform: translate(-5px, -5px);
		box-shadow: 0.5px 0.5px var(--secondary), 1.5px 1.5px var(--secondary),
			2.5px 2.5px var(--secondary), 3.5px 3.5px var(--secondary), 4.5px 4.5px var(--secondary);
	}
</style>

{#if href}
	<a class="pill" {href} target="_blank" rel="noopener noreferrer">{text}</a>
{:else}<span class="pill">{text}</span>{/if}
