// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

let snail = function (arr) {
  let final = [];

  function trim(array) {
    if (array.length === 0) {
      return;
    }
    if (array.length === 1) {
      final = final.concat(array[0]);
      return;
    }
    let newArr = [];
    for (let i = 1; i < array.length - 1; i++) {
      newArr.push(array[i].slice(1, array.length - 1));
    }
    console.log(newArr);

    // add top
    final = final.concat(array[0]);

    // add right
    for (let i = 1; i < array.length - 1; i++) {
      final.push(array[i][array.length - 1]);
    }

    // add bottom
    final = final.concat(array[array.length - 1].reverse());

    // add left
    for (let i = array.length - 2; i > 0; i--) {
      final.push(array[i][0]);
    }

    trim(newArr);
  }

  trim(arr);
  return final;
};
