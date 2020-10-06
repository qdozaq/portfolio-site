<script context="module" lang="ts">
  import { projects, projectMap } from "./_projects";
  import type { Project } from "./_projects";
  export async function preload(page, session) {
    const { project } = page.query;
    if (project) {
      const index = projectMap[project];
      return { selected: projects[index] };
    }
    return { selected: null };
  }
</script>

<script lang="ts">
  import { send, receive } from "utils/crossfade";

  export let selected: Project | null;

  let hover: string | undefined;

  function play(key: string) {
    return () => {
      hover = key;
    };
  }

  function pause() {
    hover = undefined;
  }
</script>

<style>
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  h2 {
    font-weight: 100;
  }

  img,
  video {
    width: 100%;
  }
  video {
    display: none;
  }

  .container {
    display: grid;
    margin-bottom: 2rem;
  }

  .card {
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s cubic-bezier(0.23, 0.2, 0.09, 1);
  }

  .card:hover {
    transform: scale(1.07);
  }

  .selected-container {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  @media only screen and (min-width: 40em) {
    .card img,
    .card video {
      display: none;
    }
    .card .display {
      display: block;
    }
  }

  @media only screen and (min-width: 50em) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>

<div class="container">
  {#each projects as { key, title }, index}
    {#if !selected || (selected && selected.key !== key)}
      <div class="project" out:send={{ key }} in:receive={{ key }}>
        <h2>{title}</h2>
        <article class="card" on:mouseover={play(key)} on:mouseout={pause}>
          <a href="/projects?project={key}">
            <img alt={title} src="/{key}.jpg" class:display={hover !== key} />
            <video
              playsinline
              autoplay
              muted
              loop
              class:display={hover === key}>
              <source src="/{key}.webm" type="video/webm" />
              <source src="/{key}.mp4" type="video/mp4" />
            </video>
          </a>
        </article>
      </div>
    {/if}
  {/each}
</div>

{#if selected !== null}
  <div class="selected-container">
    {#await selected then { title, key }}
      <div out:send={{ key }} in:receive={{ key }}>
        <h2>{title}</h2>
        <a href="/projects"> <img alt={title} src="/{key}.jpg" /> </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          malesuada lacus et sem scelerisque suscipit. Nulla id eros sit amet
          mauris tempor scelerisque. Aenean erat quam, pellentesque eu
          pellentesque et, semper ac dolor. Cras id diam tempor, placerat tortor
          elementum, consequat urna. Vestibulum ut mi vel quam rutrum fermentum
          eget vitae lorem. Sed luctus nulla ut sollicitudin sagittis. Fusce
          ornare augue ac nisl cursus, eget pretium sapien tristique. Mauris
          porttitor leo nec lobortis posuere. Quisque ante ex, viverra nec augue
          ac, euismod mattis velit. Maecenas faucibus velit in gravida blandit.
          In enim enim, lobortis at magna in, ultrices aliquam augue. Morbi
          lacinia mattis purus, eu sagittis lorem dictum a.
        </p>
      </div>
    {/await}
  </div>
{/if}
