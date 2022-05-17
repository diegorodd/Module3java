// Assignment code here
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
// look up math.random

function generatePassword() {
var password = "";
var passwordChar = "";
// 
var passwordlength = prompt('how many characters would you like your password to have? Password must be between 8-128 characters.');
passwordlength = parseInt(passwordlength);

if(passwordlength < 8){
    alert('Password must have more than 7 characters.');
    return "";
}
if(passwordlength > 128) {
    alert('Password must not have more than 128 characters.');
    return "";
}
// confirm boolean for lowercase "yes or no"
var lowercaseChar = confirm('you need lowercase characaters');

if()




  
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

startPwd();