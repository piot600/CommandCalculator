export class MemoryAdd {
	constructor(value) {
		this.value = value;
		this.prevMemValue = null;
	}

	execute(calculator) {
		this.prevMemValue = calculator.memoryValue;
		calculator.memoryValue += calculator.result;
		return calculator.result;
	}

	undo(calculator) {
		calculator.memoryValue = this.prevMemValue;
		return calculator.result;
	}
}
