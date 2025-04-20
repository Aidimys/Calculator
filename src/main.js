import "./style.css";
document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const numberButtons = document.querySelectorAll(
    ".button:not(#OperBtn):not(#CentBtn)"
  );
  const operatorButtons = document.querySelectorAll("#OperBtn");
  const centerButtons = document.querySelectorAll("#CentBtn");

  calculator.addEventListener("click", function (event) {
    if (event.target.classList.contains("themeBtn")) {
      changeTheme(event.target.classList[1]);
    }
  });

  function changeTheme(theme) {
    calculator.classList.remove("darkTheme", "lightTheme", "blueTheme");
    calculator.classList.add(theme);

    resetButtonStyles();

    if (theme === "darkTheme") {
      centerButtons.forEach((button) => button.classList.add("btn-grey"));
      operatorButtons.forEach((button) => button.classList.add("btn-orange"));
    } else {
      numberButtons.forEach((button) => button.classList.add("btn-orange"));
      operatorButtons.forEach((button) => button.classList.add("btn-grey"));
      centerButtons.forEach((button) => button.classList.add("btn-grey"));
    }
  }

  function resetButtonStyles() {
    [...numberButtons, ...operatorButtons, ...centerButtons].forEach(
      (button) => {
        button.classList.remove("btn-orange", "btn-grey");
      }
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  let currentInput = "0";
  let previousInput = "";
  let operator = "";

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.innerText;

      if (!isNaN(value) || value === ".") {
        handleNumberInput(value);
      } else {
        handleOperatorInput(value);
      }

      display.innerText = currentInput;
    });
  });

  function handleNumberInput(value) {
    if (currentInput === "0" && value !== ".") {
      currentInput = value;
    } else if (value === "." && currentInput.includes(".")) {
      return;
    } else {
      currentInput += value;
    }
  }

  function handleOperatorInput(value) {
    switch (value) {
      case "AC":
        currentInput = "0";
        previousInput = "";
        operator = "";
        break;
      case "+/-":
        currentInput = currentInput.startsWith("-")
          ? currentInput.slice(1)
          : "-" + currentInput;
        break;
      case "%":
        currentInput = divideByHundred(currentInput);
        break;
      case "=":
        if (operator && previousInput) {
          currentInput = calculate(previousInput, currentInput, operator);
          previousInput = "";
          operator = "";
        }
        break;
      default:
        if (!previousInput) {
          previousInput = currentInput;
          currentInput = "0";
        }
        operator = value;
        break;
    }
  }

  function calculate(Num1, Num2, operator) {
    Num1 = toNumber(Num1);
    Num2 = toNumber(Num2);

    switch (operator) {
      case "+":
        return (Num1 + Num2).toString();
      case "-":
        return (Num1 - Num2).toString();
      case "*":
        return (Num1 * Num2).toString();
      case "/":
        return Num2 !== 0 ? (Num1 / Num2).toString() : "Ошибка";
      default:
        return "Ошибка";
    }
  }

  function toNumber(str) {
    let num = 0;
    let sign = 1;

    if (str.startsWith("-")) {
      sign = -1;
      str = str.slice(1);
    }

    if (str.includes(".")) {
      const [intPart, decPart] = str.split(".");
      num = parseInteger(intPart) + parseDecimal(decPart);
    } else {
      num = parseInteger(str);
    }

    return num * sign;
  }

  function parseInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = result * 10 + (str.charCodeAt(i) - 48);
    }
    return result;
  }

  function parseDecimal(str) {
    let result = 0;
    let divisor = 1;
    for (let i = 0; i < str.length; i++) {
      result = result * 10 + (str.charCodeAt(i) - 48);
      divisor *= 10;
    }
    return result / divisor;
  }

  function divideByHundred(str) {
    let num = toNumber(str);
    return (num / 100).toString();
  }
});
