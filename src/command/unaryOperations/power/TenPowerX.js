import { powerXY } from '../../../utils/MathUtils.js';

export class TenPowerX {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return powerXY(10, calculator.result);
	}

	undo() {
		return this.prevValue;
	}
}
