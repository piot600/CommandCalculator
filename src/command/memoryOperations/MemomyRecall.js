export class MemoryRecall {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return calculator.memoryValue;
	}

	undo() {
		return this.prevValue;
	}
}
