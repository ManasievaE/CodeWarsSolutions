// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  var finalResult = "";
  var result = str.split(" ");

  for (i = 0; i < result.length; i++) {
    if (i === 0 && result[0] != "")
      result[i] = "#" + result[i].charAt(0).toUpperCase() + result[i].slice(1);
    else result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    finalResult = finalResult + result[i];
  }

  if (finalResult.length > 140 || str === "" || finalResult === "")
    finalResult = false;

  return finalResult;
}
