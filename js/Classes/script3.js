/*
Execute a class that describes a refillable marker inheriting it from the regular marker and adding a method for refilling it. 
*/
class RegularMarker {
    constructor(color, inkAmount) {
      this.color = color;
      this.inkAmount = inkAmount;
    }
  
    write(text) {
      let remainingInk = this.inkAmount;
  
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && remainingInk < 0.5) {
          console.log(`Out of ink! Could not write: "${text.substring(i)}"`);
          break;
        }
  
        
        if (text[i] !== ' ') {
          remainingInk -= 0.5;
        }
  
       
        console.log(`Writing "${text[i]}" in ${this.color} ink`);
      }
    }
  }
  
  class RefillableMarker extends RegularMarker {
    constructor(color, inkCapacity) {
      super(color, inkCapacity);
    }
  
   
    refill(inkAmount) {
      if (inkAmount > 0) {
        this.inkAmount += inkAmount;
        console.log(`Marker refilled with ${inkAmount}% ink. Current ink amount: ${this.inkAmount}%`);
      } else {
        console.log('Refill amount must be greater than 0.');
      }
    }
  }
  
  const myRefillableMarker = new RefillableMarker('green', 30);
  myRefillableMarker.write('Hello, Refillable Marker!'); 
  myRefillableMarker.refill(50);
  myRefillableMarker.write('Let\'s write again!');