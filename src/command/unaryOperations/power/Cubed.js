export class Cubed {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return calculator.result * calculator.result * calculator.result;
	}

	undo() {
		return this.prevValue;
	}
}
