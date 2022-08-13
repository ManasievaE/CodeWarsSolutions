// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

function zeros(n) {
  let divider = 1;
  let sum = 0;

  while (divider <= n) {
    sum = Math.floor(sum + n / (divider *= 5));
  }
  return sum;
}

//    Number of trailing zeroes in a number will be the highest power of 10 present in the number.

//    Now we know that 10n = 2n * 5n. So, the highest power of 10 will be equal to the minimum of the highest power of 2 and the highest power of 5 present in n!. We can observe that the highest power of 2 is always going to be less than or equal to the highest power of 5 in any value of n!. So, our problem boils down to finding the highest power of 5 in n!.

//    The highest power of a prime number p, present in any factorial is given by a formula known as Legendre’s Formula
