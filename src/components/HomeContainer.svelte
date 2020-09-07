<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import { roundDownToMultiple, roundToNearestMultiple, progress } from "utils";
  import Chevron from "icons/Chevron.svelte";

  export let sections: any[];
  export let winHeight: number;
  const titleOffsetMultiplier = 2;

  // get the percentage each section takes out of the total progess
  $: sectionPct = 100 / (sections.length - 1);
  $: currentSection =
    roundToNearestMultiple($progress, sectionPct) / sectionPct;

  const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

  $: {
    const currentSectionFromStart =
      roundDownToMultiple($progress, sectionPct) / sectionPct;

    const pctDoneOfCurrentSection = ($progress % sectionPct) / sectionPct;

    // use the pct done on a single section as time for the easing function
    const sectionProgress = quadInOut(pctDoneOfCurrentSection);

    const mappedProgress =
      sectionProgress * sectionPct + sectionPct * currentSectionFromStart;

    const y = (mappedProgress / sectionPct) * winHeight;
    coords.set({ y }).then(() => {
      progress.set(currentSection * sectionPct);
    });
  }

  function onContinue() {
    if (currentSection + 1 < sections.length) {
      progress.set((currentSection + 1) * sectionPct);
    }
  }

  function onBack() {
    if (currentSection - 1 >= 0) {
      progress.set((currentSection - 1) * sectionPct);
    }
  }
</script>

<style type="scss">
  @import "../sass/vars.scss";

  h1 {
    position: fixed;
    z-index: 2;
    font-weight: normal;
    font-size: 3rem;
    left: 2rem;
    top: calc(50% - 11.5rem);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    transition: font-size $fast-transition ease-in-out;
  }

  .nav {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    border: none;
    background: none;
    width: 100%;
    padding: 0;
    margin: 0;
    color: #fff;

    &.continue {
      bottom: 0;
      &:hover {
        & > .chev {
          transform: translateY(0.5rem);
        }
      }
    }

    &.back {
      top: 0;
      &:hover {
        & > .chev {
          transform: translateY(-0.5rem);
        }
      }
    }

    &:active {
      color: #40bdce;
    }
  }
  .chev {
    display: inline-block;
    width: 100%;
    height: 1.3rem;
    padding: 2rem 0;

    transition: transform 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95);
  }

  .nav:focus > .chev {
    border-top: #40bdce 1px solid;
  }
  .nav:focus,
  .chev:focus {
    outline: none;
  }

  @media only screen and (min-width: 34rem) {
    h1 {
      left: calc(50% - 15rem);
    }
  }

  @media only screen and (min-width: 40rem) {
    h1 {
      font-size: 5rem;
      top: calc(50% - 18.1rem);
    }
  }

  .article {
    display: inline-block;
    opacity: 0;
    transform: translateX(5rem) rotate(30deg);

    transition: opacity 1s cubic-bezier(0.25, 0.63, 0.4, 0.99),
      transform 1s cubic-bezier(0.25, 0.63, 0.4, 0.99);
  }

  .show {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }

  .no-space {
    margin-left: -9.7%;
  }
</style>

<h1>
  I'm <span class="article" class:show={sections[currentSection].prefix}>a</span>
  <span
    class="article no-space"
    class:show={sections[currentSection].prefix === 'an'}>
    n
  </span>
</h1>
{#each sections as section, index}
  <svelte:component
    this={section.component}
    position={index}
    tPos={-$coords.y * titleOffsetMultiplier + winHeight * index}
    cPos={-$coords.y} />
{/each}

{#if currentSection > 0}
  <button class="nav back" on:click={onBack} transition:fade>
    <span class="chev" tabindex="-1">
      <Chevron rotation={-90} />
    </span>
  </button>
{/if}

{#if currentSection < sections.length - 1}
  <button class="nav continue" on:click={onContinue} transition:fade>
    <span class="chev" tabindex="-1">
      <Chevron rotation={90} />
    </span>
  </button>
{/if}
