// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// TC - O((N-M+1)*m)
// SC - O(1)
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) {
        return i - needle.length;
      }
    } else {
      // mismatch: shift the start by 1 and retry
      // new start = (current i) - (matched length j) + 1
      i = i - j + 1;
      j = 0;
    }
  }

  return -1;
};
