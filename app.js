// fns for basic operations
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
  return a / b;
}

// do calculations
let operator;
let a;
let b;

function operate(operator, a, b) {
  if (operator == "add") {
    return add(a, b);
  }
  if (operator == "subtract") {
    return subtract(a, b);
  }
  if (operator == "multiply") {
    return multiply(a, b);
  }
  if (operator == "divide") {
    return divide(a, b);
  }
}