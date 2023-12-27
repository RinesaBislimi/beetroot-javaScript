
/*3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

A method for displaying the time. 
A method for changing the time by a given amount of seconds. 
A method for changing the time by a given amount of minutes.  
A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».
*/
function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  
    
    this.displayTime = function () {
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    };
  
    
    this.addSeconds = function (addedSeconds) {
      this.seconds += addedSeconds;
      this.normalizeTime();
    };
  
    
    this.addMinutes = function (addedMinutes) {
      this.minutes += addedMinutes;
      this.normalizeTime();
    };
  
    
    this.addHours = function (addedHours) {
      this.hours += addedHours;
      this.normalizeTime();
    };
  
    
    this.normalizeTime = function () {
      if (this.seconds >= 60) {
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds %= 60;
      }
      if (this.minutes >= 60) {
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
      }
      this.hours %= 24; 
    };
  }
  
  
  const currentTime = new Time(20, 30, 45);
  currentTime.displayTime(); 
  currentTime.addSeconds(30);
  currentTime.displayTime(); 
  currentTime.addMinutes(15);
  currentTime.displayTime(); 
  currentTime.addHours(2);
  currentTime.displayTime(); 
  
