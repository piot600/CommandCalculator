import { Calculator } from './core/Calculator.js';
import { Add } from './command/binaryOperations/basicBinOperations/Add.js';
import { Subtract } from './command/binaryOperations/basicBinOperations/Subtract.js';
import { Multiply } from './command/binaryOperations/basicBinOperations/Multiply.js';
import { Divide } from './command/binaryOperations/basicBinOperations/Divide.js';
import { Opposite } from './command/unaryOperations/Opposite.js';
import { Percent } from './command/unaryOperations/Percent.js';
import { Squared } from './command/unaryOperations/power/Squared.js';
import { Cubed } from './command/unaryOperations/power/Cubed.js';
import { XpowerY } from './command/binaryOperations/XpowerY.js';
import { TenPowerX } from './command/unaryOperations/power/TenPowerX.js';
import { Fraction } from './command/unaryOperations/Fraction.js';
import { CubeRoot } from './command/unaryOperations/root/CubeRoot.js';
import { XrootY } from './command/binaryOperations/XrootY.js';
import { Factorial } from './command/unaryOperations/Factorial.js';
import { MemoryClear } from './command/memoryOperations/MemoryClear.js';
import { MemoryAdd } from './command/memoryOperations/MemoryAdd.js';
import { MemoryStore } from './command/memoryOperations/MemoryStore.js';
import { MemorySubtract } from './command/memoryOperations/MemomySubtract.js';
import { MemoryRecall } from './command/memoryOperations/MemomyRecall.js';
import { SquareRoot } from './command/unaryOperations/root/SquareRoot.js';
import './style.css';

const calculator = new Calculator();
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currValue = '';
let operator = null;
let firstValue = true;

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.id === 'theme') {
			document.body.classList.toggle('light');
		}

		if (button.className === 'number') {
			const digit = button.textContent;
			if (currValue === '0' && digit === '0') return;

			if (currValue === '0') {
				currValue = digit;
			} else {
				currValue += digit;
			}

			if (firstValue) {
				calculator.result = parseFloat(currValue);
			}
			displayValue(currValue);
			return;
		}

		if (button.id === 'point') {
			if ([...currValue].length === 0) currValue += '0.';
			else if (![...currValue].includes('.')) currValue += '.';
			displayValue(currValue);
			return;
		}

		if (button.className === 'binary-operator') {
			firstValue = false;
			if (currValue && operator) {
				operatorExecute();
			}
			currValue = '';
			operator = button.id;
			return;
		}

		if (button.className === 'unary-operator') {
			if (currValue && operator) {
				operatorExecute();
				operator = button.id;
			}
			operator = button.id;
			operatorExecute();
			operator = null;
			currValue = '';
			return;
		}

		if (button.className === 'memory-operator') {
			const prevOperator = operator;
			operator = button.id;
			operatorExecute();

			if (button.id === 'memoryRecall') {
				currValue = calculator.result.toString();
				displayValue(currValue);
			} else if (currValue) {
				displayValue(currValue);
			} else {
				displayValue(calculator.result);
			}
			operator = prevOperator;
			updateMemoryDisplay();
			return;
		}

		if (button.id === 'equals') {
			if (currValue && operator) {
				operatorExecute();
				currValue = '';
				operator = null;
			}
			return;
		}

		if (button.id === 'undo') {
			calculator.undoCommand();
			displayValue(calculator.result);
			updateMemoryDisplay();
			currValue = '';
			return;
		}

		if (button.id === 'clear') {
			clear();
			firstValue = true;
			return;
		}
	});
});

function displayValue(value) {
	display.textContent = value.toString();
}

function operatorCommand(operator, currValue = null) {
	switch (operator) {
		case 'add':
			return new Add(currValue);
		case 'subtract':
			return new Subtract(currValue);
		case 'multiply':
			return new Multiply(currValue);
		case 'divide':
			return new Divide(currValue);
		case 'opposite':
			return new Opposite();
		case 'percent':
			return new Percent();
		case 'squared':
			return new Squared();
		case 'cubed':
			return new Cubed();
		case 'xpowery':
			return new XpowerY(currValue);
		case 'tenPowerX':
			return new TenPowerX();
		case 'fraction':
			return new Fraction();
		case 'squareRoot':
			return new SquareRoot();
		case 'cubeRoot':
			return new CubeRoot();
		case 'xrooty':
			return new XrootY(currValue);
		case 'factorial':
			return new Factorial();
		case 'memoryClear':
			return new MemoryClear();
		case 'memoryAdd':
			return new MemoryAdd(currValue);
		case 'memorySubtract':
			return new MemorySubtract(currValue);
		case 'memoryRecall':
			return new MemoryRecall();
		case 'saveMemory':
			return new MemoryStore(currValue ? parseFloat(currValue) : null);
		default:
			throw new Error(`Unknown operator: ${operator}`);
	}
}

function operatorExecute() {
	let command;
	try {
		if (unaryOperators.includes(operator)) {
			command = operatorCommand(operator);
		} else {
			command = operatorCommand(operator, parseFloat(currValue));
		}
		if (command) {
			calculator.executeCommand(command);
			displayValue(calculator.result);
			updateMemoryDisplay();
		}
	} catch (err) {
		alert(err.message);
		clear();
	}
}

function clear() {
	calculator.result = 0;
	calculator.history = [];
	currValue = '';
	operator = null;
	displayValue(0);
	calculator.memoryValue = 0;
	updateMemoryDisplay();
}

const unaryOperators = [
	'opposite',
	'percent',
	'squared',
	'cubed',
	'tenPowerX',
	'fraction',
	'squareRoot',
	'cubeRoot',
	'factorial',
];

function updateMemoryDisplay() {
	const memoryDisplay = document.querySelector('.displayMemory');
	if (calculator.memoryValue !== 0) {
		memoryDisplay.textContent = calculator.memoryValue;
	} else {
		memoryDisplay.textContent = '';
	}
}
