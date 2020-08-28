<script lang="ts">
  import { spring } from "svelte/motion";
  import { quadInOut } from "svelte/easing";
  import { roundDownToMultiple, roundToNearestMultiple } from "utils";
  import { onMount } from "svelte";

  export let sections: any[];
  export let progress = 0;
  export let winHeight: number;
  let refs: HTMLDivElement[] = [];
  const titleOffsetMultiplier = 2;

  // get the percentage each section takes out of the total progess
  $: sectionPct = 100 / (sections.length - 1);
  $: currentSection = roundToNearestMultiple(progress, sectionPct) / sectionPct;

  const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

  $: {
    const currentSectionFromStart =
      roundDownToMultiple(progress, sectionPct) / sectionPct;

    const pctDoneOfCurrentSection = (progress % sectionPct) / sectionPct;

    // use the pct done on a single section as time for the easing function
    const sectionProgress = quadInOut(pctDoneOfCurrentSection);

    const mappedProgress =
      sectionProgress * sectionPct + sectionPct * currentSectionFromStart;

    const y = (mappedProgress / sectionPct) * winHeight;
    coords.set({ y: y }).then(() => autoScroll());
  }

  function autoScroll() {
    refs[currentSection].scrollIntoView({
      inline: "start",
      block: "start",
      behavior: "smooth",
    });
  }
</script>

<style type="scss">
  @import "../sass/vars.scss";
  h1 {
    position: fixed;
    z-index: 2;
    font-weight: normal;
    font-size: 3rem;
    left: 2rem;
    top: calc(50% - 11.5rem);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    transition: font-size $fast-transition ease-in-out;
  }

  @media only screen and (min-width: 34rem) {
    h1 {
      left: calc(50% - 15rem);
    }
  }

  @media only screen and (min-width: 40rem) {
    h1 {
      font-size: 5rem;
      top: calc(50% - 18.1rem);
    }
  }

  .article {
    display: inline-block;
    opacity: 0;
    transform: translateX(5rem) rotate(30deg);

    transition: opacity 1s cubic-bezier(0.25, 0.63, 0.4, 0.99),
      transform 1s cubic-bezier(0.25, 0.63, 0.4, 0.99);
  }

  .show {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }

  .no-space {
    margin-left: -9.7%;
  }

  .waypoint {
    height: 100vh;
  }
</style>

<h1>
  I'm
  <span class="article" class:show={sections[currentSection].prefix}>a</span>
  <span
    class="article no-space"
    class:show={sections[currentSection].prefix === 'an'}>
    n
  </span>
</h1>
<div class="container" style="height:calc({sections.length} * 100vh)">
  {#each sections as section, index}
    <div class="waypoint" bind:this={refs[index]} />
    <svelte:component
      this={section.component}
      position={index}
      tPos={-$coords.y * titleOffsetMultiplier + winHeight * index}
      cPos={-$coords.y} />
  {/each}
</div>
