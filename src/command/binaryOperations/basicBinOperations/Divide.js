export class Divide {
	constructor(value) {
		this.value = value;
		this.prevResult = null;
	}

	execute(calculator) {
		if (this.value === 0) {
			throw new Error("You can't divide by 0");
		} else {
			this.prevResult = calculator.result;
			return calculator.result / this.value;
		}
	}

	undo() {
		return this.prevResult;
	}
}
