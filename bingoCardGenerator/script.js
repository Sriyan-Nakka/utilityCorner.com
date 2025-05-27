let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

function generateBingoCard() {
  document.getElementById("bingoCardDiv").style.display = "inline-block";

  for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * numbers.length);
    let b = Math.floor(Math.random() * numbers.length);

    let temp = numbers[a];
    numbers[a] = numbers[b];
    numbers[b] = temp;
  }

  for (let j = 0; j <= numbers.length; j++) {
    document.getElementById(`${j + 1}`).textContent = numbers[j];
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generateBingoCard();
  }
});
