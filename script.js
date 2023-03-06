// Assignment Code
var generateBtn = document.querySelector("#generate");

var checkPasswordCriteria = function (length) {
  var uniquePassword = "";
  var arrayOfChosenCharacters = [];

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

  var arrayOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

  if (containsSpecialCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfSpecialCharacters,
    ];
  } else {
    arrayOfChosenCharacters = [];
  }

  //console.log(arrayOfChosenCharacters);

  if (containsNumericCharacters) {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters, ...arrayOfNumbers];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);

  if (containsLowercaseCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfLowercaseLetters,
    ];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);

  if (containsUppercaseCharacters) {
    arrayOfChosenCharacters = [
      ...arrayOfChosenCharacters,
      ...arrayOfUppercaseLetters,
    ];
  } else {
    arrayOfChosenCharacters = [...arrayOfChosenCharacters];
  }

  //console.log(arrayOfChosenCharacters);

  if (
    !containsSpecialCharacters &&
    !containsNumericCharacters &&
    !containsLowercaseCharacters &&
    !containsUppercaseCharacters
  ) {
    alert("You must select at least one character type");
    return uniquePassword;
  }

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

  //check if the length of the password is ateast 8 characters
  if (passwordLength >= 8 && passwordLength < 128 && !isNaN(passwordLength)) {
    generatedPassword = checkPasswordCriteria(passwordLength);
    return generatedPassword;
  } else {
    // if length of password is <8 prompt user to re-enter the number
    passwordLength = prompt(
      "Password must be atleast 8 characters long. Please re-enter the number"
    );
    generatedPassword = checkPasswordCriteria(passwordLength);
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
