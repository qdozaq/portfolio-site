<script>
	import Social from 'components/SocialIcons.svelte';
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	a {
		margin-bottom: 2rem;
	}
</style>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<div>
	<a href="mailto:itspaulmendoza@gmail.com">itspaulmendoza@gmail.com</a>
	<Social />
</div>
