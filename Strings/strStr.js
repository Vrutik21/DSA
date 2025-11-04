// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// TC - O((N-M+1)*m)
// SC - O(1)
var strStr1 = function (haystack, needle) {
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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Using Knuth-Morris-Pratt algorithm
// TC - O(n+m)
// SC - O(m)
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  //   Build LPS (Longest Prefix Suffix) for the needle
  const lps = buildLPS(needle);

  let i = 0; // index in haystack
  let j = 0; // index in needle

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;

      // full match found
      if (j === needle.length) {
        return i - j; // starting index
      }
    } else {
      // mismatch
      if (j > 0) {
        // jump j back to the last best border (no i rewind!)
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  function buildLPS(str) {
    let len = 0;
    let i = 1;
    const LPS = new Array(str.length).fill(0);

    while (i < str.length) {
      if (str[i] === str[len]) {
        // we extended a border by matching one more char
        len++;
        LPS[i] = len;
        i++;
      } else {
        // mismatch
        if (len > 0) {
          // try the next best border: shrink len to lps[len-1]
          len = LPS[len - 1];
        } else {
          LPS[i] = 0;
          i++;
        }
      }
    }

    return LPS;
  }

  return -1;
};
