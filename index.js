let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function operate(operator) {
  expression += operator;
  display.value = expression;
}

function cutLastDigit() {
  var display = document.getElementById('display');
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1); // Remove the last character
  }
}

function applyPercent() {
  var display = document.getElementById('display');
  if (!isNaN(display.value)) {
    display.value = parseFloat(display.value) / 100;
  }
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
  }
}

// Example of loop
// This loop adds click event listeners to all buttons with the class 'button'
let buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let value = this.getAttribute('data-value');
    if (value) {
      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === 'CE') {
        cutLastDigit();
      } else if (value === '%') {
        applyPercent();
      } else {
        appendToDisplay(value);
      }
    }
  });
}
