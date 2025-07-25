import { Factorial } from '../command/unaryOperations/Factorial.js';

describe('Factorial command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 5 };
	});

	test('execute: default 5, factorial, result 120', () => {
		const factorial = new Factorial();
		const newResult = factorial.execute(calculator);
		expect(newResult).toBe(120);
	});

	test('undo: factorial of 5, undo, result 5', () => {
		const factorial = new Factorial();
		factorial.execute(calculator);
		const undone = factorial.undo();
		expect(undone).toBe(5);
	});
});
