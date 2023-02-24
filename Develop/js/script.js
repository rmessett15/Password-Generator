// Assignment code here
// String variables - created separate stings for each character type
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&[]{}?<>`~;:=+-/*";

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Get references to the #generate element
// Refers to the generate password button and makes it a variable so it can be selected below (line 87) with an addEventListener "click"
var generateBtn = document.querySelector("#generate");

// Defined getRandom function to be called on within lines 55-82
// Utilized to randomize my string variables
function getRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Defined writePassword function
// User inputs saved within this function
// Empty string variables live within this function and are added to depending on user inputs
function writePassword() {
  // Empty string variables
  var password = "";
  var passwordOptions = "";

  // passwordText variable uses a querySelector method to link to the class password within the HTML
  var passwordText = document.querySelector("#password");

  // Lines 32-47 are .confirm methods utilized to log boolean values of users choices
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
  // Prompt used for character length
  // parseInt method utilized to ensure a number is selected
  let passwordLength = parseInt(
    window.prompt("Password Length (enter 8 - 128 characters)")
  );
  console.log(passwordLength);

  // While loop utilized to ensure the user enters a number between 8 and 128. If number outside of the range is selected then a prompt shows them they have entered an invalid response
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(
      window.prompt(
        "That is not a valid response. Make sure you are selecting a number between 8 and 128"
      )
    );
  }

  // Lines 65-87 are my conditionals which add user selected criteria to the empty string passwordOptions
  // Then call on the getRandom function to randomize each string variable selected and added to the empty string variable password
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

  // For loop added which iterates over the passwordLength selected by the user
  // getRandom function is then called again to randomize the no longer empty string variable passwordOptions and is then finalized and added to the password variable
  for (let i = password.length; i < passwordLength; i++) {
    password += getRandom(passwordOptions);
    console.log(password);
  }

  // This allows for the generated password to be inserted in the text box and displayed to the user
  passwordText.value = password;
}

// Add event listener to generate button - invoked by the user clicking the button
generateBtn.addEventListener("click", writePassword);
