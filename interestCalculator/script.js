import {
  calcSimpleInterest,
  calcCompoundInterest,
  interestAmt,
} from "../calc.js";

const SIform = document.querySelector("#simpleInterestForm");
const CIform = document.querySelector("#compoundInterestForm");

function calculateSimpleInterest(e) {
  e.preventDefault();
  document.querySelector("#interestParaSI").style.display = "block";
  document.querySelector("#amountParaSI").style.display = "block";

  let principalAmount = document.querySelector("#SIprincipalAmount").value;
  let years = document.querySelector("#SIyears").value;
  let interestRate = document.querySelector("#SIinterestRate").value;

  let amount = calcSimpleInterest(principalAmount, years, interestRate);
  let interest = interestAmt(amount, principalAmount);

  document.querySelector("#amountSpanSI").textContent = amount;
  document.querySelector("#interestSpanSI").textContent = interest;
}

SIform.addEventListener("submit", calculateSimpleInterest);

function calculateCompoundInterest(e) {
  e.preventDefault();
  document.querySelector("#interestParaCI").style.display = "block";
  document.querySelector("#amountParaCI").style.display = "block";

  let principalAmount = document.querySelector("#CIprincipalAmount").value;
  let interestRate = document.querySelector("#CIinterestRate").value;
  let years = document.querySelector("#CIyears").value;

  let amount = calcCompoundInterest(
    principalAmount,
    interestRate,
    years
  ).toFixed(3);
  let interest = interestAmt(amount, principalAmount).toFixed(3);

  document.querySelector("#amountSpanCI").textContent = amount;
  document.querySelector("#interestSpanCI").textContent = interest;
}

CIform.addEventListener("submit", calculateCompoundInterest);
