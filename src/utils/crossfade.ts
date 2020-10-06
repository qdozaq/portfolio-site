import { quintInOut } from "svelte/easing";
import { crossfade, scale } from "svelte/transition";

const [send, receive] = crossfade({
  duration: 400,
  easing: quintInOut,
  fallback: (node, params) =>
    scale(node, { ...params, duration: 400, easing: quintInOut }),
});

export { send, receive };
