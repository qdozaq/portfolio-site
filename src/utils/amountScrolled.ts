// from http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml
export function amountscrolled() {
  const winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  const docheight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const scrollTop =
    window.pageYOffset || (document.documentElement || document.body).scrollTop;
  const trackLength = docheight - winheight;
  const pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  return pctScrolled;
}
