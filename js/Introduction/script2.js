//Request a length of a side of a square from a user and display the perimeter of the square.


let length = prompt("Enter the length of the square?");
length = parseInt(length);

var perimeter = 4 * length;

alert("Perimeter of the square with length "+ length + " is: "+ perimeter);

// Request a radius of a circle and display the area of such a circle.

let radius = prompt("Enter the radius of circle:");
radius = parseInt(radius);

const pi = 3.14;
var area = pi * radius * radius;

alert("Area of circle with radius " + radius + " is: " + area);
