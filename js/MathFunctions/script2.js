// Request a five-digit number from a user and check whether it is a palindrome

let number = prompt("Enter a five-digit number:");

if (/^\d{5}$/.test(number) && number === number.split('').reverse().join('')) {
    alert("The number is a palindrome.");
} else {
    alert("The number is not a palindrome.");
}
