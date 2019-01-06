
<template>
  <section id="demo-reel">
    <div class="iframe-wrapper">
      <iframe
        src="https://player.vimeo.com/video/308906486?title=0&byline=0&portrait=0"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </section>
</template>

<style lang="scss">
#demo-reel {
  width: 100vw;
  @media (min-width: 768px) {
    width: 768px;
  }
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin: 0 0.5em;
}

</style>
