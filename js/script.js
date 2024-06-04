let result = document.querySelector("#Result");
let btns = document.querySelectorAll(".btn");

let num1 = 0;
let num2 = 0;
let res = 0;
let op = "+";
let btnID;

const isDigit = (btn) => {
  return (btn >= "0" && btn <= "9") || btn == "btnDot";
};

const isOperator = (btn) => {
  return (
    btn == "btnAdd" ||
    btn == "btnSub" ||
    btn == "btnMul" ||
    btn == "btnDiv" ||
    btn == "btnClear"
  );
};

const checkOperator = (oper) => {
  switch (oper) {
    case "btnAdd":
      op = "+";
      break;
    case "btnSub":
      op = "-";
      break;
    case "btnMul":
      op = "*";
      break;
    case "btnDiv":
      op = "/";
  }
};

const displayResult = (op) => {
  switch (op) {
    case "+":
      res += num1 + num2;
      break;
    case "-":
      res += num1 - num2;
      break;
    case "*":
      res += num1 * num2;
      break;
    case "/":
      res += num1 / num2;
  }

  return res;
};

const clearDisplay = () => {
  result.innerHTML = " ";
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btnID == "btnEq") {
      clearDisplay();
    }

    btnID = btn.getAttribute("id");

    if (isDigit(btnID)) {
      if (btnID == "btnDot") {
        result.innerHTML += ".";
      } else {
        result.innerHTML += btnID;
      }
    } else if (isOperator(btnID)) {
      if (btnID == "btnClear") {
        num1 = 0;
        num2 = 0;
        res = 0;
      } else {
        checkOperator(btnID);

        if (result.innerHTML != "") {
          num1 += parseFloat(result.innerHTML);
        }
      }

      clearDisplay();
    } else if (btnID == "btnEq") {
      if (result.innerHTML != "") {
        num2 += parseFloat(result.innerHTML);
      }

      result.innerHTML = displayResult(op);

      num1 = 0;
      num2 = 0;
      res = 0;
    }
  });
});
