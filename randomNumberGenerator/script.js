let maxNumber;

function generateRandomNumber() {
  maxNumber = Number(document.getElementById("maxNumber").value);

  if (isNaN(maxNumber) || maxNumber < 1) {
    document.querySelector("#displayText").textContent =
      "Please enter a valid number.";
    document.querySelector("#randNumDisplay").textContent = "";

    setTimeout(() => {
      document.querySelector("#displayText").textContent = "";
    }, 2000);
    return;
  } else if (maxNumber == 1) {
    document.querySelector("#displayText").textContent =
      "Please enter a number above 1.";
    document.querySelector("#randNumDisplay").textContent = "";

    setTimeout(() => {
      document.querySelector("#displayText").textContent = "";
    }, 2000);
    return;
  }
  document.querySelector("#displayText").textContent = "The random number is: ";
  var randNumGeneration = setInterval(() => {
    let randNum = Math.floor(Math.random() * maxNumber) + 1;
    document.querySelector("#randNumDisplay").textContent = randNum;
  }, 50);

  setTimeout(() => {
    clearInterval(randNumGeneration);
  }, 500);
}
