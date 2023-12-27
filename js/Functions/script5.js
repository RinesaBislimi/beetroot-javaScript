function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}


const result1 = isPerfectNumber(6);   
const result2 = isPerfectNumber(28); 
const result3 = isPerfectNumber(12);  
