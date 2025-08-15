/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // My approach
  // TC - O(n*m)
  let i = (j = 0);

  while (j < haystack.length) {
    if (needle[i] === haystack[j]) {
      ++i;
      ++j;
      if (i === needle.length) {
        return j - i;
      }
    } else {
      j = j - i + 1;
      i = 0;
    }
  }

  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Akshay's approach
  //   TC - O(n*m)
  // SC - O(1)
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i <= m - n; i++) {
    let j = 0;

    for (j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === n) {
      return i;
    }
  }

  return -1;
};
