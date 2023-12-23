//Request a user’s name and display the response “Hello, [name]”.

let name = prompt("Enter your name ?")

alert('Hello,' + name + "!");

//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 


const currentYear = new Date().getFullYear(); 
let yearOfBirth = prompt("Enter the year of birth?");
yearOfBirth = parseInt(yearOfBirth);
let age = currentYear - yearOfBirth;
age = parseInt(age);
alert('Your age is: ' + age);