<script lang="ts">
  import PageTransition from "components/PageTransition.svelte";
  import HomeContainer from "components/HomeContainer.svelte";
  import Progressbar from "components/HomeProgressbar.svelte";
  import sections from "components/sections";
  import { getWindowHeight, progress, scrollEnabled, throttle } from "utils";
  import { onMount } from "svelte";

  let winHeight = 0;
  let prevDrag = 0;
  let prevDirection = 0;

  function handleResize() {
    winHeight = getWindowHeight();
    window.scrollTo({ top: 0 });
  }

  function handleScroll(e: WheelEvent) {
    if (!$scrollEnabled) return;

    const direction = Math.sign(e.deltaY);
    if (direction !== prevDirection) throttledScroll.cancel();
    prevDirection = direction;

    throttledScroll(e, direction);
  }

  function updateProgress(dy: number) {
    progress.update((prog) => {
      const p = prog + dy;
      return p > 100 ? 100 : p < 0 ? 0 : p;
    });
  }

  // should offer consitent scroll across different browsers and devices
  const throttledScroll = throttle(function scroll(
    e: WheelEvent,
    direction: number
  ) {
    updateProgress(3 * direction);
  },
  100);

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

    updateProgress(dy / 18);

    prevDrag = y;
  }

  function handleKeydown(e: KeyboardEvent) {
    let dy = 0;
    switch (e.key.toUpperCase()) {
      case "ARROWUP":
        dy = -5;
        break;
      case "ARROWDOWN":
        dy = 5;
        break;
      default:
        return;
    }

    updateProgress(dy);
  }

  onMount(() => {
    winHeight = getWindowHeight();
  });
</script>

<svelte:head>
  <title>I'm Paul Mendoza</title>
</svelte:head>

<svelte:window
  on:wheel|passive={handleScroll}
  on:resize|passive={handleResize}
  on:orientationchange|passive={handleResize}
  on:keydown={handleKeydown} />

<svelte:body
  class:noscroll={true}
  on:touchmove|passive={handleDrag}
  on:touchstart={handleDrag}
  on:touchend={handleDrag} />

<PageTransition direction="left">
  <HomeContainer {sections} {winHeight} />
  <Progressbar sections={sections.length} {winHeight} />
</PageTransition>
