function calculateTip() {

    // get the input type values
    const billAmount = parseFloat(document.getElementById("bill-amount").value)
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value)
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Veuillez remplir tous les champs");
        return;
    }
    const tipAmount = billAmount * (tipPercentage / 100)
    const totalAmount = tipAmount + billAmount

    // Calculate the Tip and Total Amount
    if (tipAmount < 0 || tipPercentage < 0) {
        alert("Veuillez saisir des entiers")
        return
    } else {
        // Display the Results
        document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2)
        document.getElementById("total-amount").textContent = '$' + totalAmount.toFixed(2)
    }


}
