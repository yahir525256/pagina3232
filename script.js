const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';
let memory = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Clear
        if (button.id === 'clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value = '';
        }

        // Equal Sign
        else if (button.id === 'equal-sign') {
            if (currentInput && previousInput && operator) {
                display.value = eval(`${previousInput}${operator}${currentInput}`);
                previousInput = display.value;
                currentInput = '';
            }
        }

        // Operator
        else if (button.classList.contains('operator')) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        }

        // Percentage
        else if (button.id === 'percentage') {
            if (currentInput) {
                display.value = currentInput / 100;
                currentInput = display.value;
            }
        }

        // Square Root
        else if (button.id === 'sqrt') {
            if (currentInput) {
                display.value = Math.sqrt(currentInput);
                currentInput = display.value;
            }
        }

        // Inverse (1/x)
        else if (button.id === 'inverse') {
            if (currentInput) {
                display.value = 1 / currentInput;
                currentInput = display.value;
            }
        }

        // Plus/Minus
        else if (button.id === 'plus-minus') {
            if (currentInput) {
                currentInput = currentInput * -1;
                display.value = currentInput;
            }
        }

        // Memory Functions
        else if (button.id === 'mc') {
            memory = 0;
        }
        else if (button.id === 'mr') {
            display.value = memory;
            currentInput = memory.toString();
        }
        else if (button.id === 'm-plus') {
            if (currentInput) {
                memory += parseFloat(currentInput);
            }
        }
        else if (button.id === 'm-minus') {
            if (currentInput) {
                memory -= parseFloat(currentInput);
            }
        }

        // Numbers and decimal
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
