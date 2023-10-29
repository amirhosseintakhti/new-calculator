const display = document.querySelector(".display");
const operators = ["-", "+", "*", "/", "="];
const numPad = document.querySelector(".numPad");
const operatorsArea = document.querySelector(".operators");
let myNums = "";
for (let index = 0; index <= 9; index++) {
  myNums += `
        <div class="col">
              <button class="btn btn-primary w-100" onclick="getNum(${index})">${index}</button>
        </div>
        `;
}
let myOperators = "";
operators.forEach((val) => {
  myOperators += `
            <div class="col">
              <button class="btn btn-primary w-100" onclick="operate('${val}')">${val}</button>
            </div>
            `;
});
numPad.innerHTML = myNums;
operatorsArea.innerHTML = myOperators;
let tempNum = "",
  firstNum,
  secondNum,
  res;
let oldOperator,
  n = 0;
function getNum(input) {
  tempNum += input;
  display.innerHTML = tempNum;
}
function operate(type) {
  if (firstNum == null && tempNum !== "") {
    firstNum = tempNum;
    tempNum = "";
    oldOperator = type;
    console.log(firstNum);
  } else {
    calculate(type);
  }
}
function calculate(type) {
  secondNum = tempNum;
  tempNum = "";
  console.log(secondNum);
  console.log(firstNum);
  console.log(oldOperator);
  switch (oldOperator) {
    case "+":
      res = +firstNum + +secondNum;
      break;
    case "-":
      res = +firstNum - +secondNum;
      break;
    case "*":
      res = +firstNum * +secondNum;
      break;
  }
  oldOperator = type;
  firstNum = res;
  console.log(res);
  display.innerHTML = res;
}
