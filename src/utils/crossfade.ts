// https://dev.to/buhrmi/svelte-component-transitions-5ie
import { quintOut } from "svelte/easing";
import { crossfade, scale } from "svelte/transition";
const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback: scale,
});

export { send, receive };
