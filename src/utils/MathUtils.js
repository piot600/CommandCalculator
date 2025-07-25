export function powerXY(x, y) {
	if (y === 0) return 0;

	let powerResult = x;
	for (let i = 1; i < y; i++) {
		powerResult *= x;

		if (!Number.isFinite(powerResult)) {
			return Infinity;
		}
	}
	return powerResult;
}

export function rootXY(x, y, precision = 0.00001) {
	if (x > Number.MAX_VALUE) {
		alert('x is larger than Number.MAX_VALUE');
		return Infinity;
	}
	if (y > 5000) {
		alert('In the yth root of x, y cannot be higher than 5000');
		return 0;
	}
	if (x < 0 && y % 2 === 0)
		throw new Error('Cannot take even root of negative number');
	if (x === 0) return 0;

	let guess = x / y;
	let prev;

	do {
		prev = guess;
		let guessToNMinus1 = 1;
		for (let i = 0; i < y - 1; i++) {
			guessToNMinus1 *= guess;
		}
		guess = ((y - 1) * guess + x / guessToNMinus1) / y;
	} while (abs(prev - guess) > precision);
	guess = Number(guess.toFixed(12));
	return guess;
}

function abs(num) {
	return num < 0 ? -num : num;
}

export function factorial(n) {
	if (n < 0) throw new Error('Cannot factorial negative number');
	if (n === 0) return 1;

	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;

		if (!Number.isFinite(result)) {
			return Infinity;
		}
	}
	return result;
}
