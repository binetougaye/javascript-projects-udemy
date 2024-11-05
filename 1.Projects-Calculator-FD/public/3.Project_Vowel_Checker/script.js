function checkVowels() {
    var text = document.getElementById("inputText").value;
    text = text.toLowerCase()
    var vowelCount = 0;
    // Convert into lowercase
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i)
        if (isVowel(char)) {
            vowelCount++
        }
    }
    var result = document.getElementById('result').innerText = "Total vowels: " + vowelCount
}
function isVowel(char) {
    var vowel = ["a", "e", "u", "o", "y", "i"]
    return vowel.includes(char)
}