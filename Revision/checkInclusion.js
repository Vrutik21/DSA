// 567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let hashStr = new Array(26).fill(0);
  let hashWin = new Array(26).fill(0);

  let windowLen = s1.length;

  // Build frequency map for s1 and first window of s2
  for (let i = 0; i < windowLen; i++) {
    hashStr[s1.charCodeAt(i) - 97]++;
    hashWin[s2.charCodeAt(i) - 97]++;
  }

  let left = 0;
  let right = windowLen - 1;

  while (right < s2.length) {
    // If both frequency arrays match, current window is a permutation
    if (isHashSame(hashStr, hashWin)) {
      return true;
    }

    // Remove the left character from current window
    hashWin[s2.charCodeAt(left) - 97]--;
    left++;

    // Move right pointer to include next character
    right++;

    // Add new right character only if it exists
    if (right < s2.length) {
      hashWin[s2.charCodeAt(right) - 97]++;
    }
  }

  return false;
};

var isHashSame = function (hashStr, hashWin) {
  for (let i = 0; i < 26; i++) {
    if (hashStr[i] !== hashWin[i]) {
      return false;
    }
  }

  return true;
};
