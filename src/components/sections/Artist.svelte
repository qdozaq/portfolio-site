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

<Section title="Artist" {...$$props}>
  <img alt="me" src="/hypnotized.jpg" slot="content" />
  <span slot="action">
    <NavigationButton href="/art">more</NavigationButton>
  </span>
</Section>
