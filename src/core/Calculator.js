export class Calculator {
	constructor() {
		this.result = 0;
		this.history = [];
		this.memoryValue = 0;
	}

	executeCommand(command) {
		this.result = command.execute(this);
		this.result = parseFloat(this.result.toFixed(15));
		this.history.push(command);
	}

	undoCommand() {
		const command = this.history.pop();
		if (command) {
			this.result = command.undo(this);
		}
	}
}
