<script lang="ts">
  import Section from "../HomeSection.svelte";
  import NavigationButton from "../NavigationButton.svelte";

  export let tPos: number;
  export let cPos: number;
</script>

<style>
  img {
    width: inherit;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
  }
</style>

<Section title="Motion Designer" {tPos} {cPos}>
  <img alt="me" src="/hypnotized.jpg" slot="content" />
  <span slot="action">
    <NavigationButton href="/motion">more</NavigationButton>
  </span>
</Section>
