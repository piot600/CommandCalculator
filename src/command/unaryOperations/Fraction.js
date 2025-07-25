export class Fraction {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		if (calculator.result === 0)
			throw new Error('Cannot calculate reciprocal of zero');
		this.prevValue = calculator.result;
		return 1 / calculator.result;
	}

	undo() {
		return this.prevValue;
	}
}
