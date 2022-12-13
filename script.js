// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "[", "]", "{", "}", "|", "-", "_", "+", "="];

var confirmLowerCase;

var confirmUpperCase;

var confirmNumbers;

var confirmSpecialChar;

var userSelection;

var passwordLength;

var passwordEmpty=[];

function generatePassword() {
  
  passwordLength = prompt ("Choose a password length between 8 and 128 characters.");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Value required");
  } else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("You must choose a number between 8 and 128.");
    console.log("Password length " + passwordLength);
  } else {
    confirmLowerCase = confirm("Will your password contian lower case letters?");
    console.log("Lower case " + confirmLowerCase);
    confirmUpperCase = confirm("Will your password contain upper case leters?");
    console.log("Upper case" + confirmUpperCase);
    confirmNumbers = confirm("Will your password contain numbers?");
    console.log("Numbers " + confirmNumbers);
    confirmSpecialChar = confirm("Will your password contain special characters?");
    console.log("Special characters " + confirmSpecialChar);
  };

  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialChar) {
    userSelection = alert("You must choose password criteria");
  } else if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialChar){
    userSelection = lowerCase.concat(upperCase, numbers, specialChar);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmUpperCase && confirmNumbers){
    userSelection = lowerCase.concat(upperCase, numbers);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar) {
    userSelection = lowerCase.concat(upperCase, specialChar);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmNumbers && confirmSpecialChar){
    userSelection = lowerCase.concat(numbers, specialChar);
    console.log(userSelection);
  } else if (confirmUpperCase && confirmNumbers && confirmSpecialChar){
    userSelection = upperCase.concat(numbers, specialChar);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmUpperCase){
    userSelection = lowerCase.concat(upperCase);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmNumbers){
    userSelection = lowerCase.concat(numbers);
    console.log(userSelection);
  } else if (confirmLowerCase && confirmSpecialChar){
    userSelection = lowerCase.concat(specialChar);
    console.log(userSelection);
  } else if (confirmUpperCase && confirmNumbers){
    userSelection = upperCase.concat(numbers);
    console.log(userSelection);
  } else if (confirmUpperCase && confirmSpecialChar){
    userSelection = upperCase.concat(specialChar);
    console.log(userSelection);
  } else if (confirmNumbers && confirmSpecialChar) {
    userSelection = numbers.concat(specialChar)
    console.log(userSelection);
  } else if (confirmLowerCase){
    userSelection = lowerCase;
    console.log(userSelection);
  } else if (confirmUpperCase) {
    userSelection = upperCase;
    console.log(userSelection);
  } else if (confirmNumbers){
    userSelection = numbers;
    console.log(userSelection);
  } else if (confirmSpecialChar){
    userSelection = specialChar;
    console.log(userSelection);
  };

  

  for (var i = 0; i < passwordLength; i++){
    var criteria = userSelection[Math.floor(Math.random() * userSelection.length)];
    
    passwordEmpty.push(criteria);
    console.log(criteria);
  }
  
  var password = passwordEmpty.join("");
  console.log("Your generated password is " + password);
  return password;
}
