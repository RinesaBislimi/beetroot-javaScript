/*
1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

A method that displays the car info 
A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
*/
const car = {
    manufacturer: "Audi",
    model: "A4",
    year: 2021,
    averageSpeed: 65,
  

    displayInfo: function () {
      console.log(`Car Info: ${this.year} ${this.manufacturer} ${this.model}`);
    },
  
   
    calculateTime: function (distance) {
      const hoursWithoutBreaks = distance / this.averageSpeed;
      const numberOfBreaks = Math.floor(hoursWithoutBreaks / 4);
      const totalTime =
        hoursWithoutBreaks + numberOfBreaks 
  
      console.log(`Time to cover ${distance} miles: ${totalTime.toFixed(2)} hours`);
    },
  };
  

  car.displayInfo(); 
  car.calculateTime(200); 
  