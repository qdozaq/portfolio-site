import Me from "./Me.svelte";
import Motion from "./Motion.svelte";
import Artist from "./Artist.svelte";
import Developer from "./Developer.svelte";
import Contact from "./Contact.svelte";

// export default [Me, Motion, Motion].map((component, id) => ({ component, id }));

export default [
  { component: Me },
  { component: Motion, prefix: "a" },
  { component: Artist, prefix: "an" },
  { component: Developer, prefix: "a" },
  { component: Contact },
];
