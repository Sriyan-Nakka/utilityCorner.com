const wordLengthCount = document.getElementById("wordLengthCount");
let words;

document.addEventListener("keyup", () => {
  words = document.getElementById("words").value.trim();
  if (words.length === -1) {
    wordLengthCount.textContent = "0";
  } else {
    wordLengthCount.textContent = words.length;
  }
});
