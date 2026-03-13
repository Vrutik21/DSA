// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC - O(n)
// SC - O(k)
// where k = number of unique characters
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hash = new Map();

  for (const char of s) {
    hash.set(char, (hash.get(char) || 0) + 1);
  }

  for (const ch of t) {
    if (!hash.has(ch) || hash.get(ch) === 0) {
      return false;
    } else {
      hash.set(ch, hash.get(ch) - 1);
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Most optimized solution for this problem
// TC - O(n)
// SC - O(1)
// O(1) because maximum 26 lowercase characters
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
    freq[t.charCodeAt(i) - 97]--;
  }

  for (const count of freq) {
    if (count !== 0) return false;
  }

  return true;
};
