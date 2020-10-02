<script lang="ts">
  import Menu from "components/Menu.svelte";
  import PageTransition from "components/PageTransition.svelte";
  import NavigationButton from "components/NavigationButton.svelte";

  export let segment: string;

  $: hasLayout = segment !== undefined;
</script>

<style type="scss">
  main {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 3rem;
  }

  .back {
    width: 7rem;
  }
  :global(body) {
    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-track {
      background: #000;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #1c1c1c;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar {
      width: 0.8rem;
    }
  }

  @media only screen and (min-width: 40em) {
    main {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .content {
      max-width: 40rem;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
</style>

<svelte:body class:body={hasLayout} />

<svelte:head>
  {#if hasLayout}
    <style>
      body {
        overflow-y: auto;
      }
    </style>
  {/if}
</svelte:head>

{#if hasLayout}
  <main>
    <PageTransition>
      <Menu />
      <div class="back">
        <NavigationButton href="/" point="left">Back</NavigationButton>
      </div>
      <div class="content">
        <slot />
      </div>
    </PageTransition>
  </main>
{:else}
  <PageTransition direction="left">
    <slot />
  </PageTransition>
{/if}
