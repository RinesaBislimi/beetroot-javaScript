/*
Execute a class that describes a circumference. It should contain the following components: 

a field that contains the radius of the circumference;
a getter that returns the radius;
a setter that sets the radius;
a getter that returns the diameter;
a method that calculates the content;
a method that calculates the length of the circumference.
Demonstrate the work of properties and methods. 
*/
class Circumference {
    constructor(radius) {
      this._radius = radius;
    }

    get radius() {
      return this._radius;
    }
  
   
    set radius(newRadius) {
      this._radius = newRadius;
    }
  
   
    get diameter() {
      return this._radius * 2;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    
    calculateLength() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  
  const myCircumference = new Circumference(5);

  console.log("Initial Radius:", myCircumference.radius);
  console.log("Initial Diameter:", myCircumference.diameter);

  myCircumference.radius = 8;
  console.log("Updated Radius:", myCircumference.radius);
  console.log("Updated Diameter:", myCircumference.diameter);
  console.log("Area:", myCircumference.calculateArea());
  console.log("Length:", myCircumference.calculateLength());
  