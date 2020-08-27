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

  const coords = spring(
    { y: 0 },
    { stiffness: 0.08, damping: 0.9, precision: 0.0001 }
  );

  $: {
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

  function autoScroll() {
    setTimeout(() => {
      const currentSection =
        roundToNearestMultiple(progress, sectionPct) / sectionPct;

      refs[currentSection].scrollIntoView({
        inline: "start",
        behavior: "auto",
      });

      autoScroll();
    }, 2000);
  }

  onMount(() => {
    autoScroll();
  });
</script>

<style>
  .waypoint {
    height: 100vh;
  }
</style>

<div class="container" style="height:calc({sections.length} * 100vh)">
  {#each sections as section (section.id)}
    <div class="waypoint" bind:this={refs[section.id]} />
    <svelte:component
      this={section.component}
      position={section.id}
      tPos={-$coords.y * titleOffsetMultiplier + winHeight * section.id}
      cPos={-$coords.y} />
  {/each}
</div>
