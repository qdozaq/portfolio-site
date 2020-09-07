<script lang="ts">
  import Section from "../HomeSection.svelte";
  import NavigationButton from "../NavigationButton.svelte";
</script>

<style>
  img {
    width: inherit;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
  }
</style>

<Section title="Paul Mendoza" {...$$props}>
  <img alt="me" src="/me.jpg" slot="content" />
  <span slot="action">
    <NavigationButton href="/about">about</NavigationButton>
  </span>
</Section>
