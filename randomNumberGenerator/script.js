let maxNumber;
let numOfRands = 1;
let multiNums = "No";

function generateRandomNumber() {
  maxNumber = Number(document.getElementById("maxNumber").value);

  document.querySelector("#multiNumDiv").innerHTML = "";
  document.querySelector("#randNumDisplay").textContent = "";

  if (isNaN(maxNumber) || maxNumber < 1) {
    document.querySelector("#displayText").textContent =
      "Please enter a valid number.";
    setTimeout(() => {
      document.querySelector("#displayText").textContent = "";
    }, 2000);
    return;
  } else if (maxNumber == 1) {
    document.querySelector("#displayText").textContent =
      "Please enter a number above 1.";
    setTimeout(() => {
      document.querySelector("#displayText").textContent = "";
    }, 2000);
    return;
  }

  if (multiNums == "Yes") {
    document.querySelector("#multiNumPara").style.display = "block";
    document.querySelector("#multiNumDiv").style.display = "block";
    numOfRands = Number(numOfRands) || 1;
    for (let i = 1; i <= numOfRands; i++) {
      let randNum = Math.floor(Math.random() * maxNumber) + 1;
      let element = document.createElement("p");
      element.textContent = `Random Number ${i}: ${randNum}`;
      document.querySelector("#multiNumDiv").appendChild(element);
    }
  } else if (multiNums == "No") {
    document.querySelector("#displayText").textContent =
      "The random number is: ";
    document.querySelector("#multiNumDiv").style.display = "none";
    var randNumGeneration = setInterval(() => {
      let randNum = Math.floor(Math.random() * maxNumber) + 1;
      document.querySelector("#randNumDisplay").textContent = randNum;
    }, 50);

    setTimeout(() => {
      clearInterval(randNumGeneration);
    }, 500);
  }
}

document.querySelector("#numOfRands").addEventListener("change", () => {
  numOfRands = Number(document.querySelector("#numOfRands").value);
});

document.querySelector("#multiNums").addEventListener("change", () => {
  multiNums = document.querySelector("#multiNums").value;

  document.querySelector("#displayText").textContent = "";
  document.querySelector("#randNumDisplay").textContent = "";
  document.querySelector("#multiNumDiv").innerHTML = "";

  if (multiNums == "Yes") {
    document.querySelector("#multiNumPara").style.display = "block";
    document.querySelector("#multiNumDiv").style.display = "block";
  } else if (multiNums == "No") {
    document.querySelector("#multiNumPara").style.display = "none";
    document.querySelector("#multiNumDiv").style.display = "none";
    numOfRands = 1;
  }
});
