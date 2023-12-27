function dateDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
   
    const secondsDate1 = timeToSeconds(hours1, minutes1, seconds1);
    const secondsDate2 = timeToSeconds(hours2, minutes2, seconds2);

   
    const diffSeconds = Math.abs(secondsDate1 - secondsDate2);


    const hoursDiff = Math.floor(diffSeconds / 3600);
    const minutesDiff = Math.floor((diffSeconds % 3600) / 60);
    const remainingSecondsDiff = diffSeconds % 60;

    
    const formattedHoursDiff = String(hoursDiff).padStart(2, '0');
    const formattedMinutesDiff = String(minutesDiff).padStart(2, '0');
    const formattedSecondsDiff = String(remainingSecondsDiff).padStart(2, '0');

    return `${formattedHoursDiff}:${formattedMinutesDiff}:${formattedSecondsDiff}`;
}


const difference = dateDifference(10, 30, 0, 8, 45, 15);
console.log(difference);
