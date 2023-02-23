// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&[]{}?<>`~;:=+-/*";

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordOptions = "";

  var passwordText = document.querySelector("#password");

  const lowercase = window.confirm(
    "Do you want to include lowercase characters in your password? Click Ok for Yes & Cancel for No"
  );
  console.log(lowercase);
  const uppercase = window.confirm(
    "Do you want to include uppercase characters in your password? Click Ok for Yes & Cancel for No"
  );
  console.log(uppercase);
  const numeric = window.confirm(
    "Do you want to include numeric values in your password? Click Ok for Yes & Cancel for No"
  );
  console.log(numeric);
  const specialCharacters = window.confirm(
    "Do you want to include special characters in your password? Click Ok for Yes & Cancel for No"
  );
  console.log(specialCharacters);
  let passwordLength = parseInt(
    window.prompt("Password Length (enter 8 - 128 characters)")
  );
  console.log(passwordLength);

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(
      window.prompt(
        "That is not a valid response. Make sure you are selecting a number between 8 and 128"
      )
    );
  }

  if (lowercase) {
    passwordOptions += lower;
    password += getRandom(lower);
    console.log(password);
  }

  if (uppercase) {
    passwordOptions += upper;
    password += getRandom(upper);
    console.log(password);
  }

  if (numeric) {
    passwordOptions += numbers;
    password += getRandom(numbers);
    console.log(password);
  }

  if (specialCharacters) {
    passwordOptions += specialChar;
    password += getRandom(specialChar);
    console.log(password);
  }

  for (let i = password.length; i < passwordLength; i++) {
    password += getRandom(passwordOptions);
    console.log(password);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
