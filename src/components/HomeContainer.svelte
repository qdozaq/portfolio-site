<script lang="ts">
  export let sections: any[];
  export let active: number;
</script>

<svelte:component this={sections[active]} />
