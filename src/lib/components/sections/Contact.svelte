<script lang="ts">
	import Section from '../HomeSection.svelte';
	import SocialIcons from '../SocialIcons.svelte';
</script>

<style>
	p {
		font-style: normal;
		font-weight: 300;
		font-size: 1.5rem;
		letter-spacing: 0.12rem;
		text-align: center;
	}

	.content {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media only screen and (min-width: 40em) {
		p {
			font-size: 2rem;
			letter-spacing: 0.15rem;
		}
	}
</style>

<Section title="out of things to say..." {...$$props}>
	<div class="content" slot="alt">
		<p>Lets connect!</p>
		<SocialIcons />
	</div>
</Section>
