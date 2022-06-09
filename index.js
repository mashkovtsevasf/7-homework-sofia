const calcSum = (firstNum, secondNum) => firstNum + secondNum
const calcDifference = (firstNum, secondNum) => firstNum - secondNum
const calcProduct = (firstNum, secondNum) => firstNum * secondNum
const calcQuotient = (firstNum, secondNum) => firstNum / secondNum
const result = getResult()
function getResult() {
  let firstNum = +prompt("Enter first number")
  let secondNum = +prompt("Enter second number")
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Incorrect input.Try again");
    return getResult();
  }
  let op = getOp()
  function getOp() {
    while(true) {
      const op = prompt("Enter operation (+-*/)");
      if (op !== "+" && op !== "-" && op !== "*" && op !== "/")
        alert("No such operation. Try again")
      else
        if (op === "+")
          alert(calcSum(firstNum, secondNum));
        else if (op === "-")
          alert(calcDifference(firstNum, secondNum));
        else if (op === "/")
          alert(calcQuotient(firstNum, secondNum));
        else
          alert(calcProduct(firstNum, secondNum));
    }
  }
}
