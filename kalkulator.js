const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  let userInput = document.getElementById("userInput").value;
  let kata = userInput.split(" ");

  for (let i = 0; i < kata.length; i++) {
    if (kata[i] == "and") {
      kata[i] = "&&";
    } else if (kata[i] == "or") {
      kata[i] = "||";
    } else if (kata[i] == "not") {
      kata[i] = "!";
    }
  }

  let kalimatBaru = kata.join(" ");
  let result = eval(kalimatBaru);

  document.getElementById("result").textContent = result;
});
