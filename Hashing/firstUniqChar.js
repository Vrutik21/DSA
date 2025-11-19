// 387. First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
// Using simple map
var firstUniqChar1 = function (s) {
  let store = new Map();

  // count frequencies
  for (let ch of s) {
    store.set(ch, (store.get(ch) || 0) + 1);
  }

  // check by index
  for (let i = 0; i < s.length; i++) {
    if (store.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
// Using queue
var firstUniqChar1 = function (s) {
  let freq = new Map();
  let queue = [];

  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) || 0) + 1);

    queue.push(i);

    while (queue.length > 0 && freq.get(s[queue[0]]) > 1) {
      queue.shift();
    }
  }

  return queue.length > 0 ? queue[0] : -1;
};
