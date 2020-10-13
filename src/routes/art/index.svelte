<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";
  import type { ImgurResponse, Image, Album } from "./_types/Image";

  export const preload: Preload = async function (this) {
    const res = await this.fetch(
      "https://api.imgur.com/3/account/qdozaq/submissions/0/",
      { headers: { Authorization: "Client-ID 560d63208b6627b" } }
    );

    if (res.status !== 200) {
      this.error(500, "Can't fetch images");
      return;
    }

    const { data }: ImgurResponse = await res.json();

    const images = data.map((obj) => ({
      ...obj,
      thumbnail: obj.is_album ? obj.cover : obj.id,
    }));

    return { images };
  };
</script>

<script lang="ts">
  export let images: Array<Image | Album>;
</script>

<style>
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }

  .grid {
    display: grid;
    justify-items: center;

    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    column-gap: 0.5rem;
    row-gap: 0.5rem;
  }

  @media only screen and (min-width: 22.5em) {
    img {
      width: 10rem;
      height: 10rem;
    }
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
  }

  @media only screen and (min-width: 40em) {
    img {
      width: 12rem;
      height: 12rem;
    }
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
  }

  @media only screen and (min-width: 70em) {
    img {
      width: 20rem;
      height: 20rem;
    }
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
  }
</style>

<svelte:head>
  <title>Art</title>
</svelte:head>

<h1>Art</h1>
<div class="grid">
  {#each images as img}
    <img
      alt={img.title}
      title={img.title}
      src="https://i.imgur.com/{img.thumbnail}t.jpg"
      sizes="(min-width: 40em) and (max-width:70em) 12rem, (min-width: 70em) 25rem,  8rem"
      srcset="
      https://i.imgur.com/{img.thumbnail}t.jpg 160w,
      https://i.imgur.com/{img.thumbnail}m.jpg 320w,
      https://i.imgur.com/{img.thumbnail}l.jpg 640w" />
  {/each}
</div>