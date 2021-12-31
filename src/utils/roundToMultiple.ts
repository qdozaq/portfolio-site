export function roundToNearestMultiple(n: number, multiple: number) {
	const divide = multiple / (n % multiple);

	const nearest =
		divide >= 2 ? Math.floor(n / multiple) * multiple : Math.ceil(n / multiple) * multiple;

	return nearest;
}

export function roundDownToMultiple(n: number, m: number) {
	return Math.floor(n / m) * m;
}
