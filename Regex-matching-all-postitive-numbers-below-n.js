// You are given a positive natural number n (which is n > 0) and you should create a regular expression pattern which only matches the decimal representation of all positive natural numbers strictly less than n without leading zeros. The empty string, numbers with leading zeros, negative numbers and non-numbers should not match the regular expression compiled from your returned pattern.

// Input
// n > 0 natural number, n can be from the full possible positive range
// Output
// regular expression pattern as string which will be used to compile a regular expression to do the matches
// Tests
// The compiled regular expression will be tested against decimal representations of random numbers with and without leading zeros, strings including letters and the empty string and should only match for decimal representations of numbers k with 0 < k < n.

function regexBelow(n) {
  let reg = "";

  const dig = n.toString().match(/[0-9]/g);
  const len = dig.length;

  if (len >= 2)
    for (i = 0; i < len - 1; i++) {
      if (reg.length > 0) reg += "|";
      for (j = 0; j <= i; j++) {
        if (j == 0) reg += "[1-9]";
        else reg += "[0-9]";
      }
    }

  for (i = 0; i < len; i++) {
    if (i == 0 && dig[i] == 1) continue;
    if (dig[i] == 0) continue;
    if (reg.length > 0) reg += "|";
    for (j = 0; j <= len - 1; j++) {
      if (j == 0) reg += "[1-";
      else reg += "[0-";

      if (j < i) reg += dig[j] + "]";
      else if (j == i) reg += Number(dig[i]) - 1 + "]";
      else reg += "9]";
    }
  }

  reg = "^(?=.+)(" + reg + ")$";

  return reg;
}
