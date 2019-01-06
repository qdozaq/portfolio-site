<template>
  <div class="container">
    <demo/>
    <h1 id="introduction">I'm Paul Mendoza</h1>
    <div>
      <p class="suplimental">This site is still under contruction</p>
      <p class="suplimental">Here's some links:</p>
      <social/>
    </div>
  </div>
</template>

<script>
import Social from "~/components/Social_Icons.vue";
import Demo from "~/components/Demo_Reel.vue";

export default {
  components: {
    Social,
    Demo
  }
};
</script>