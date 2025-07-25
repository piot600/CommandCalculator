import { Fraction } from '../command/unaryOperations/Fraction.js';

describe('Fraction command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 4 };
	});

	test('execute: default 4, reciprocal, result 0.25', () => {
		const fraction = new Fraction();
		const newResult = fraction.execute(calculator);
		expect(newResult).toBe(0.25);
	});

	test('undo: reciprocal of 4, undo, result 4', () => {
		const fraction = new Fraction();
		fraction.execute(calculator);
		const undone = fraction.undo();
		expect(undone).toBe(4);
	});

	test('throws: reciprocal of 0 should throw error', () => {
		calculator.result = 0;
		const fraction = new Fraction();
		expect(() => fraction.execute(calculator)).toThrow(
			'Cannot calculate reciprocal of zero',
		);
	});
});
