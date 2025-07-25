export class MemoryClear {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.memoryValue;
		calculator.memoryValue = 0;
		return calculator.result;
	}

	undo(calculator) {
		calculator.memoryValue = this.prevValue;
		return calculator.result;
	}
}
