let continueCalculations = true;

while (continueCalculations) {
    let number1 = parseFloat(prompt('Enter the first number:'));
    let operator = prompt('Enter the operator (+, -, *, /):');
    let number2 = parseFloat(prompt('Enter the second number:'));

    if (isNaN(number1) || isNaN(number2)) {
        alert('Invalid input,enter valid numbers.');
        continue;
    }

    let result = eval(`${number1} ${operator} ${number2}`);

    if (isNaN(result)) {
        alert('Invalid operator,enter one of (+, -, *, /).');
        continue;
    }

    alert(`Result: ${result}`);
    continueCalculations = prompt('Do you want to perform another calculation? (yes/no)').toLowerCase() === 'yes';
}

alert('Calculator closed.');
