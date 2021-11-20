// Assignment code here
 function generatePassword() {
   var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   var numericArrays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
   var specialCharactersArrays = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
   var finalArrays = []
   var password = []
   var passwordLength = parseInt(prompt("Hong long do you want your password?"))
    if (passwordLength < 8 || passwordLength > 128) {
      alert("NOPE! It has to be at least 8 characters and no more than 128 characters!")
      return
    }
    var upperCase = confirm("Do you want uppercase?")
    var lowerCase = confirm("Do you want lowercase?")
    var numeric = confirm("Do you want numbers?")
    var specialCharacters = confirm("Do you want special characters?")
    if (!upperCase && !lowerCase && !numeric && !specialCharacters) {
      alert("You need to choose at least one criteria")
      return
    }
    if (upperCase) {
      finalArrays = finalArrays.concat (upperCaseLetters)
    }
    if (lowerCase) {
      finalArrays = finalArrays.concat (lowerCaseLetters)
    }
    if (numeric) {
      finalArrays = finalArrays.concat (numericArrays)
    }
    if (specialCharacters) {
      finalArrays = finalArrays.concat (specialCharactersArrays)
    }
    for (var i=0; i<passwordLength; i++) {
      var randomChar = finalArrays[Math.floor(Math.random() * finalArrays.length)]
      password.push(randomChar)
    }
    return password.join("")
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
