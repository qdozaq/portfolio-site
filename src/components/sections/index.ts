import Me from "./Me.svelte";
import Motion from "./Motion.svelte";

export default [Me, Motion].map((component, id) => ({ component, id }));
