<script lang="ts">
  import HomeSection from "components/HomeSection.svelte";
  import NavigationButton from "components/NavigationButton.svelte";
  import HomeContainer from "components/HomeContainer.svelte";
  import Progressbar from "components/HomeProgressbar.svelte";
  import sections from "components/sections";
  import { amountScrolled, getWindowHeight, getDocHeight } from "utils";
  import { onMount } from "svelte";

  let progress = 0;
  let docHeight = 0;
  let winHeight = 0;

  function handleScroll() {
    progress = amountScrolled(docHeight, winHeight);
  }

  function handleResize() {
    docHeight = getDocHeight();
    winHeight = getWindowHeight();
  }
  // function handleScroll(e: WheelEvent) {
  //   progress += e.deltaY / 50;
  //   console.log(e.deltaY);
  // }

  onMount(() => {
    docHeight = getDocHeight();
    winHeight = getWindowHeight();
  });
</script>

<style>
  :global(body) {
    margin: 0;
    background-color: #111;
    font-family: Roboto, sans-serif;
    color: #fff;
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

<svelte:window
  on:scroll|passive={handleScroll}
  on:resize|passive={handleResize} />

<main>
  <HomeContainer {progress} {sections} {winHeight} />
  <!-- <HomeSection title="Paul Mendoza">
    <img alt="me" src="/me.jpg" slot="content" />
    <span slot="action">
      <NavigationButton href="/about">about</NavigationButton>
    </span>
  </HomeSection> -->
  <Progressbar {progress} sections={sections.length} />
</main>
