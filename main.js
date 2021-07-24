// alert('Welcome to my about me site!')

function checkResult() {
  var value = document.getElementById("truths").elements["truths"].value;
  if (["bear","garage","ghost","nile","hospital","nazis"].includes(value)) document.getElementById("result").innerHTML = "Correct"
    else document.getElementById("result").innerHTML = "Incorrect";
}

