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

// make the buttons work
const display = document.getElementById("display");

let displayValue = display.textContent;

const store = {
  a: null,
  operator: null,
};

function reset() {
  // clear stores
  store.a = null;
  store.operator = null;

  // clear display
  displayValue = "0";
  display.textContent = displayValue;
}

const inputBtns = document.querySelectorAll("#inputBtns button");
const operationBtns = document.querySelectorAll("#operationBtns button");

function handleInput(e) {
  const str = e.target.value;

  if (store.operator == "equals") {
    displayValue = str;
  }
  else if (displayValue == "0") {
    displayValue = str;
  } else {
    displayValue = displayValue.concat(str);
  }

  display.textContent = displayValue;
}

function handleOperation(e) {
  const operation = e.target.value;

  if (operation == "clear") {
    return reset();
  }

  const num = parseFloat(displayValue);

  // display error message when user tries to divide by zero
  if (store.operator == "divide" && num == 0) {
    reset();
    display.textContent = "Sorry pal, no can do.";

    return;
  }

  // equals

  if (operation == "equals") {
    if (!store.a || !store.operator) {
      return;
    }

    const result = operate(store.operator, store.a, num);

    // reset stores
    store.a = null;
    store.operator = "equals";

    displayValue = result;
    display.textContent = displayValue;

    return;
  }

  // all other operations (add, subtract, etc.)

  if (store.a && store.operator) {
    store.a = operate(store.operator, store.a, num);
  } else {
    store.a = num;
  }

  store.operator = operation;

  // reset display
  displayValue = "0";
  display.textContent = displayValue;
}

inputBtns.forEach(btn => btn.addEventListener("click", handleInput));
operationBtns.forEach(btn => btn.addEventListener("click", handleOperation));