import Me from "./Me.svelte";
import Motion from "./Motion.svelte";
import Artist from "./Artist.svelte";

// export default [Me, Motion, Motion].map((component, id) => ({ component, id }));

export default [
  { component: Me },
  { component: Motion, prefix: "a" },
  { component: Artist, prefix: "an" },
];
