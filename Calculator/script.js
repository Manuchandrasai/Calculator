let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  if (display.innerText === "0" || currentInput === "0") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  display.innerText = currentInput;
}

function appendDot() {
  const parts = currentInput.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) {
    currentInput += ".";
    display.innerText = currentInput;
  }
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = "Error";
    currentInput = "";
  }
}
