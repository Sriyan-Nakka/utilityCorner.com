const generateJokeBtn = document.querySelector("#generateJoke");

const jokeContainer1 = document.querySelector("#jokeContainer1");
const setup = document.querySelector("#setup");
const delivery = document.querySelector("#delivery");

const jokeContainer2 = document.querySelector("#jokeContainer2");
const joke = document.querySelector("#joke");

function generateJoke() {
  fetch(
    "https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.type === "twopart") {
        jokeContainer1.style.display = "flex";
        jokeContainer2.style.display = "none";

        setup.textContent = data.setup;
        delivery.textContent = data.delivery;
      } else if (data.type === "single") {
        jokeContainer1.style.display = "none";
        jokeContainer2.style.display = "flex";

        joke.textContent = data.joke;
      }
      document.querySelector("#jokes").style.display = "flex";
    });
}

generateJokeBtn.addEventListener("click", generateJoke);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generateJoke();
  }
});
