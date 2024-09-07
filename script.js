const display = document.querySelector("#display");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const btns = document.querySelectorAll(".btn");

// global variables
let operand = "";
let firstValue = "";
let secondValue = "";

//show btns in display
function showDisplay(text) {
  if (text === ".") {
    if (!firstValue.includes(".") && firstValue) {
      firstValue += text;
    } else if (!secondValue.includes(".") && secondValue) {
      secondValue += text;
    }
  } else {
    withoutDot(text);
  }

  display.textContent = firstValue + operand + secondValue;
}

function withoutDot(txt) {
  let isNumber = !isNaN(Number(txt));
  if (firstValue && operand && isNumber) {
    secondValue += txt;
  } else if (firstValue && !isNumber && !secondValue) {
    operand = txt;
  } else if (isNumber) {
    firstValue += txt;
  }
}

// event listeners

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    showDisplay(btn.textContent.trim());
  })
);

function calc() {
  let res = "";
  switch (operand) {
    case "+":
      res = +firstValue + +secondValue;

      break;
    case "-":
      res = +firstValue - +secondValue;

      break;

    default:
      break;
  }
  display.textContent = res;
  firstValue = res;
  secondValue = "";
  operand = "";
}

// del.addEventListener("click", deleteDisplay);
equal.addEventListener("click", calc);
