// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by 0";
    }
    return a / b;
}

// Get elements
const resultSpan = document.getElementById("calculation-result");

// Utility: Get numbers from inputs
function getNumbers() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return { number1, number2 };
}

// Event Listeners
document.getElementById("add").addEventListener("click", () => {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = add(number1, number2);
});

document.getElementById("subtract").addEventListener("click", () => {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = subtract(number1, number2);
});

document.getElementById("multiply").addEventListener("click", () => {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = multiply(number1, number2);
});

document.getElementById("divide").addEventListener("click", () => {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = divide(number1, number2);
});
