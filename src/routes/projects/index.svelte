<script context="module">
  export async function preload(page, session) {
    const { project } = page.query;

    return { selectedProject: project };
  }
</script>

<script lang="ts">
  import { projects } from "./_projects";
  import { send, receive } from "utils/crossfade";

  export let selectedProject: string;
  $: console.log(selectedProject);

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

  @media only screen and (min-width: 40em) {
    img,
    video {
      display: none;
    }
    .display {
      display: block;
    }
  }

  @media only screen and (min-width: 50em) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 2rem;
    }

    .project {
    }
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>

<div class="container">
  {#each projects as { key, title }}
    <div class="project">
      <h2>{title}</h2>
      <article class="card" on:mouseover={play(key)} on:mouseout={pause}>
        <a href="/projects?project={key}">
          <img
            alt={title}
            src="/{key}.jpg"
            class:display={hover !== key}
            out:send={{ key }}
            in:receive={{ key }} />
          <video playsinline autoplay muted loop class:display={hover === key}>
            <source src="/{key}.webm" type="video/webm" />
            <source src="/{key}.mp4" type="video/mp4" />
          </video>
        </a>
      </article>
    </div>
  {/each}
</div>
