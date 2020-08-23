<script lang="ts">
  export let title: string;
</script>

<style type="scss">
  @import "../sass/vars.scss";
  section {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .grid {
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  h1 {
    z-index: 2;
    font-weight: 500;
    font-size: 3rem;
    /* line-height: 56px; */
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    grid-row: 1;
    grid-column: 1 / 3;
    align-self: center;
    justify-self: center;
    margin: 0;
    transition: font-size $fast-transition ease-in-out;
  }

  .content {
    grid-row: 1 / 3;
    grid-column: 2 / 4;
    justify-self: end;
    align-self: end;
    width: 14rem;

    transition: width $fast-transition ease-in-out;
  }

  .action {
    grid-row: 3 / 4;
    grid-column: 2 / 5;
    justify-self: end;
  }

  @media only screen and (min-width: 34rem) {
    section {
      width: 34rem;
    }
  }

  @media only screen and (min-width: 40rem) {
    h1 {
      font-size: 5rem;
    }

    .content {
      width: 20rem;
    }
  }
</style>

<section>
  <div class="grid">
    <div class="content">
      <slot name="content" />
    </div>
    <h1>{title}</h1>
    <div class="action">
      <slot name="action" />
    </div>

  </div>
</section>
