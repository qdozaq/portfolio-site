<script lang="ts">
  import HomeContainer from "components/HomeContainer.svelte";
  import Progressbar from "components/HomeProgressbar.svelte";
  import sections from "components/sections";
  import { getWindowHeight, progress, scrollEnabled } from "utils";
  import { onMount } from "svelte";

  let winHeight = 0;
  let prevDrag = 0;

  function handleResize() {
    winHeight = getWindowHeight();
    window.scrollTo({ top: 0 });
  }

  function handleScroll(e: WheelEvent) {
    if (!$scrollEnabled) return;

    progress.update((prog) => {
      const p = prog + e.deltaY / 25;
      return p > 100 ? 100 : p < 0 ? 0 : p;
    });
  }

  function handleDrag(e: TouchEvent) {
    if (!$scrollEnabled) return;

    const y = e?.targetTouches[0]?.screenY ?? 0;
    switch (e.type) {
      case "touchstart":
        prevDrag = y;
        return;
      case "touchend":
        prevDrag = 0;
        return;
    }

    const dy = prevDrag - y;

    progress.update((prog) => {
      const p = prog + dy / 5;
      return p > 100 ? 100 : p < 0 ? 0 : p;
    });

    prevDrag = y;
  }

  onMount(() => {
    winHeight = getWindowHeight();
  });
</script>

<style>
  :global(body) {
    overflow: hidden;
    margin: 0;
    background-color: #111;
    font-family: Roboto, sans-serif;
    color: #fff;
    height: 100vh;
  }

  main {
    touch-action: none;
    width: 100vw;
    background: red;
  }
</style>

<svelte:head>
  <title>I'm Paul Mendoza</title>
</svelte:head>

<svelte:window
  on:wheel|passive={handleScroll}
  on:resize|passive={handleResize}
  on:orientationchange|passive={handleResize} />

<svelte:body
  on:touchmove|passive={handleDrag}
  on:touchstart={handleDrag}
  on:touchend={handleDrag} />

<HomeContainer {sections} {winHeight} />
<Progressbar sections={sections.length} />
