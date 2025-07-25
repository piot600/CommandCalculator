export class Opposite {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return calculator.result * -1;
	}

	undo() {
		return this.prevValue;
	}
}
