import Me from "./Me.svelte";
import Motion from "./Motion.svelte";
import Artist from "./Artist.svelte";
import Developer from "./Developer.svelte";
import Contact from "./Contact.svelte";

export default [
  { component: Me },
  { component: Developer, prefix: "a" },
  { component: Motion, prefix: "a" },
  { component: Artist, prefix: "an" },
  { component: Contact },
];
