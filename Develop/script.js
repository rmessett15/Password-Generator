// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log("inside function");
const passwordLength = window.prompt("Password Length (enter 8 - 128 characters)", 0);
console.log("#");
const lowercase = window.prompt("Do you want to include lowercase characters in you'r password, yes or no?");
console.log("yes");
const uppercase = window.prompt("Do you want to include uppercase characters in you'r password, yes or no?");
console.log("yes");
const numeric = window.prompt("Do you want to include numberic values in you'r password, yes or no?");
console.log("yes");
const specailCharacters = window.prompt("Do you want to include special characters in you'r password, yes or no?");
console.log("yes");

console.log(passwordLength);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

