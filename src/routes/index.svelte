<script lang="ts">
  import HomeSection from "components/HomeSection.svelte";
  import NavigationButton from "components/NavigationButton.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    background-color: #111;
    font-family: Roboto, sans-serif;
    color: #fff;
  }

  img {
    width: inherit;
  }

  .two {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>

<svelte:head>
  <title>I'm Paul Mendoza</title>
</svelte:head>

<main>
  <!-- <HomeSection title="Paul Mendoza">
    <img alt="evening" src="/Evening.jpg" slot="content" />
    <a slot="action">more</a>
  </HomeSection> -->
  <HomeSection title="Paul Mendoza">
    <img alt="me" src="/me.jpg" slot="content" />
    <span slot="action">
      <NavigationButton href="/about">about</NavigationButton>
    </span>
  </HomeSection>
</main>
