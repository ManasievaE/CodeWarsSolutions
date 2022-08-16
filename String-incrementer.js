// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  // Extract string's number
  var number = strng.match(/\d+/) === null ? 0 : strng.match(/\d+/)[0];

  // Store number's length
  var length = number.length;

  // Increment number by 1
  number = (+number + 1).toString();

  // If there were leading 0s, add them again
  while (number.length < length) {
    number = "0" + number;
  }

  return strng.replace(/[0-9]/g, "").concat(number);
}
