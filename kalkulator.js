calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let operator = document.getElementById("operator").value.toLowerCase();

  expresi = [input1, operator, input2];

  let inputAllowed = ["1", "0"];
  let operatorAllowed = ["not", "and", "or", "xor", "nand", "nor"];

  let result;
  let newExpresi;

  if (!inputAllowed.includes(input1) || !inputAllowed.includes(input2) || !operatorAllowed.includes(operator)) {
    alert(`input yang dibolehkan hanya ${inputAllowed[0]} dan ${inputAllowed[1]} \noperator yang dibolehkan hanya ${operatorAllowed}`);
    result = "ERROR";
  } else {
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
  }

  result = result == "true" || result == "1" ? "1" : "0";

  document.getElementById("result").value = result;
});
