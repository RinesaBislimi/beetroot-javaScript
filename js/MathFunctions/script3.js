//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 


let usd = parseFloat(prompt("Enter the amount in USD:"));

if (!isNaN(usd)) {
    let choose = prompt("Choose one of : EUR, SEK, AUD ?").toUpperCase();

    let exchange;
    switch (choose) {
        case "EUR":
           exchange = 0.85;
            break;
        case "SEK":
           exchange = 8.75;
            break;
        case "AUD":
            exchange = 1.35;
            break;

        default:
            alert("Invalid");
            break;
    }

    if (exchange !== undefined) {
        let converter = usd * exchange;
        alert("$" + usd + " is equal to " + convertedAmount.toFixed(2) + " " + choose);
    }
} else {
    alert("Invalid input.Enter a valid amount in USD.");
}
