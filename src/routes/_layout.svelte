<script lang="ts">
  import Menu from "components/Menu.svelte";
  import PageTransition from "components/PageTransition.svelte";

  export let segment: string;

  $: hasLayout = segment !== undefined;
</script>

<style>
  main {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media only screen and (min-width: 40rem) {
    main {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
</style>

{#if hasLayout}
  <main>
    <PageTransition>
      <Menu />
      <slot />
    </PageTransition>
  </main>
{:else}
  <PageTransition direction="left">
    <slot />
  </PageTransition>
{/if}

<!-- <main>
  <Menu />
  <slot />
</main> -->
