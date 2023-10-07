var expression = "";

var result = "";

function calculate() {

  expression = document.getElementById("expression").value;

  result = eval(expression);

  document.getElementById("result").innerHTML = result;

}

document.getElementById("calculate").addEventListener("click", calculate);

