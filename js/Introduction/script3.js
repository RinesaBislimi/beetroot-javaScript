// Request a distance in km between two cities and the time to cover it. Calculate the required speed.

let distance = prompt("Enter the distance between two cities?");
distance = parseFloat(distance);

let timeToCover = prompt("Enter the time you want to cover?");
timeToCover = parseFloat(timeToCover); 

let speedRequired = distance / timeToCover;

alert("To cover a distance of " + distance + " km within " + timeToCover + " hours, you need to travel at a speed of " + speedRequired + " km/h.");
