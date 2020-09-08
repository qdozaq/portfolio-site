<script lang="ts">
  import Prism from "prismjs";
  import Section from "../HomeSection.svelte";
  import NavigationButton from "../NavigationButton.svelte";

  let code = Prism.highlight(
    `
      const thing = 1; const func = () => thing ?‘yes’: ‘no’;
  `,
    Prism.languages.javascript,
    "javascript"
  );
</script>

<style>
  img {
    width: inherit;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .content {
    width: inherit;
    height: 14rem;
    border-bottom: #fff solid 4px;
    border-right: #fff solid 4px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .content:after {
    content: "";
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40%;
    width: 4px;
  }
  .content:before {
    content: "";
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    height: 4px;
    width: 50%;
    transform: translateX(1px);
  }

  code {
    display: inline-block;
    font-size: 1.2rem;
    margin: 1rem;
    background: none;
    color: #fff;
  }

  @media only screen and (min-width: 32rem) {
    .content:after {
      height: 100%;
    }

    .content:before {
      width: 100%;
    }
  }
  @media only screen and (min-width: 40rem) {
    .content {
      height: 20rem;
    }

    .content:after {
      height: 40%;
    }

    .content:before {
      width: 40%;
    }
  }
</style>

<Section title="Software Developer" {...$$props} load={true}>
  <div class="content" slot="content">
    <code>
      {@html code}
    </code>
  </div>
  <span slot="action" class="actions">
    <NavigationButton href="/experience">experience</NavigationButton>
    <NavigationButton href="/projects">projects</NavigationButton>
  </span>
</Section>
