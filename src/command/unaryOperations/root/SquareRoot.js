import { rootXY } from '../../../utils/MathUtils.js';

export class SquareRoot {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return rootXY(calculator.result, 2);
	}

	undo() {
		return this.prevValue;
	}
}
