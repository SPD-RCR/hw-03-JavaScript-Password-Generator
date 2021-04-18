

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Declare variables
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersStr = "0123456789";
var specialsStr = "!@#$%^&*(){}[]=<>/,.";
var passwordCharacters = "";
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log("After WritePassword:", password);
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword(){
  // ask the user how many characters they want
  var totalCharacters = prompt("How many characters should be in your password? (between 8 and 128)");
  if(isNaN(totalCharacters)){
    alert("You must enter a number!");
    return generatePassword()
  }
  if(totalCharacters<8 || totalCharacters> 128){
    alert("Please enter a number between 8 - 128!");
    return generatePassword()
  }
  console.log("User chosen number of characters in password:", totalCharacters)

  //ask the user if they want to include UPPER case letters, lower case letters, numbers, and/or special characters? 
  //MUST pick at least 1 type of characters.
  var hasUpperCase = confirm("Should your password include Upper case letters?");
  var hasLowerCase = confirm("Should your password include Lower case letters?");
  var hasNumbers = confirm("Should your password include Numbers?");
  var hasSpecials = confirm("Should your password include Special Characters?");

  if(!hasUpperCase&&!hasLowerCase&&!hasNumbers&&!hasSpecials){
    alert("You MUST choose at least 1 character type!");
    return generatePassword()
  }

  if(hasUpperCase){
    passwordCharacters += upperCaseStr
  }
  console.log("UPPER case:", hasUpperCase);

  if(hasLowerCase){
    passwordCharacters += lowerCaseStr
  }
  console.log("Lower case:", hasLowerCase);

  if(hasNumbers) {
    passwordCharacters += numbersStr
  }
  console.log("Numbers:", hasNumbers);

  if(hasSpecials) {
    passwordCharacters += specialsStr
  }
  console.log("Specials:", hasSpecials);

  console.log("After 4 charcter type Questions:", passwordCharacters); //passwordCharacters now contains of ALL possible characters that can be in user password

  for (var i = 0; i < totalCharacters; i++) {
    var randomNum = Math.floor(Math.random() * passwordCharacters.length)
    var randomCharacters = passwordCharacters[randomNum]
    password = password + randomCharacters
  }
  console.log("After users number of Randoms are picked: ", password)
  return password;
}