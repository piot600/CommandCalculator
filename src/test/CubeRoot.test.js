import { CubeRoot } from '../command/unaryOperations/root/CubeRoot.js';

describe('CubeRoot command', () => {
	let calculator;

	beforeEach(() => {
		calculator = { result: 27 };
	});

	test('execute: default 27, cbrt, result 3', () => {
		const cbrt = new CubeRoot();
		expect(cbrt.execute(calculator)).toBe(3);
	});

	test('undo: cbrt of 27, undo, result 27', () => {
		const cbrt = new CubeRoot();
		cbrt.execute(calculator);
		expect(cbrt.undo()).toBe(27);
	});

	test('execute: cbrt of -8, result -2', () => {
		calculator.result = -8;
		const cbrt = new CubeRoot();
		expect(cbrt.execute(calculator)).toBeCloseTo(-2);
	});
});
