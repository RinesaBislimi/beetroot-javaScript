/*
2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.
*/


function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
  }
  
  
  function simplifyFraction(fraction) {
    const gcd = findGCD(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / gcd,
      denominator: fraction.denominator / gcd,
    };
  }
  

  function addFractions(fraction1, fraction2) {
    const resultNumerator =
      fraction1.numerator * fraction2.denominator +
      fraction2.numerator * fraction1.denominator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
  
    return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator });
  }
  

  function subtractFractions(fraction1, fraction2) {
    const resultNumerator =
      fraction1.numerator * fraction2.denominator -
      fraction2.numerator * fraction1.denominator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
  
    return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator });
  }
  
 
  function multiplyFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.numerator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
  
    return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator });
  }
  
  function divideFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.denominator;
    const resultDenominator = fraction1.denominator * fraction2.numerator;
  
    return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator });
  }

  const fraction1 = { numerator: 3, denominator: 6 };
  const fraction2 = { numerator: 2, denominator: 4 };
  
  const resultSum = addFractions(fraction1, fraction2);
  const resultDifference = subtractFractions(fraction1, fraction2);
  const resultProduct = multiplyFractions(fraction1, fraction2);
  const resultQuotient = divideFractions(fraction1, fraction2);
  
  console.log("Fraction 1:", fraction1);
  console.log("Fraction 2:", fraction2);
  console.log("Sum:", resultSum);
  console.log("Difference:", resultDifference);
  console.log("Product:", resultProduct);
  console.log("Quotient:", resultQuotient);
  