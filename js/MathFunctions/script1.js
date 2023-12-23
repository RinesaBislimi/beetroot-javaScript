// Request a three-digit number from a user and check whether it has identical digits

let number = prompt("Enter a three-digit number:");

if (/^\d{3}$/.test(number) && number[0] === number[1] && number[1] === number[2]) {
    alert("The number has identical digits.");
} else {
    alert("The number does not have identical digits.");
}
