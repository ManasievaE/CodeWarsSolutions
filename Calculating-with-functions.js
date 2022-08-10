// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function calcFunc(number, operations) {
  if (!operations) return number;
  return operations(number);
}

function zero(operations) {
  return calcFunc(0, operations);
}
function one(operations) {
  return calcFunc(1, operations);
}
function two(operations) {
  return calcFunc(2, operations);
}
function three(operations) {
  return calcFunc(3, operations);
}
function four(operations) {
  return calcFunc(4, operations);
}
function five(operations) {
  return calcFunc(5, operations);
}
function six(operations) {
  return calcFunc(6, operations);
}
function seven(operations) {
  return calcFunc(7, operations);
}
function eight(operations) {
  return calcFunc(8, operations);
}
function nine(operations) {
  return calcFunc(9, operations);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}
