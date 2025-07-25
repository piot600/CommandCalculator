import { XpowerY } from '../command/binaryOperations/XpowerY.js';

describe('XpowerY command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 2 };
	});

	test('execute: default 2, power ^3, result 8', () => {
		const cmd = new XpowerY(3);
		const newResult = cmd.execute(calculator);
		expect(newResult).toBe(8);
	});

	test('undo: 2^3, undo, result 2', () => {
		const cmd = new XpowerY(3);
		cmd.execute(calculator);
		expect(cmd.undo()).toBe(2);
	});
});
