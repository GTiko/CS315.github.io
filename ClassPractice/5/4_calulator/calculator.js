function claculate() {
  let num1 = Number(document.getElementById("n1").value);
  let num2 = Number(document.getElementById("n2").value);
  let operation = document.getElementById("op").value;

  let outPut = document.getElementById("result");

  let result;

  if (operation == "+") {
    result = num1 + num2;
  } else if (operation == "-") {
    result = num1 - num2;
  } else if (operation == "*") {
    result = num1 * num2;
  } else if (operation == "/") {
    result = num1 / num2;
  } else if (operation == " " || operation == "") {
    result = "0";
  } else {
    result = "error";
  }
  outPut.value = result;
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("op").value = "";
}

function wipe() {
  document.getElementById("result").value = "";
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("op").value = "";
}
