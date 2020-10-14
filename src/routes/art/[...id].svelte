<script context="module" lang="ts">
  // import type { Preload } from "@sapper/common";
  import type { Image, Album } from "./_types/Image";
  export const preload = async function ({ params }) {
    const [v1, v2] = params.id;
    const isAlbum = v1 === "a";

    const endpoint = `https://api.imgur.com/3/${
      isAlbum ? "album/" + v2 : "image/" + v1
    }`;

    const res = await this.fetch(endpoint, {
      headers: { Authorization: "Client-ID 560d63208b6627b" },
    });

    if (res.status !== 200) {
      this.error(500, "Can't fetch images");
      return;
    }

    const { data }: { data: Image | Album } = await res.json();

    return { data };
  };
</script>

<script lang="ts">
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
  import { send, receive } from "utils/crossfade";

  export let data: Image | Album;

  function back() {
    goto("/art", { noscroll: true });
  }
</script>

<style>
  h2 {
    font-weight: 100;
  }

  .close {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    cursor: pointer;
  }

  .container {
    position: absolute;
    background: #111;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  img,
  video {
    width: 100%;
    height: auto;
  }

  .content {
    margin: 1rem;
    margin-bottom: 6rem;
  }

  a {
    display: block;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 50em) {
    .content {
      margin: 3rem 2rem;
    }
  }

  @media only screen and (min-width: 70em) {
    .content {
      width: calc(70rem - 4rem);
      margin: auto;
      margin-top: 3rem;
    }
  }
</style>

<div class="container" transition:fade on:click|self={back}>
  <div class="content">
    <div class="header" on:click={back}>
      <h2>
        {@html data.title}
      </h2>
      <button name="close" class="close">&#10005</button>
    </div>
    {#if data.is_album}
      {#each data.images as image, index}
        {#if image.animated}
          <video
            out:send={index === 0 && { key: data.id }}
            in:receive={index === 0 && { key: data.id }}
            playsinline
            autoplay
            muted
            loop
            height={image.height}
            width={image.width}>
            <source src={image.mp4} type={image.type} />
          </video>
        {:else}
          <img
            alt={image.title}
            width={image.width}
            height={image.height}
            out:send={index === 0 && { key: data.id }}
            in:receive={index === 0 && { key: data.id }}
            src="https://i.imgur.com/{image.id}l.jpg"
            srcset="
              https://i.imgur.com/{image.id}l.jpg 640w,
              https://i.imgur.com/{image.id}h.jpg 1024w
          " />
        {/if}
        <a target="_blank" rel="noopener noreferrer" href={image.link}>Full Size</a>
        {#if data.description}
          <p>{data.description}</p>
        {/if}
      {/each}
    {:else}
      {#if data.animated}
        <video
          out:send={{ key: data.id }}
          in:receive={{ key: data.id }}
          playsinline
          autoplay
          muted
          loop
          height={data.height}
          width={data.width}>
          <source src={data.mp4} type={data.type} />
        </video>
      {:else}
        <img
          alt={data.title}
          width={data.width}
          height={data.height}
          out:send={{ key: data.id }}
          in:receive={{ key: data.id }}
          src="https://i.imgur.com/{data.id}l.jpg"
          srcset="
              https://i.imgur.com/{data.id}l.jpg 640w,
              https://i.imgur.com/{data.id}h.jpg 1024w
          " />
      {/if}
      <a target="_blank" rel="noopener noreferrer" href={data.link}>Full Size</a>
      {#if data.description}
        <p>{data.description}</p>
      {/if}
    {/if}
  </div>
</div>
