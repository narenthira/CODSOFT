let displayValue = '';
let operator = '';

const display = document.getElementById('display');

// Function to append numbers and operators to display
function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = ''; // Clear initial zero on first input
    }
    displayValue += value;
    display.textContent = displayValue;
}

// Event listeners for operator buttons
const operatorButtons = document.querySelectorAll('.btn-operator');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (operator !== '') {
            calculate(); // Calculate if there's already an operator
        }
        operator = btn.getAttribute('data-operator');
        displayValue += operator;
        display.textContent = displayValue;
    });
});

// Function to clear the display
document.getElementById('clear').addEventListener('click', function() {
    displayValue = '0';
    operator = '';
    display.textContent = displayValue;
});

// Function to perform calculation
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

