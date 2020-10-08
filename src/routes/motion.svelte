<script>
  const url = "https://player.vimeo.com/video/";
  const options = ["title=0", "byline=0", "portrait=0", "color=27bcac"].join(
    "&"
  );

  const videos = [
    {
      title: "Reel 2019",
      id: 308906486,
    },
    {
      title: "Animate NYC Vol. 1",
      id: 446258250,
    },
    {
      title: "CORNDOG",
      id: 455248597,
    },
  ].map((v) => ({ ...v, src: `${url}${v.id}?${options}` }));
</script>

<style>
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  h2 {
    font-weight: 100;
  }

  .container {
    display: grid;
    row-gap: 1rem;
    margin-bottom: 2rem;
  }

  .card {
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
    /* transition: transform 0.4s cubic-bezier(0.23, 0.2, 0.09, 1); */
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin: 0 0.5em;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 70em) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Motion Work</title>
</svelte:head>

<h1>Motion Work</h1>

<div class="container">
  {#each videos as { title, src }}
    <div class="project">
      <h2>{title}</h2>
      <article class="card">
        <iframe class="video" {title} {src} frameborder="0" allowfullscreen />
      </article>
    </div>
  {/each}
</div>
