// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  var count = 0;
  str1 = str1.split("");
  str2 = str2.split("");
  //creating object
  let object1 = {};
  let object2 = {};

  //looping through the objects so we have access to all latters of the objects

  for (i = 0; i < str2.length; i++) {
    if (object2[str2[i]] === undefined) {
      object2[str2[i]] = 1;
    } else {
      object2[str2[i]] += 1;
    }
  }

  for (j = 0; j < str1.length; j++) {
    if (object1[str1[j]] === undefined) {
      object1[str1[j]] = 1;
    } else {
      object1[str1[j]] += 1;
    }
  }

  //checking if all letters in object2 are in object2 by passing a value to the counter

  for (const x in object2) {
    if (object1[x] >= object2[x]) {
      count += object2[x];
    }
  }

  return count === str2.length ? true : false;
}
