let number = prompt("Enter a number:");

if (!isNaN(number)) {
    let count = 0;
    while (number > 0) count++, number = Math.floor(number / 10);
    alert(`The number of digits is: ${count}`);
} else {
    alert("Invalid input. Please enter a valid number.");
}
