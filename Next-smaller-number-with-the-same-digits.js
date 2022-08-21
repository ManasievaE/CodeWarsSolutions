// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

function nextSmaller(n) {
  var d = n.toString().split("");
  let p = -1;

  for (let i = d.length - 1; i > 0; i--) {
    if (d[i] < d[i - 1]) {
      p = i - 1;
      break;
    }
  }
  if (p === -1) {
    return p;
  }
  let right = d.splice(p);
  let pv = right.splice(0, 1);

  let highest = null;
  let highIndex = null;
  for (let i = 0; i < right.length; i++) {
    if (right[i] < pv[0]) {
      if (highest === null || right[i] > highest) {
        highest = right[i];
        highIndex = i;
      }
    }
  }
  if (highIndex === null) {
    return -1;
  }

  right.splice(highIndex, 1);
  right.push(pv);
  right = right.sort((a, b) => b - a);

  var res = d.concat([highest]).concat(right).join("");

  if (+res[0] === 0 || +res > n) return -1;

  return +res;
}
