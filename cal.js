let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    // Prevent appending two consecutive operators
    if (display.value === '' || isNaN(display.value.slice(-1))) {
        return;
    }
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
