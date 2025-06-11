// * Profile Variables
const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileUsername = document.getElementById("profileUsername");
const profilePassword = document.getElementById("profilePassword");
const profileAge = document.getElementById("profileAge");
const profileDOB = document.getElementById("profileDOB");
const profileCellNum = document.getElementById("profileCellNum");
const profilePhoneNum = document.getElementById("profilePhoneNum");
const profileLocation = document.getElementById("profileLocation");
const profileNation = document.getElementById("profileNation");

function fetchProfile() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("profile").style.display = "flex";
      console.log(data);
      profileImage.src = data.results[0].picture.large;
      profileName.textContent =
        data.results[0].name.title +
        ". " +
        data.results[0].name.first +
        " " +
        data.results[0].name.last;
      profileEmail.textContent = data.results[0].email;
      profileCellNum.textContent = data.results[0].cell;
      profilePhoneNum.textContent = data.results[0].phone;
      profileLocation.textContent = `Street ${data.results[0].location.street.name}, Street No. ${data.results[0].location.street.number}, City ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`;
      profileAge.textContent = data.results[0].dob.age;
      profileDOB.textContent = data.results[0].dob.date.split("T")[0];
      profileUsername.textContent = data.results[0].login.username;
      profilePassword.textContent = data.results[0].login.password;
      profileNation.textContent = data.results[0].nat;
    });
}

document
  .getElementById("generateProfile")
  .addEventListener("click", fetchProfile);
