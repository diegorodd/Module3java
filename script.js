// Assignment code here
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
// look up math.random
function startPwd(){
  var pwdLength = parseInt(prompt('how long would you like your pwd to be? must be between 8-128'));
  if(Number.isNaN(pwdLength)){
    alert('must be a number');
    return null;
  }
  // || means or in javascript && means "and"
  if(pwdLength < 8 || pwdLength > 128){
    alert ('must be between 8 and 128')
    return null;
  }
  var includeLowercaseChar = confirm('would you want to include lowercase letters?')
  var includeUppercaseChar = confirm('would you want to include uppercase letters?')
  var includeNumberChar = confirm('would you want to include numbers?')
  var includeSpecialChar = confirm('would you want to inlcude special characters?');
  if()
}
    // need a way to check if they choose none of these choices , if they choose nothing alert them they must choose at least one character type
  



 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

startPwd