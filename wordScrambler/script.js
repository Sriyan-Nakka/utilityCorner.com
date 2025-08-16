const word = document.querySelector("#word");
const scrambledPara = document.querySelector("#scrambledPara");
const scrambledSpan = document.querySelector("#scrambledSpan");

function scrambleWord(e) {
  e.preventDefault();
  scrambledPara.style.display = "inline-block";
  let givenWord = word.value;
  let wordArray = givenWord.split("");

  for (let i = 0; i < 20; i++) {
    let a = Math.floor(Math.random() * wordArray.length);
    let b = Math.floor(Math.random() * wordArray.length);

    let temp = wordArray[a];
    wordArray[a] = wordArray[b];
    wordArray[b] = temp;
  }

  scrambledSpan.textContent = wordArray.join("");
}
