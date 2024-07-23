let displayValue = '';
let operator = '';

const display = document.getElementById('display');
function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = ''; // Clear initial zero on first input
    }
    displayValue += value;
    display.textContent = displayValue;
}
const operatorButtons = document.querySelectorAll('.btn-operator');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (operator !== '') {
            calculate(); 
        }
        operator = btn.getAttribute('data-operator');
        displayValue += operator;
        display.textContent = displayValue;
    });
});
document.getElementById('clear').addEventListener('click', function() {
    displayValue = '0';
    operator = '';
    display.textContent = displayValue;
});
document.getElementById('equals').addEventListener('click', calculate);

function calculate() {
    try {
        const result = eval(displayValue);
        display.textContent = result;
        displayValue = result.toString();
        operator = '';
    } catch (error) {
        display.textContent = 'Error';
    }
}

