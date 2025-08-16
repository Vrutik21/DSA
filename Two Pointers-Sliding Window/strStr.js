// 28
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function (haystack, needle) {
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
var strStr2 = function (haystack, needle) {
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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n = needle.length;
  let i = 0;
  let j = 1;
  let LPS = [0];

  while (j < n) {
    if (needle[i] === needle[j]) {
      LPS[j] = i + 1;
      ++i;
      ++j;
    } else {
      if (i === 0) {
        LPS[j] = 0;
        ++j;
      } else {
        i = LPS[i - 1];
      }
    }
  }

  i = j = 0;
  let m = haystack.length;

  while (i < m) {
    if (haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      if (j === 0) {
        ++i;
      } else {
        j = LPS[j - 1];
      }
    }

    if (j === n) {
      return i - n;
    }
  }

  return -1;
};
