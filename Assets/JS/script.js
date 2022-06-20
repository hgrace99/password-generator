// Assignment code here
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!$&"

function generatePassword(length){
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++) {
    result +=characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

console.log(generatePassword(9));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(9);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
