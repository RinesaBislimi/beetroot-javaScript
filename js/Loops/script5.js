//Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

let positiveNum = 0;
let negativeNum = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < 10; i++) {
    let number = prompt(`Enter number ${i + 1}:`);
    number = parseInt(number);

    if (isNaN(number)) {
        alert('Invalid input,enter a valid number.');
        i--; 
    } else {
        if (number > 0) {
            positiveNum++;
        } else if (number < 0) {
            negativeNum++;
        } else {
            zeroCount++;
        }

        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}
alert(`Positive numbers: ${positiveNum}`);
alert(`Negative numbers: ${negativeNum}`);
alert(`Zeroes: ${zeroCount}`);
alert(`Even numbers: ${evenCount}`);
alert(`Odd numbers: ${oddCount}`);
