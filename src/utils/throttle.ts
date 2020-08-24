// https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
// throttle based on animation frame
export function throttle(callback: () => void) {
  let tick = false;
  return () => {
    if (!tick) {
      window.requestAnimationFrame(function () {
        callback();
        tick = false;
      });
      tick = true;
    }
  };
}
