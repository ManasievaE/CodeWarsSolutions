// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  let startingInts = start.split(".").map((addr) => {
    return +addr;
  });
  let endingInts = end.split(".").map((addr) => {
    return +addr;
  });
  let totalIps = 0;
  let multipliers = [256 * 256 * 256, 256 * 256, 256, 1];
  for (let i = 0; i < 4; i++) {
    totalIps = totalIps + (endingInts[i] - startingInts[i]) * multipliers[i];
  }
  return totalIps;
}
