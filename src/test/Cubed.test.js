import { Cubed } from '../command/unaryOperations/power/Cubed.js';

describe('Cubed command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 3 };
	});

	test('execute: default 3, cubed, result 27', () => {
		const cubed = new Cubed();
		const newResult = cubed.execute(calculator);
		expect(newResult).toBe(27);
	});

	test('undo: cubed 3, undo, result 3', () => {
		const cubed = new Cubed();
		cubed.execute(calculator);
		expect(cubed.undo()).toBe(3);
	});
});
