function generateGreetingCard() {
  //values:
  let bgColor = document.querySelector(".bgcolor").value;
  let headColor = document.querySelector(".headColor").value;
  let pixelWidth = document.querySelector(".pixelWidth").value;
  let contentColor = document.querySelector(".contentColor").value;
  let nameColor = document.querySelector(".nameColor").value;
  let header = document.querySelector(".header").value;
  let text1 = document.querySelector(".text1").value;
  let text2 = document.querySelector(".text2").value;
  let yourName = document.querySelector(".yourName").value;

  //greeting card values:
  let greetingCardDiv = document.querySelector(".greetingCard");
  let heading = document.querySelector(".heading");
  let content1 = document.querySelector(".content1");
  let content2 = document.querySelector(".content2");
  let message = document.querySelector(".message");
  let name = document.querySelector(".name");
  let watermark = document.querySelector("#watermark");

  //printing the values:
  greetingCardDiv.style.display = "block";
  greetingCardDiv.style.backgroundColor = bgColor;
  greetingCardDiv.style.width = `${pixelWidth}px`;
  heading.style.color = headColor;
  heading.innerHTML = header;
  content1.style.color = contentColor;
  content1.innerHTML = text1;
  content2.style.color = contentColor;
  content2.innerHTML = text2;
  message.style.color = nameColor;
  name.style.color = nameColor;
  watermark.style.color = nameColor;
  name.innerHTML = yourName;
}

document.querySelector("#fontHead").addEventListener("change", function (e) {
  document.querySelector("#fontResetButton").style.display = "block";

  e.preventDefault();
  const file = e.target.files[0];
  const blobUrl = URL.createObjectURL(file);
  const headFontName = "headFont_" + Date.now();

  css = `
        @font-face {
          font-family: "${headFontName}";
          src: url("${blobUrl}");
        }

        .heading {
          font-family: "${headFontName}";
        }
          `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
});

document.querySelector("#fontContent").addEventListener("change", function (e) {
  document.querySelector("#fontResetButton").style.display = "block";

  e.preventDefault();
  const file = e.target.files[0];
  const blobUrl = URL.createObjectURL(file);
  const contentFontName = "headFont_" + Date.now();

  css = `
        @font-face {
          font-family: "${contentFontName}";
          src: url("${blobUrl}");
        }

        .content1, .content2 {
          font-family: "${contentFontName}";
        }
          `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
});

document
  .querySelector("#fontGreetingName")
  .addEventListener("change", function (e) {
    document.querySelector("#fontResetButton").style.display = "block";
    e.preventDefault();
    const file = e.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    const contentFontName = "nameFont_" + Date.now();

    css = `
        @font-face {
          font-family: "${contentFontName}";
          src: url("${blobUrl}");
        }

        .name, .message {
          font-family: "${contentFontName}";
        }
          `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  });

document.querySelector("#fontResetButton").onclick = function () {
  document.querySelector("#fontResetButton").style.display = "none";
  document.querySelector("#fontHead").value = "";
  document.querySelector("#fontContent").value = "";
  document.querySelector("#fontGreetingName").value = "";

  css = `
        .name, .message, .content1, .content2, .heading {
          font-family: "mainFont", sans-serif;
        }
          `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
};

document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") generateGreetingCard();
  else if (e.key === "Escape") {
    document.querySelector("#fontResetButton").style.display = "none";
    document.querySelector("#fontHead").value = "";
    document.querySelector("#fontContent").value = "";
    document.querySelector("#fontGreetingName").value = "";

    css = `
        .name, .message, .content1, .content2, .heading {
          font-family: "mainFont", sans-serif;
        }
          `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }
});
