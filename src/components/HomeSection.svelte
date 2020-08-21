<script lang="ts">
  export let title: string;
</script>

<style>
  section {
    position: absolute;
    display: grid;
    /* top: 50%;
    left: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  h1 {
    z-index: 2;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    grid-row: 1 / 3;
    grid-column: 2 / 4;
  }

  .content {
    grid-row: 2 / 5;
    grid-column: 3 / 6;
  }

  /* .action {
    grid-row: 4 / 5;
  } */
</style>

<section>
  <div class="content">
    <slot name="content" />
    <div class="action">
      <slot name="action" />
    </div>
  </div>
  <h1>{title}</h1>
</section>
