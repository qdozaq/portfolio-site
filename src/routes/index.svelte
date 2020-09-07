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
  let initialDrag = 0;

  // function handleScroll() {
  //   const p = amountScrolled(docHeight, winHeight);
  //   progress = p > 100 ? 100 : p < 0 ? 0 : p;
  // }

  function handleResize() {
    docHeight = getDocHeight();
    winHeight = getWindowHeight();
  }

  function handleScroll(e: WheelEvent) {
    const p = progress + e.deltaY / 50;
    progress = p > 100 ? 100 : p < 0 ? 0 : p;
  }

  function handleDrag(e: TouchEvent) {
    const y = e?.targetTouches[0]?.screenY ?? 0;
    // console.log(e);
    switch (e.type) {
      case "touchstart":
        initialDrag = y;
        return;
      case "touchmove":
        break;
      case "touchend":
        initialDrag = 0;
        return;
      default:
        console.log(e);
    }

    const dy = initialDrag - y;
    const p = progress + dy / 200;
    progress = p > 100 ? 100 : p < 0 ? 0 : p;
    console.log(dy, progress);
  }

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

  main {
    touch-action: none;
  }
</style>

<svelte:head>
  <title>I'm Paul Mendoza</title>
</svelte:head>

<svelte:window
  on:wheel|passive={handleScroll}
  on:resize|passive={handleResize} />

<main
  on:touchmove|passive={handleDrag}
  on:touchstart={handleDrag}
  on:touchend={handleDrag}>
  <HomeContainer {progress} {sections} {winHeight} />
  <!-- <HomeSection title="Paul Mendoza">
    <img alt="me" src="/me.jpg" slot="content" />
    <span slot="action">
      <NavigationButton href="/about">about</NavigationButton>
    </span>
  </HomeSection> -->
  <Progressbar {progress} sections={sections.length} />
</main>
