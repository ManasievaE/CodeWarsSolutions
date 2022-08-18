// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  var smile = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smile.length; j++) {
      if (arr[i] === smile[j]) {
        count++;
      }
    }
  }
  return count;
}

//FIRST TRY (Doesn't work just for one test)

//function countSmileys(arr) {
//   if(arr.length === 0) return 0;

//   let count = 0;
//   arr.map(function(v){
//     if(
//       (
//         v.charAt(0) === ":" || v.charAt(0) === ";"
//       )&&
//       (
//         v.charAt(v.length-1) === ")" || v.charAt(v.length-1) === "D" || v.charAt(2) === ")" || v.charAt(2) === "D"
//       )&&
//       (
//         v.charAt(1) === ")" ||
//         v.charAt(1) === "D" ||
//         v.charAt(1) === "-" ||
//         v.charAt(1) === "~"
//       )
//     ) count++;
//   })
//   return count;
// }
