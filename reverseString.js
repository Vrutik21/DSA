/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let j = s.length - 1;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let k = s[i];
    s[i] = s[j];
    s[j] = k;
    j--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
