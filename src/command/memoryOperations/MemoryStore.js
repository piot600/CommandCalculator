export class MemoryStore {
	constructor(value = null) {
		this.value = value;
		this.prevMemValue = null;
	}

	execute(calculator) {
		this.prevMemValue = calculator.memoryValue;
		if (this.value !== null) {
			calculator.memoryValue = this.value;
		} else {
			calculator.memoryValue = calculator.result;
		}
		return calculator.result;
	}

	undo(calculator) {
		calculator.memoryValue = this.prevMemValue;
		return calculator.result;
	}
}
