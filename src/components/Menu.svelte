<script>
</script>

<style type="scss">
  button {
    border: none;
    background: none;
    margin-top: 1rem;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5rem;
    color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);

    transition: color 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95),
      box-shadow 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95),
      transform 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95);

    &:hover {
      color: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
      transform: scale(1.05);
    }

    svg {
      width: inherit;
      height: inherit;

      rect {
        fill: currentColor;
      }
    }
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 40rem) {
  }
</style>

<nav>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" />
      <rect x="24" y="58.78" width="80" height="10.43" rx="4.94" />
      <rect x="24" y="82.26" width="80" height="10.43" rx="4.94" />
      <rect x="24" y="35.3" width="80" height="10.43" rx="4.94" />
    </svg>
  </button>
</nav>
