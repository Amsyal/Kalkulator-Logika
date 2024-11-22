const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  let userInput = document.getElementById("userInput").value.toLowerCase();
  console.log(userInput);
  let kata = userInput.split(" ");

  let result;
  let kalimatBaru;

  for (let i = 0; i < kata.length; i++) {
    if (kata[i] == "and") {
      kata[i] = "&&";
      kalimatBaru = kata.join(" ");
      result = eval(kalimatBaru);
    } else if (kata[i] == "or") {
      kata[i] = "||";
      kalimatBaru = kata.join(" ");
      result = eval(kalimatBaru);
    } else if (kata[i] == "not") {
      kata[i] = "!";
      kalimatBaru = kata.join(" ");
      result = eval(kalimatBaru);
    } else if (kata[i] == "nand") {
      kata[i] = "&&";
      kalimatBaru = kata.join(" ");
      result = !eval(kalimatBaru);
    } else if (kata[i] == "nor") {
      kata[i] = "||";
      kalimatBaru = kata.join(" ");
      result = !eval(kalimatBaru);
    } else if (kata[i] == "xor") {
      kata[i] = "!==";
      kalimatBaru = kata.join(" ");
      result = eval(kalimatBaru);
    }
  }

  document.getElementById("result").textContent = result;
});
