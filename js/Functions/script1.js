function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

const result1 = compareNumbers(5, 10); // Returns -1
const result2 = compareNumbers(20, 5); // Returns 1
const result3 = compareNumbers(8, 8);  // Returns 0
