/* eslint no-use-before-define: 0 */
// from https://github.com/jashkenas/underscore/blob/master/modules/throttle.js
const now =
	Date.now ||
	function () {
		return new Date().getTime();
	};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle(
	func: Function,
	wait: number,
	options?: { leading?: boolean; trailing?: boolean }
) {
	let timeout, context, args, result;
	let previous = 0;
	if (!options) options = {};

	const later = function () {
		previous = options.leading === false ? 0 : now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};

	const throttled: any = function () {
		const _now = now();
		if (!previous && options.leading === false) previous = _now;
		const remaining = wait - (_now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = _now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};

	throttled.cancel = function () {
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};

	return throttled;
}
