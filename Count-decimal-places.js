// Can you write an algorithm to determine the number of decimal places of a number?

// decimalPlaces(3.14); //yields 2
// decimalPlaces(2.e-14); //yields 14
// decimalPlaces(-3.14e-21); //yields 23
// decimalPlaces(10.75); //yields 2
// decimalPlaces(NaN); //yields 0
// decimalPlaces(Infinity); //yields 0
// Consider the decimal places to be the number of digits after the decimal separator when the number is expressed in ordinary decimal notation.

function decimalPlaces(n) {
  // Pull out the fraction and the exponent.
  var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(n);

  if (!match) {
    return 0;
  }
  // Count the number of digits in the fraction and subtract the
  // exponent to simulate moving the decimal point left by exponent places.
  return Math.max(
    0, // lower limit.
    (match[1] == "0" ? 0 : (match[1] || "").length) - // fraction length
      (match[2] || 0)
  ); // exponent
}
