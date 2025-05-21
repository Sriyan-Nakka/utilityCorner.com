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
const italicUnformatButton = document.getElementById("italicUnformatButton");
const underlineUnformatButton = document.getElementById(
  "underlineUnformatButton"
);
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let otherColor = document.getElementById("otherColor");

let formattedText = document.getElementById("formattedText");

let localValue = localStorage.getItem("formattedText");
console.log(localStorage.getItem("formattedText"));

function setText() {
  formattedText.innerHTML =
    theText.value || localStorage.getItem("formattedText");
  theText.innerHTML = theText.value || localStorage.getItem("formattedText");
}

function applyStyles() {
  setText();
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

  switch (fontName) {
    case "Serif":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "serif";
      break;
    case "Sans Serif":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "sans-serif";
      break;
    case "Reddit Sans":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "Reddit Sans";
      break;
    case "Posten One":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "Posten One";
      break;
    case "Raleway":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "Raleway";
      break;
    case "Ubuntu":
      document.querySelector("#customFont").value = "";
      document.querySelector("#customFontPara").style.display = "none";
      formattedText.style.fontFamily = "Ubuntu";
      break;
    case "Custom":
      document.querySelector("#customFontPara").style.display = "block";

      document.querySelector("#customFont").addEventListener("change", (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let blobUrl = URL.createObjectURL(file);
        let customFontName = "customFont_" + Date.now();

        css = `
        @font-face {
          font-family: "${customFontName}";
          src: url("${blobUrl}");
        }
          `;

        let style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);

        formattedText.style.fontFamily = customFontName;
      });
      break;
  }

  localStorage.setItem("formattedText", formattedText.innerHTML);
}

document.addEventListener("DOMContentLoaded", applyStyles);
document.addEventListener("keyup", applyStyles);
document.addEventListener("click", applyStyles);
