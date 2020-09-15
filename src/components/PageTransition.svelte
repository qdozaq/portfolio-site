<script lang="ts">
  import { sineOut, quadOut, quadIn } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let direction: "left" | "right";

  function flyPage(
    node: Element,
    { phase, direction }: { phase: "in" | "out"; direction: "left" | "right" }
  ) {
    return fly(node, {
      delay: phase === "in" ? 300 : 0,
      duration: 500,
      easing: phase === "out" ? quadIn : quadOut,
      x: (direction === "left" ? -1 : 1) * window.innerWidth * 0.8,
      opacity: 0,
    });
  }
</script>

<style>
  main {
    height: 100vh;
    width: 100wh;
  }
</style>

<main
  in:flyPage|local={{ phase: 'in', direction }}
  out:flyPage|local={{ phase: 'out', direction }}>
  <slot />
</main>
