//* Interest Calculator
export function calcSimpleInterest(p, t, r) {
  return p * (1 + (t * r) / 100);
}

export function calcCompoundInterest(p, r, n) {
  return p * (1 + r / 100) ** n;
}

export function interestAmt(a, p) {
  return a - p;
}
