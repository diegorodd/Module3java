// Assignment code here
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbericalChar = ['0','1','2','3','4','5','6','7','8','9']
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


if("lowercasechar"){
    passwordChar += lowercaseChar;
}
// confirm boolean for uppercase "yes or no"
var uppercaseChar = confirm('you need uppercase characaters');

if(uppercaseChar){
    passwordChar += uppercaseChar
}
var numericalChar =confirm('would need numbers in the code');

if(numericalChar){
    passwordChar += numbericalChar;
}  
//  cornfirm for special numbers "yes or no"
var specialChar = confirm('you would as well need special characters');

if(specialChar){
    passwordChar += specialChar;
}

for(var i = 0; i < passwordlength; i++) {
    password = passwordChar[Math.floor(Math.random()* passwordChar.length)]
}
return password 
} 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
}

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

// function  generatePassword(){
//     return writeasscodeword;
// } 




