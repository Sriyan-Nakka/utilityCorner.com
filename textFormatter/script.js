let theText = document.getElementById("theText");
const boldFormatButton = document.getElementById("boldFormatButton");
const boldUnformatButton = document.getElementById("boldUnformatButton");
const strikethroughFormatButton = document.getElementById(
  "strikethroughFormatButton"
);
const underlineFormatButton = document.getElementById("underlineFormatButton");
const strikethroughUnformatButton = document.getElementById(
  "strikethroughUnformatButton"
);
const italicFormatButton = document.getElementById("italicFormatButton");
const underlineUnformatButton = document.getElementById(
  "underlineUnformatButton"
);
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let otherColor = document.getElementById("otherColor");

let formattedText = document.getElementById("formattedText");

let localValue = localStorage.getItem("formattedText");
console.log(localStorage.getItem("formattedText"));

function formattingTextContent() {
  formattedText.innerHTML =
    theText.value || localStorage.getItem("formattedText");
  theText.innerHTML = theText.value || localStorage.getItem("formattedText");
}

function formatText() {
  formattingTextContent();
  fontName = document.getElementById("fontName").value;
  fontSize = document.getElementById("fontSize").value;
  otherColor = document.getElementById("otherColor").value;
  console.log(otherColor);

  formattedText.style.fontSize = `${fontSize}px`;
  formattedText.style.color = `${otherColor}`;

  boldFormatButton.onclick = () => {
    formattedText.style.fontWeight = "bold";
  };

  strikethroughFormatButton.onclick = () => {
    formattedText.style.textDecoration = "line-through";
  };

  italicFormatButton.onclick = () => {
    formattedText.style.fontStyle = "italic";
  };

  underlineFormatButton.onclick = () => {
    formattedText.style.textDecoration = "underline";
  };

  boldUnformatButton.onclick = () => {
    formattedText.style.fontWeight = "normal";
  };

  strikethroughUnformatButton.onclick = () => {
    formattedText.style.textDecoration = "none";
  };

  italicUnformatButton.onclick = () => {
    formattedText.style.fontStyle = "normal";
  };

  underlineUnformatButton.onclick = () => {
    formattedText.style.textDecoration = "none";
  };

  switch (true) {
    case fontName == "Serif":
      formattedText.style.fontFamily = "serif";
      break;
    case fontName == "Sans Serif":
      formattedText.style.fontFamily = "sans-serif";
      break;
    case fontName == "Reddit Sans":
      formattedText.style.fontFamily = "Reddit Sans";
      break;
    case fontName == "Posten One":
      formattedText.style.fontFamily = "Posten One";
      break;
    case fontName == "Raleway":
      formattedText.style.fontFamily = "Raleway";
      break;
    case fontName == "Ubuntu":
      formattedText.style.fontFamily = "Ubuntu";
      break;
  }

  localStorage.setItem("formattedText", formattedText.innerHTML);
}

document.addEventListener("DOMContentLoaded", formatText);
document.addEventListener("keyup", formatText);
document.addEventListener("click", formatText);
