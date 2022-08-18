// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let num = {};

  for (let i = 0; i < string.length; i++) {
    let ch = string.charAt(i);
    if (!num[ch]) num[ch] = 1;
    else num[ch]++;
  }

  return num;
}
