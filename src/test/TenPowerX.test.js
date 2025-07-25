import { TenPowerX } from '../command/unaryOperations/power/TenPowerX.js';

describe('TenPowerX command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 3 };
	});

	test('execute: default 3, 10^3, result 1000', () => {
		const cmd = new TenPowerX();
		const newResult = cmd.execute(calculator);
		expect(newResult).toBe(1000);
	});

	test('undo: 10^3, undo, result 3', () => {
		const cmd = new TenPowerX();
		cmd.execute(calculator);
		expect(cmd.undo()).toBe(3);
	});
});
