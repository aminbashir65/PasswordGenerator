// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("")
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolsArray = "!@#$%^&*+_-".split("")

function generatePassword() {
    var length = prompt("Choose a number between 8 to 128");
    if (length < 8 || length > 128) {

        alert("chosen number does not fit criteria")
        generatePassword()
    } else {


        var lowercase = confirm("Do you want lowercase letters");
        var uppercase = confirm("Do you want uppercase letters");
        var numbers = confirm("Do you want numbers");
        var symbols = confirm("Do you want special characters");

        if (lowercase === false && uppercase === false && numbers === false && symbols === false) {
            alert(" please select atlease one Character type");
            return;
        }

        var availableCharacters = []
        var result = ""
        var chosenChar = 1

        if (lowercase === true) {
            availableCharacters = lowerArray.concat(availableCharacters)
            var lower = randomChar(lowerArray)
            result = lower + result
            chosenChar = chosenChar + 1
        }
        if (uppercase === true) {
            availableCharacters = upperArray.concat(availableCharacters)
            var upper = randomChar(upperArray)
            result = upper + result
            chosenChar = chosenChar + 1
        }
        if (numbers === true) {
            availableCharacters = numbersArray.concat(availableCharacters)
            var number = randomChar(numbersArray)
            result = number + result
            chosenChar = chosenChar + 1
        }
        if (symbols === true) {
            availableCharacters = symbolsArray.concat(availableCharacters)
            var symbol = randomChar(symbolsArray)
            result = symbol + result
            chosenChar = chosenChar + 1
        }
        //console.log(chosenChar)
        for (var i = 0; i <= length; i++) {
            var char = randomChar(availableCharacters)
            result = char + result
            console.log(result)
        }
        result = result.slice(chosenChar, result.length);
        return result
    }
}

function randomChar(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);