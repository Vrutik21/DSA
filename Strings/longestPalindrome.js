// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
// TC - (n^3)
// SC - O(n)
var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) return s;

  let best = s[0];

  const isPalindrome = (str) => {
    let l = 0,
      r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const sub = s.slice(i, j + 1);
      if (sub.length > best.length && isPalindrome(sub)) {
        best = sub;
      }
    }
  }
  return best;
};
