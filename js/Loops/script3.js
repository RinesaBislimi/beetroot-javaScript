//Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

let number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    let divisors = "Divisors of " + number + ": ";
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            divisors += i + ", ";
        }
    }
    divisors = divisors.slice(0, -2);
    alert(divisors);
} else {
    alert("Invalid input. Please enter a valid number.");
}


