import { Opposite } from '../command/unaryOperations/Opposite.js';

describe('Opposite command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 15 };
	});

	test('execute: default 15, opposite, result -15', () => {
		const opposite = new Opposite();
		const newResult = opposite.execute(calculator);
		expect(newResult).toBe(-15);
	});

	test('undo: opposite of 15, undo, result 15', () => {
		const opposite = new Opposite();
		opposite.execute(calculator);
		const undone = opposite.undo();
		expect(undone).toBe(15);
	});
});
