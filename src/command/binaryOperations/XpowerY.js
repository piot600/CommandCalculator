import { powerXY } from '../../utils/MathUtils.js';

export class XpowerY {
	constructor(value) {
		this.value = value;
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return powerXY(calculator.result, this.value);
	}

	undo() {
		return this.prevValue;
	}
}
