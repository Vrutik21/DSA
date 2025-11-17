// 290. Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var wordPattern = function (pattern, s) {
  let store = new Map();
  let store2 = new Map();
  let result = true;
  let arr = s.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  arr.map((value, index) => {
    if (store.has(value) || store2.has(pattern[index])) {
      if (
        (store.get(value) && store.get(value) !== pattern[index]) ||
        (store2.get(pattern[index]) && store2.get(pattern[index]) !== value)
      ) {
        result = false;
      }
    }

    store.set(value, pattern[index]);
    store2.set(pattern[index], value);
  });

  return result;
};
