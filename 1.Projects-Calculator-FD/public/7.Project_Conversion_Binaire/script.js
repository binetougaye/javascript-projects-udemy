const inputValue = document.getElementById("nombre-decimal");
const binaire = document.getElementById("binaire");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");

inputValue.addEventListener("input", () => {
    let value = parseInt(inputValue.value);

    if (isNaN(value)) {
        binaire.innerText = "";
        octal.innerText = "";
        hexadecimal.innerText = "";
        return;
    }
    let binary = "";
    let octale = "";
    let hexa = "";

    let valueCopy = value;

    // Conversion en binaire
    while (value > 0) {
        binary = (value % 2) + binary;
        value = Math.floor(value / 2);
    }

    value = valueCopy;
    // Conversion en octal
    while (value > 0) {
        octale = (value % 8) + octale;
        value = Math.floor(value / 8);
    }

    value = valueCopy;
    // Conversion en hexadécimal
    const hex = "0123456789ABCDEF";
    while (value > 0) {
        hexa = hex[value % 16] + hexa;
        value = Math.floor(value / 16);
    }

    binaire.innerText = binary;
    octal.innerText = octale;
    hexadecimal.innerText = hexa;
});
