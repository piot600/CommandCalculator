import { Percent } from '../command/unaryOperations/Percent.js';

describe('Percent command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 200 };
	});

	test('execute: default 200, percent, result 2', () => {
		const percent = new Percent();
		const newResult = percent.execute(calculator);
		expect(newResult).toBe(2);
	});

	test('undo: percent of 200, undo, result 200', () => {
		const percent = new Percent();
		percent.execute(calculator);
		const undone = percent.undo();
		expect(undone).toBe(200);
	});
});
