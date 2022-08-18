// Write a function which returns the day of the week for a specified date.

// While this sounds straight forward the years this function will be testing against are only within the range of 1-99.

// Any date range past 99 or before 1 will not have unit tests against.

// All dates in the unit tests used will be in the format of DD-MM-YYYY.

// 17th of February 5 will be passed as '17-02-0005', though '17-2-5' should work just the same.

// Example:

// getGoodOldDay('19-11-0017'); // Returns Sunday
// getGoodOldDay('5-7-53'); // Returns Saturday
// Note/Hint:

// If in doubt, check the full date you are about to return the day of the week for.

function getGoodOldDay(input) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  input = input.split`-`;
  let d = input[0];
  let m = input[1];
  let y = input[2];

  date.setFullYear(y);
  date.setMonth(m - 1);
  date.setDate(d);
  return week[date.getDay()];
}
