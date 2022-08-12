// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

// Throw       Score
// ---------   ------------------
// 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  let result = 0;

  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;

  function dicePlay(roll) {
    if (roll === 1) {
      ones++;
      if (ones === 3) {
        result += 1000;
        ones = 0;
      }
    }
    if (roll === 5) {
      fives++;
      if (fives === 3) {
        result += 500;
        fives = 0;
      }
    }
    if (roll === 2) twos++;
    if (roll === 3) threes++;
    if (roll === 4) fours++;
    if (roll === 6) sixes++;
  }

  dice.forEach(dicePlay);

  result += ones * 100;
  result += fives * 50;
  if (sixes >= 3) result += 600;
  if (fours >= 3) result += 400;
  if (threes >= 3) result += 300;
  if (twos >= 3) result += 200;

  return result;
}
