function formatTime(hours, minutes, seconds = 0) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


const result1 = formatTime(5, 30, 45);   
const result2 = formatTime(10, 15);   
