const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!@#$%^&*()_+-=[]{}/|;",.<>?';

// Get the html elements
const lengthEl = document.getElementById("length")
const lowercaseEl = document.getElementById("lowercase")
const uppercaseEl = document.getElementById("uppercase")
const numberel = document.getElementById("numbers")
const symbolEl = document.getElementById("symbols")
const passwordEl = document.getElementById("password")
const generateBtn = document.getElementById("generate")

generateBtn.addEventListener("click", function () {
    const length = lengthEl.value
    let characters = ""
    let password = ""
    if (lowercaseEl.checked) {
        characters += lowercaseLetters
    }
    if (uppercaseEl.checked) {
        characters += uppercaseLetters
    }
    if (numberel.checked) {
        characters += numbers
    }
    if (symbolEl.checked) {
        characters += symbols
    }
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    passwordEl.value = password
})
