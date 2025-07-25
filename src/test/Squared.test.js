import { Squared } from '../command/unaryOperations/power/Squared.js';

describe('Squared command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 5 };
	});

	test('execute: default 5, squared, result 25', () => {
		const squared = new Squared();
		const newResult = squared.execute(calculator);
		expect(newResult).toBe(25);
	});

	test('undo: squared 5, undo, result 5', () => {
		const squared = new Squared();
		squared.execute(calculator);
		expect(squared.undo()).toBe(5);
	});
});
