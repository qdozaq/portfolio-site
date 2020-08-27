<script lang="ts">
  import { spring } from "svelte/motion";
  import { quadInOut } from "svelte/easing";
  import { roundDownToMultiple } from "utils";

  export let sections: any[];
  export let progress = 0;
  export let winHeight: number;
  const titleOffsetMultiplier = 2;

  const coords = spring(
    { y: 0 },
    { stiffness: 0.08, damping: 0.9, precision: 0.0005 }
  );

  $: {
    // get the percentage each section takes out of the total progess
    const sectionPct = 100 / (sections.length - 1);

    const currentSection =
      roundDownToMultiple(progress, sectionPct) / sectionPct;

    const pctDoneOfCurrentSection = (progress % sectionPct) / sectionPct;

    // use the pct done on a single section as time for the easing function
    const sectionProgress = quadInOut(pctDoneOfCurrentSection);

    const mappedProgress =
      sectionProgress * sectionPct + sectionPct * currentSection;

    const y = (mappedProgress / sectionPct) * winHeight;
    coords.set({ y: y });
  }
</script>

<style>
  /* .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }
  .waypoint {
    scroll-snap-align: center;
    height: 100vh;
  } */
</style>

<!-- <svelte:window on:resize|passive={handleResize} /> -->
<div class="container" style="height:calc({sections.length} * 100vh)">
  <!-- <div class="container"> -->
  {#each sections as section (section.id)}
    <div class="waypoint" />
    <svelte:component
      this={section.component}
      position={section.id}
      tPos={-$coords.y * titleOffsetMultiplier + winHeight * section.id}
      cPos={-$coords.y} />
  {/each}
</div>
