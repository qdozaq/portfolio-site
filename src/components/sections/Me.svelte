<script lang="ts">
  import Section from "../HomeSection.svelte";
  import NavigationButton from "../NavigationButton.svelte";
</script>

<style>
  img {
    width: 14rem;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 40rem) {
    img {
      width: 20rem;
      height: auto;
    }
  }
</style>

<Section title="Paul Mendoza" {...$$props}>
  <img
    alt="me"
    src="/me.jpg"
    width="14rem"
    height="296.18"
    sizes="(min-width: 40rem) 20rem, 14rem"
    slot="content" />
  <span slot="action">
    <NavigationButton href="/about">about</NavigationButton>
  </span>
</Section>
