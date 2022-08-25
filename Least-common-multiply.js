// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1. If any argument is 0, return 0.

var lcm = function () {
  var res = arguments[0];
  for (var i = 1; i < arguments.length; i++)
    res = (res * arguments[i]) / gcd(res, arguments[i]);
  return res;
};

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
