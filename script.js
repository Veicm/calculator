const display = document.getElementById("display");
let number = "";

function appendToDisplay(input) {
  display.value += input;
  number += input;
}

function clearDisplay() {
  display.value = "";
  number = "";
}

function perCent() {
  let lastNumberMatch = display.value.match(/(\d+)(?!.*\d)/);
  if (lastNumberMatch) {
    let lastNumber = lastNumberMatch[0];
    let newNumber = lastNumber / 100;
    display.value = display.value.slice(0, -lastNumber.length) + newNumber;
  }
}

function invert(exist) {
  let lastNumber = parseFloat(exist[0]);
  if (lastNumber > 0) {
    let newNumber = `(${(-lastNumber).toString()})`;
    display.value =
      display.value.slice(0, -lastNumber.toString().length) + newNumber;
  }
}

function negative() {
  let lastNumberMatch = display.value.match(/(\d+)(?!.*\d)/);
  if (lastNumberMatch) {
    invert(lastNumberMatch);
  }
}

function addCalc(input) {
  display.value += input;
  number = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
