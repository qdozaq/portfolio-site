<script lang="ts">
  import HomeSection from "components/HomeSection.svelte";
  import NavigationButton from "components/NavigationButton.svelte";
  import Progressbar from "components/HomeProgressbar.svelte";
  import { amountscrolled } from "utils";

  let progress = 0;
  function handleScroll() {
    progress = amountscrolled();
    console.log(progress);
  }
</script>

<style>
  :global(body) {
    margin: 0;
    background-color: #111;
    font-family: Roboto, sans-serif;
    color: #fff;
  }
  main {
    height: calc(5 * 100vh);
  }

  img {
    width: inherit;
  }

  .two {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>

<svelte:head>
  <title>I'm Paul Mendoza</title>
</svelte:head>

<svelte:window on:scroll={handleScroll} />

<main>
  <HomeSection title="Paul Mendoza">
    <img alt="me" src="/me.jpg" slot="content" />
    <span slot="action">
      <NavigationButton href="/about">about</NavigationButton>
    </span>
  </HomeSection>
  <Progressbar {progress} />
</main>
