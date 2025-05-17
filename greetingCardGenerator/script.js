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
