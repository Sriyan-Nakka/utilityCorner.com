const exponentForm = document.getElementById("exponentForm");

exponentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const base = document.getElementById("base").value;
  const exponent = document.getElementById("exponent").value;
  const result = document.getElementById("result");
  document.querySelector("#resultDiv").style.display = "block";
  result.innerHTML = base ** exponent;
});
