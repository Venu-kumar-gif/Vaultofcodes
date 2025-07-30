
let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  if (display.innerText === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "") return;
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculate() {
  try {
    const formatted = currentInput.replace(/÷/g, "/").replace(/×/g, "*").replace(/\^/g, "**");
    const result = eval(formatted);
    currentInput = result.toString();
    updateDisplay();
  } catch (e) {
    updateDisplay("Error");
    currentInput = "";
  }
}

function calculateFunction(func) {
  try {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    let result;
    switch (func) {
      case 'sin': result = Math.sin(toRadians(value)); break;
      case 'cos': result = Math.cos(toRadians(value)); break;
      case 'tan': result = Math.tan(toRadians(value)); break;
      case 'log': result = Math.log10(value); break;
      case 'sqrt': result = Math.sqrt(value); break;
    }

    currentInput = result.toString();
    updateDisplay();
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

function toRadians(deg) {
  return deg * (Math.PI / 180);
}

function updateDisplay(value = currentInput) {
  display.innerText = value;
}
