let uppercase = false;
let numbers = false;
let specialChars = false;
let password = "";

let lowerCharNum = 0;
let upperCharNum = 0;
let number = 0;
let specialCharNum = 0;

const passwordDisplay = document.querySelector("#passwordDisplay");
const generateButton = document.querySelector("#generateButton");
const passwordDiv = document.querySelector("#passwordDiv");

const includeUppercase = document.querySelector("#includeUppercase");
const includeNumbers = document.querySelector("#includeNumbers");
const includeSpecialChars = document.querySelector("#specialChars");

function generatePassword(e) {
  e.preventDefault();
  let characterNum = Number(document.querySelector("#characterNum").value);

  password = "";
  uppercase = includeUppercase.checked;
  numbers = includeNumbers.checked;
  specialChars = includeSpecialChars.checked;

  for (let char = 1; char <= characterNum; char++) {
    // Combo 1
    if (uppercase && numbers && specialChars) {
      let charType = Math.floor(Math.random() * 4) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //uppercase
        case 2:
          let upperCharNum = Math.floor(Math.random() * 26) + 1;
          includeUppercaseChar(upperCharNum);
          break;
        //numbers
        case 3:
          let number = Math.floor(Math.random() * 10);
          password += number;
          break;
        //special characters
        case 4:
          let specialCharNum = Math.floor(Math.random() * 5) + 1;
          includeSpecialChar(specialCharNum);
          break;
      }
    }
    // Combo 2
    else if (uppercase && numbers) {
      let charType = Math.floor(Math.random() * 3) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //uppercase
        case 2:
          let upperCharNum = Math.floor(Math.random() * 26) + 1;
          includeUppercaseChar(upperCharNum);
          break;
        //numbers
        case 3:
          let number = Math.floor(Math.random() * 10);
          password += number;
          break;
      }
    }
    // Combo 3
    else if (uppercase && specialChars) {
      let charType = Math.floor(Math.random() * 3) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //uppercase
        case 2:
          let upperCharNum = Math.floor(Math.random() * 26) + 1;
          includeUppercaseChar(upperCharNum);
          break;
        //special characters
        case 3:
          let specialCharNum = Math.floor(Math.random() * 5) + 1;
          includeSpecialChar(specialCharNum);
          break;
      }
    }
    // Combo 4
    else if (numbers && specialChars) {
      let charType = Math.floor(Math.random() * 3) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //numbers
        case 2:
          let number = Math.floor(Math.random() * 10);
          password += number;
          break;
        //special characters
        case 3:
          let specialCharNum = Math.floor(Math.random() * 5) + 1;
          includeSpecialChar(specialCharNum);
          break;
      }
    }
    // Combo 5
    else if (uppercase) {
      let charType = Math.floor(Math.random() * 2) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //uppercase
        case 2:
          let upperCharNum = Math.floor(Math.random() * 26) + 1;
          includeUppercaseChar(upperCharNum);
          break;
      }
    }
    // Combo 6
    else if (numbers) {
      let charType = Math.floor(Math.random() * 2) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //numbers
        case 2:
          let number = Math.floor(Math.random() * 10);
          password += number;
          break;
      }
    }
    // Combo 7
    else if (specialChars) {
      let charType = Math.floor(Math.random() * 2) + 1;
      switch (charType) {
        //lowercase
        case 1:
          let lowerCharNum = Math.floor(Math.random() * 26) + 1;
          includeLowercaseChar(lowerCharNum);
          break;
        //special characters
        case 2:
          let specialCharNum = Math.floor(Math.random() * 5) + 1;
          includeSpecialChar(specialCharNum);
          break;
      }
    }
    // Combo 8
    else {
      let lowerCharNum = Math.floor(Math.random() * 26) + 1;
      includeLowercaseChar(lowerCharNum);
    }
  }

  document.querySelector("#passwordDiv").style.display = "block";
  document.querySelector("#passwordDisplay").textContent = password;

  lowerCharNum = 0;
  upperCharNum = 0;
  number = 0;
  specialCharNum = 0;
}

function includeLowercaseChar(charNum) {
  switch (charNum) {
    case 1:
      password += "a";
      break;
    case 2:
      password += "b";
      break;
    case 3:
      password += "c";
      break;
    case 4:
      password += "d";
      break;
    case 5:
      password += "e";
      break;
    case 6:
      password += "f";
      break;
    case 7:
      password += "g";
      break;
    case 8:
      password += "h";
      break;
    case 9:
      password += "i";
      break;
    case 10:
      password += "j";
      break;
    case 11:
      password += "k";
      break;
    case 12:
      password += "l";
      break;
    case 13:
      password += "m";
      break;
    case 14:
      password += "n";
      break;
    case 15:
      password += "o";
      break;
    case 16:
      password += "p";
      break;
    case 17:
      password += "q";
      break;
    case 18:
      password += "r";
      break;
    case 19:
      password += "s";
      break;
    case 20:
      password += "t";
      break;
    case 21:
      password += "u";
      break;
    case 22:
      password += "v";
      break;
    case 23:
      password += "w";
      break;
    case 24:
      password += "x";
      break;
    case 25:
      password += "y";
      break;
    case 26:
      password += "z";
      break;
  }
}
function includeUppercaseChar(charNum) {
  switch (charNum) {
    case 1:
      password += "A";
      break;
    case 2:
      password += "B";
      break;
    case 3:
      password += "C";
      break;
    case 4:
      password += "D";
      break;
    case 5:
      password += "E";
      break;
    case 6:
      password += "F";
      break;
    case 7:
      password += "G";
      break;
    case 8:
      password += "H";
      break;
    case 9:
      password += "I";
      break;
    case 10:
      password += "J";
      break;
    case 11:
      password += "K";
      break;
    case 12:
      password += "L";
      break;
    case 13:
      password += "M";
      break;
    case 14:
      password += "N";
      break;
    case 15:
      password += "O";
      break;
    case 16:
      password += "P";
      break;
    case 17:
      password += "Q";
      break;
    case 18:
      password += "R";
      break;
    case 19:
      password += "S";
      break;
    case 20:
      password += "T";
      break;
    case 21:
      password += "U";
      break;
    case 22:
      password += "V";
      break;
    case 23:
      password += "W";
      break;
    case 24:
      password += "X";
      break;
    case 25:
      password += "Y";
      break;
    case 26:
      password += "Z";
      break;
  }
}
function includeSpecialChar(charNum) {
  switch (charNum) {
    //$
    case 1:
      password += "$";
      break;
    //#
    case 2:
      password += "#";
      break;
    //@
    case 3:
      password += "@";
      break;
    //*
    case 4:
      password += "*";
      break;
    //!
    case 5:
      password += "!";
      break;
  }
}
