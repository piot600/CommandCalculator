import { factorial } from '../../utils/MathUtils.js';

export class Factorial {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return factorial(calculator.result);
	}

	undo() {
		return this.prevValue;
	}
}
