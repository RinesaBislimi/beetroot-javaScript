//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.


let circumferenceLength = parseFloat(prompt("Enter the length of the circumference:"));
let squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));

if (circumferenceLength / (2 * Math.PI) * 2 <= squarePerimeter / 4) {
    alert("The circumference can fit within the square.");
} else {
    alert("The circumference cannot fit within the square.");
}
