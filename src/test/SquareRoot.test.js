import { SquareRoot } from '../command/unaryOperations/root/SquareRoot.js';

describe('SquareRoot command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 25 };
	});

	test('execute: default 25, sqrt, result 5', () => {
		const sqrt = new SquareRoot();
		expect(sqrt.execute(calculator)).toBe(5);
	});

	test('undo: sqrt of 25, undo, result 25', () => {
		const sqrt = new SquareRoot();
		sqrt.execute(calculator);
		expect(sqrt.undo()).toBe(25);
	});

	test('throws: sqrt of -4 throws error', () => {
		calculator.result = -4;
		const sqrt = new SquareRoot();
		expect(() => sqrt.execute(calculator)).toThrow(
			'Cannot take even root of negative number',
		);
	});
});
