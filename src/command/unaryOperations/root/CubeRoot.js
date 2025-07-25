import { rootXY } from '../../../utils/MathUtils.js';

export class CubeRoot {
	constructor() {
		this.prevValue = null;
	}

	execute(calculator) {
		this.prevValue = calculator.result;
		return rootXY(calculator.result, 3);
	}

	undo() {
		return this.prevValue;
	}
}
