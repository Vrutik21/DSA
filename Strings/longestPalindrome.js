// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
// TC - (n^3)
// SC - O(n)
var longestPalindrome1 = function (s) {
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

/**
 * @param {string} s
 * @return {string}
 */
// TC - (n^2)
// SC - O(1)
var longestPalindrome = function (s) {
  let n = s.length;
  if (n < 2) return s;

  let bestL = 0;
  let bestR = 0;

  function expand(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    // maximal palindrome bounds
    return [l + 1, r - 1];
  }

  for (let i = 0; i < s.length; i++) {
    // For odd length
    // Ex. racecar
    let [l1, r1] = expand(s, i, i);
    if (r1 - l1 > bestR - bestL) {
      bestL = l1;
      bestR = r1;
    }

    // For even length
    // Ex. abba
    let [l2, r2] = expand(s, i, i + 1);
    if (r2 - l2 > bestR - bestL) {
      bestL = l2;
      bestR = r2;
    }
  }

  return s.slice(bestL, bestR + 1);
};
