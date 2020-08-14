<script lang="ts">
	import SocialIcons from '../components/SocialIcons.svelte';
</script>

<style>
	main {
		background-color: #111;
		width: 100vw;
		height: 100vh;
		display:flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-family: Tahoma, sans-serif;
		overflow-x: hidden;
	}

	h1 {
		color: #eee;
		font-weight: bold;
	}

#demo-reel {
  width: 100vw;
	margin-bottom: 1rem
}

@media (min-width: 768px) {
	#demo-reel {
		width: 768px;
	}
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
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin: 0 0.5em;
}

.iframe-wrapper > iframe {
	border: none;
}

</style>

<svelte:head>
	<title>I'm Paul Mendoza</title>
</svelte:head>

<main>	
		<section id="demo-reel">
			<div class="iframe-wrapper">
				<iframe
					title="demo-reel"
					src="https://player.vimeo.com/video/308906486?title=0&byline=0&portrait=0"
					allowfullscreen
				></iframe>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
		</section>
		<h1>I'm Paul Mendoza</h1>
		<SocialIcons />
</main>