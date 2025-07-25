import { rootXY } from '../../utils/MathUtils.js';

export class XrootY {
	constructor(value) {
		this.value = value;
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return rootXY(calculator.result, this.value);
	}

	undo() {
		return this.prevValue;
	}
}
