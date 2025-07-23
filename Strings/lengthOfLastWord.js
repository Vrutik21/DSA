/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (n > 0 && s[i] === " ") {
      return n;
    }

    if (s[i] !== " ") {
      n++;
    }
  }

  return n;
};
