<script lang="ts">
	import Section from '../HomeSection.svelte';
	import NavigationButton from '../NavigationButton.svelte';
</script>

<style>
	video {
		width: inherit;
		box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
	}
</style>

<Section title="Motion Designer" {...$$props}>
	<video playsinline autoplay muted loop slot="content">
		<source src="/motion_preview.webm" type="video/webm" />
		<source src="/motion_preview.mp4" type="video/mp4" />
	</video>
	<span slot="action">
		<NavigationButton href="/motion" seoText="My Motion Design Work">more</NavigationButton>
	</span>
</Section>
