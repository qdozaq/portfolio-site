<script lang="ts">
	export let heading: string = '';
	export let subHeading: string = '';
	export let detail: string = '';
</script>

<style>
	h2 {
		font-weight: 500;
	}

	h3 {
		font-style: italic;
		font-weight: 400;
	}

	h4 {
		font-weight: 100;
	}

	div {
		margin-bottom: 2rem;
	}
</style>

<div>
	<h2>{heading}</h2>

	<h3>{subHeading}</h3>

	<h4>{detail}</h4>

	<slot />
</div>
