let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(operation) {
    if (currentInput === '') return;
    firstNumber = currentInput;
    currentOperation = operation;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || firstNumber === '' || currentOperation === '') return;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    currentOperation = '';
    firstNumber = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    currentOperation = '';
    firstNumber = '';
}
