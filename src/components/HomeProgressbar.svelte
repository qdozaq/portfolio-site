<script lang="ts">
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { amountscrolled } from "utils";
  export let progress: number = 0;
  export let sections: number = 5;

  const coords = spring({ y: 0 });

  let containerRef: HTMLDivElement;
  let containerHeight: number;

  $: coords.set({ y: (containerHeight * progress) / 100 });

  function handleResize() {
    containerHeight = containerRef.getBoundingClientRect().height;
  }

  onMount(() => {
    containerHeight = containerRef.getBoundingClientRect().height;
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
  <div class="circle glow" style="transform:translateY({$coords.y}px)" />
</div>
