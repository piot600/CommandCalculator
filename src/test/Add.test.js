import { Add } from '../command/binaryOperations/basicBinOperations/Add.js';

describe('Add command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 10 };
	});

	test('execute: defult 10, add 5, result 15', () => {
		const add = new Add(5);
		const newResult = add.execute(calculator);
		expect(newResult).toBe(15);
	});

	test('undo: default 10, add 3, undo, result 10', () => {
		const add = new Add(3);
		add.execute(calculator);
		const undone = add.undo();
		expect(undone).toBe(10);
	});

	test('execute should update prevResult correctly each time', () => {
		const add = new Add(2);

		calculator.result = 7;
		add.execute(calculator);
		expect(add.prevResult).toBe(7);

		calculator.result = 20;
		add.execute(calculator);
		expect(add.prevResult).toBe(20);
	});
});
