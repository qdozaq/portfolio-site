<script lang="ts">
  import Section from "../HomeSection.svelte";
  import NavigationButton from "../NavigationButton.svelte";

</script>

<style>
  img {
    width: 14rem;
    height: auto;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 40em) {
    img {
      width: 20rem;
      height: auto;
    }
  }

</style>

<Section title="Paul Mendoza" {...$$props}>
  <img alt="me" src="/me_2.jpg" width="400px" height="520px" slot="content" />
  <span slot="action">
    <NavigationButton href="/about" seoText="About Me">about</NavigationButton>
  </span>
</Section>
