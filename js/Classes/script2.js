/*
Execute a class that describes a regular marker. It should contain the following components: 

a field that contains the color of the marker;
a field that contains the amount of ink in the marker (in percentage);
a method for input (the method takes a string and puts out the text in the given color; the text appears as long as the marker has ink; one non-space symbol takes 0,5% ink from the marker).
*/
class Marker {
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
  

  const myMarker = new Marker('blue', 50);
  
  myMarker.write('Hello, World!');
  
  const longText = 'This is a longer text to test ink depletion.';
  myMarker.write(longText); 
  