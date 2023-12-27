function perfectNumbersInRange(min, max) {
    const perfectNumbers = [];

    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}


const result = perfectNumbersInRange(1, 30);
console.log(result); 
