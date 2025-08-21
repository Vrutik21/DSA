/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let longest = 0;
  let newString = "";
  let kCounter = k;

  if (k <= 0) {
    return 1;
  }

  while (j < s.length) {
    console.log("newString", newString);
    if (s[i] !== s[j]) {
      if (kCounter > 0) {
        newString += s[i];
        --kCounter;
      } else {
        kCounter = k;
        ++i;
        j = i + 1;
        newString = "";
      }
    } else {
      newString += s[j];
      ++j;
    }
    longest = Math.max(newString.length, longest);
  }

  return longest;
};

// console.log(characterReplacement("AABABBA",1))
console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AAAA", 2));
