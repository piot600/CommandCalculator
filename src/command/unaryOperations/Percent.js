export class Percent {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return calculator.result * 0.01;
	}

	undo() {
		return this.prevValue;
	}
}
