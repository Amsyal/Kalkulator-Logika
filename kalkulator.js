calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let operator = document.getElementById("operator").value.toLowerCase();

  expresi = [input1, operator, input2];

  let result;
  let newExpresi;

  try {
    for (let i = 0; i < expresi.length; i++) {
      if (expresi[i] == "and") {
        expresi[i] = "&&";
        newExpresi = expresi.join(" ");
        result = eval(newExpresi);
      } else if (expresi[i] == "or") {
        expresi[i] = "||";
        newExpresi = expresi.join(" ");
        result = eval(newExpresi);
      } else if (expresi[i] == "not") {
        expresi[i] = "!";
        newExpresi = expresi.join(" ");
        result = eval(newExpresi);
      } else if (expresi[i] == "nand") {
        expresi[i] = "&&";
        newExpresi = expresi.join(" ");
        result = !eval(newExpresi);
      } else if (expresi[i] == "nor") {
        expresi[i] = "||";
        newExpresi = expresi.join(" ");
        result = !eval(newExpresi);
      } else if (expresi[i] == "xor") {
        expresi[i] = "!==";
        newExpresi = expresi.join(" ");
        result = eval(newExpresi);
      }
    }

    result = result == "1" || result == true ? "1" : "0";
  } catch {
    result = "ERROR";
  }

  document.getElementById("result").value = result;
});
