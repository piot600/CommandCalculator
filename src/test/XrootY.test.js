import { XrootY } from '../command/binaryOperations/XrootY.js';

describe('XrootY command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 81 };
	});

	test('execute: default 81, root ^4, result 3', () => {
		const xrooty = new XrootY(4);
		expect(xrooty.execute(calculator)).toBe(3);
	});

	test('undo: root ^4 of 81, undo, result 81', () => {
		const xrooty = new XrootY(4);
		xrooty.execute(calculator);
		expect(xrooty.undo()).toBe(81);
	});

	test('throws: even root of negative number', () => {
		calculator.result = -16;
		const xrooty = new XrootY(2);
		expect(() => xrooty.execute(calculator)).toThrow(
			'Cannot take even root of negative number',
		);
	});

	test('execute: odd root of negative number', () => {
		calculator.result = -27;
		const xrooty = new XrootY(3);
		expect(xrooty.execute(calculator)).toBeCloseTo(-3);
	});
});
