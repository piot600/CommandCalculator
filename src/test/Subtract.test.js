import { Subtract } from '../command/binaryOperations/basicBinOperations/Subtract.js';

describe('Subtract command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 10 };
	});

	test('execute: default 10, subtract 5, result 5', () => {
		const subtract = new Subtract(5);
		const newResult = subtract.execute(calculator);
		expect(newResult).toBe(5);
	});

	test('undo: default 10, subtract 3, undo, result 10', () => {
		const subtract = new Subtract(3);
		subtract.execute(calculator);
		const undone = subtract.undo();
		expect(undone).toBe(10);
	});

	test('prevResult: stores correct value before each execute', () => {
		const subtract = new Subtract(2);

		calculator.result = 7;
		subtract.execute(calculator);
		expect(subtract.prevResult).toBe(7);

		calculator.result = 20;
		subtract.execute(calculator);
		expect(subtract.prevResult).toBe(20);
	});
});
