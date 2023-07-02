// Number, operator, another number (basic calc)
let num1;
let num2;
let operand;

// DOM
const inputBox_input = document.getElementById("inputBox");
const button_div = document.querySelectorAll(".button");
const buttonOperator_div = document.querySelectorAll(".button-operator");

// Buttons
button_div.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    console.log(`Number ${number} clicked`);
    inputBox_input.value = number;
  });
});

// Button Operators
buttonOperator_div.forEach((buttonOperator) => {
  buttonOperator.addEventListener("click", () => {
    const operator = buttonOperator.textContent;
    console.log(`Number ${operator} clicked`);
  });
});

// Operands
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let operate = (num1, num2, operand) => {
  switch (operand) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
};
