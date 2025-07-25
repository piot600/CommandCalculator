export class Multiply {
	constructor(value) {
		this.value = value;
		this.prevResult = null;
	}

	execute(calculator) {
		this.prevResult = calculator.result;
		return calculator.result * this.value;
	}

	undo() {
		return this.prevResult;
	}
}
