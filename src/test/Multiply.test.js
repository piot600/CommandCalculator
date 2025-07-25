import { Multiply } from '../command/binaryOperations/basicBinOperations/Multiply.js';

describe('Multiply command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 10 };
	});

	test('execute: default 10, multiply by 2, result 20', () => {
		const multiply = new Multiply(2);
		const newResult = multiply.execute(calculator);
		expect(newResult).toBe(20);
	});

	test('undo: default 10, multiply by 3, undo, result 10', () => {
		const multiply = new Multiply(3);
		multiply.execute(calculator);
		const undone = multiply.undo();
		expect(undone).toBe(10);
	});

	test('prevResult: stores correct value before each execute', () => {
		const multiply = new Multiply(2);

		calculator.result = 7;
		multiply.execute(calculator);
		expect(multiply.prevResult).toBe(7);

		calculator.result = 20;
		multiply.execute(calculator);
		expect(multiply.prevResult).toBe(20);
	});
});
