let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", () => {
  const clear_button = document.querySelector(".clear");

  const plusminus_button = document.querySelector(".plusminus");
  const percent_button = document.querySelector(".percent");
  const decimal_button = document.querySelector(".decimal");
  const equal_button = document.querySelector(".equals");

  const number_button = document.querySelectorAll(".number");
  const operator_button = document.querySelectorAll(".operator");

  const screen_div = document.querySelector(".screen");

  number_button.forEach((number) => {
    number.addEventListener("click", (e) => {
      handleNumber(e.target.textContent);
      screen_div.textContent = previousValue + " " + operator + " " + currentValue;
    });
  });

  operator_button.forEach((operatorBtn) => {
    // Renamed the parameter to operatorBtn
    operatorBtn.addEventListener("click", (e) => {
      // Renamed the parameter to e
      handleOperator(e.target.textContent);
      screen_div.textContent = previousValue + currentValue + operator;
    });
  });

  clear_button.addEventListener("click", (e) => {
    currentValue = "";
    previousValue = "";
    operator = "";
    screen_div.textContent = "0";
  });

  equal_button.addEventListener("click", () => {
    calculate();
    screen_div.textContent = previousValue;
  });
});

let handleNumber = (num) => {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
};

let handleOperator = (op) => {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
};

let calculate = () => {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "×") {
    previousValue *= currentValue;
  } else if (operator === "÷") {
    previousValue /= currentValue;
  }

  currentValue = previousValue.toString(); // Update currentValue with the result
  operator = "";
};
