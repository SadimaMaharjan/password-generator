// Assignment Code

var generateBtn = document.querySelector("#generate");

var checkPasswordCriteria = function (length) {
  var uniquePassword = ""; // variable to store the password

  var arrayOfChosenCharacters = []; // array to store selected characters

  //array of special characters
  var arrayOfSpecialCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    ">",
    "<",
    ",",
    ".",
    "?",
    "/",
  ];

  //array of Numbers from 0 to 9
  var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // array of alphabets from a to z
  var arrayOfLowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // array of alphabets from A to Z
  var arrayOfUppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var containsSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  var containsNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  var containsLowercaseCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  var containsUppercaseCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  //check if user wants special characters in a password
  if (containsSpecialCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfSpecialCharacters,
    ];
  } else {
    arrayOfChosenCharacters = [];
  }

  //console.log(arrayOfChosenCharacters);
  //check if user wants numbers in a password
  if (containsNumericCharacters) {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters, ...arrayOfNumbers];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);
  //check if user wants lowercase characters in a password
  if (containsLowercaseCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfLowercaseLetters,
    ];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);
  //check if user wants uppercase characters in a password
  if (containsUppercaseCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfUppercaseLetters,
    ];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);
  // check if user has selected at least one of the character types; if not display an alert message
  if (
    !containsSpecialCharacters &&
    !containsNumericCharacters &&
    !containsLowercaseCharacters &&
    !containsUppercaseCharacters
  ) {
    alert("You must select at least one character type");
    return uniquePassword;
  }

  //loop through array of chosen characters and select characters at random index
  for (var i = 0; i < length; i++) {
    uniquePassword +=
      arrayOfChosenCharacters[
        Math.floor(Math.random() * arrayOfChosenCharacters.length)
      ];
  }

  //console.log(uniquePassword);

  return uniquePassword;
};

//generatePassword function
var generatePassword = function () {
  var generatedPassword = "";

  //passwordLength is the number given by user
  var passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );

  //check if the length of the password is ateast 8 characters and less than 128 and is a number
  // if length of password does not satisfy the condition then prompt user to re-enter the number

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = alert(
      "Password must be a number between 8 and 128. Please re-enter the number"
    );
    return generatePassword();
  } else {
    generatedPassword = checkPasswordCriteria(passwordLength);
    //console.log(generatedPassword);
    return generatedPassword;
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
