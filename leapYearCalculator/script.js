let yearInput;
let yearsLeft;
let nextLeapYearDist;

const date = new Date();
const year = date.getFullYear();
document.getElementById("yearInput").placeholder = year;

function checkYear() {
  yearInput = Number(document.getElementById("yearInput").value);
  yearsLeft = yearInput % 4;
  if (yearsLeft === 3) {
    nextLeapYearDist = 1;
  } else {
    nextLeapYearDist = 4 - yearsLeft;
  }
  if (yearInput <= 0 || "" || null || undefined) {
    alert("Please enter a valid year.");
    document.querySelector("#yearInput").focus();
    document.querySelector("#result").style.display = "none";
    document.querySelector("#result").textContent = "";
  } else if (yearsLeft > 0) {
    document.querySelector("#result").style.display = "block";
    document.querySelector("#result").style.color = "#ef7676";
    const notLeapYearText = `${yearInput} is not a leap year. The next leap year is the year ${
      yearInput + nextLeapYearDist
    }. That is`;
    if (nextLeapYearDist === 1)
      document.querySelector("#result").textContent =
        notLeapYearText + ` 1 year after ${yearInput}.`;
    else
      document.querySelector("#result").textContent =
        notLeapYearText + ` ${nextLeapYearDist} years after ${yearInput}.`;
  } else if (yearsLeft === 0) {
    document.querySelector("#result").style.display = "block";
    document.querySelector("#result").style.color = "#2fd072";
    document.querySelector(
      "#result"
    ).textContent = `${yearInput} is a leap year!`;
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkYear();
  }
});
