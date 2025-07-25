import { Divide } from '../command/binaryOperations/basicBinOperations/Divide.js';

describe('Divide command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 20 };
	});

	test('execute: default 20, divide by 4, result 5', () => {
		const divide = new Divide(4);
		const newResult = divide.execute(calculator);
		expect(newResult).toBe(5);
	});

	test('undo: default 20, divide by 2, undo, result 20', () => {
		const divide = new Divide(2);
		divide.execute(calculator);
		const undone = divide.undo();
		expect(undone).toBe(20);
	});

	test('prevResult: stores correct value before each execute', () => {
		const divide = new Divide(2);

		calculator.result = 8;
		divide.execute(calculator);
		expect(divide.prevResult).toBe(8);

		calculator.result = 100;
		divide.execute(calculator);
		expect(divide.prevResult).toBe(100);
	});

	test('throws: divide by 0 should throw error', () => {
		const divide = new Divide(0);
		expect(() => divide.execute(calculator)).toThrow("You can't divide by 0");
	});
});
