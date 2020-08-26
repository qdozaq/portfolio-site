<script lang="ts">
  import { spring } from "svelte/motion";

  export let sections: any[];
  export let progress = 0;

  const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

  $: coords.set({ y: progress * 10 });
</script>

<style>

</style>

<div class="container" style="height:calc({sections.length} * 100vh)">
  {#each sections as section (section.id)}
    <svelte:component
      this={section.component}
      tPos={-$coords.y * 1.2 + 543 * section.id}
      cPos={-$coords.y + 543 * section.id} />
  {/each}
</div>
