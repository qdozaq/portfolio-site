<script>
  import PageTransition from "components/PageTransition.svelte";
  import NavigationButton from "components/NavigationButton.svelte";
</script>

<style>
  div {
    width: 7rem;
  }
</style>

<PageTransition direction="right">
  <div>
    <NavigationButton href="/" point="left">Back</NavigationButton>
  </div>
  <h1>About</h1>
</PageTransition>
