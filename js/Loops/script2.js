//Request two numbers and find only their largest common divisor.

const findGCDWithLoop = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {

    let gcd = findGCDWithLoop(Math.abs(num1), Math.abs(num2));
    alert(`The largest common divisor is: ${gcd}`);
} else {
    alert("Invalid input,enter valid numbers");
}
