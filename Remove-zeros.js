// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

function removeZeros(array) {
  let arr = array.length;
  let zero;
  for (let i = 0; i < arr; i++) {
    if (array[i] === 0 || array[i] === "0") {
      zero = array[i];

      //every number back one spot

      for (let j = i--; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      //replacing last elements with zeros

      array[array.length - 1] = zero;

      // gi "zaklucuvame" nulite na kraj namaluvajkji go brojot na iterations
      // ako ne go namalime kje imame uste edna iteration koja koga kje naide na nula
      // kje ni gi promeni mestata na nulite int i nulite string

      arr--;
    }
  }
  return array;
}

///FIRST ATTEMPT????

// let zero = 0;
// for (let i = 0; x < arr.length; i++) {
//   if (array[i] != 0 && array[i]) != '0') {
//   [array[i], array[zero]] = [array[zero], array[zero]];
//   zero++;
//   }
// }
//   return array;
// }
