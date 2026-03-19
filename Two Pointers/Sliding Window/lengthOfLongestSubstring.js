// 3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let store = new Map();
  let i = (j = 0);

  while (j < s.length) {
    const ch = s[j];

    if (store.has(ch) && store.get(ch) >= i) {
      i = store.get(ch) + 1;
    }
    store.set(ch, j);

    longest = Math.max(longest, j - i + 1);

    ++j;
  }

  return longest;
};
