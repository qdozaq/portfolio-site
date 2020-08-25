<script lang="ts">
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { roundToMultiple } from "utils";
  export let progress: number = 0;
  export let sections: number = 5;

  const coords = spring(
    { y: 0 },
    { stiffness: 0.1, damping: 1, precision: 0.01 }
  );

  let containerRef: HTMLDivElement;
  let containerHeight = 0;

  $: {
    // The percentage each section is out of the whole
    const sectionPct = 100 / (sections - 1);
    const y =
      Math.round(roundToMultiple(progress, sectionPct) * containerHeight) / 100;

    coords.set({ y });
  }

  function handleResize() {
    containerHeight = containerRef.getBoundingClientRect().height - 4;
  }

  onMount(() => {
    // 4 to offset for the pixel radius of the circle
    containerHeight = containerRef.getBoundingClientRect().height - 4;
  });
</script>

<style type="scss">
  .container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    flex-direction: column;
    height: 50%;
    margin-left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .circle {
    width: 4px;
    height: 4px;
    background: #3c3c3c;
    border-radius: 1rem;

    &.glow {
      width: 5px;
      height: 5px;
      background: #fff;
      box-shadow: 0 0 5px #fff;
      position: absolute;
      top: 0;
    }
  }

  @media only screen and (min-width: 50rem) {
    .container {
      margin-left: 2rem;
    }
  }
</style>

<svelte:window on:resize={handleResize} />
<div class="container" bind:this={containerRef}>
  {#each Array(sections) as _}
    <div class="circle" />
  {/each}
  <div class="circle glow" style="transform:translateY({$coords.y}px);" />
</div>
