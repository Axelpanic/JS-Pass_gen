// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button pressed");
}

const numChars = windows.prompt

// Write password to the #password input on index.html
function writePassword() {
  //call generatePassword function
  var password = generatePassword();
  
   var passwordText = document.querySelector("#password");
  
   passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
