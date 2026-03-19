// 424
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement1 = function (s, k) {
  // My version
  // TC - O(n)
  // SC - O(1)
  let store = new Map();
  let maxCount = 0;
  let i = 0;
  let j = 0;
  store.set(s[0], 1);

  while (j < s.length) {
    let maxStoreCount = 0;
    let totalStoreCount = 0;

    store.forEach((val, key) => {
      maxStoreCount = Math.max(maxStoreCount, val);
      totalStoreCount += val;
    });

    if (totalStoreCount - maxStoreCount <= k) {
      maxCount = Math.max(maxCount, totalStoreCount);
      ++j;
      // store[s[j]] = store[s[j]] ? ++store[s[j]] : 1;
      store.set(s[j], store.get(s[j]) ? store.get(s[j]) + 1 : 1);
    } else {
      store.set(s[i], store.get(s[i]) - 1);
      // --store[s[i]];
      ++i;
    }
  }

  return maxCount;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let store = {};
  let maxCount = 0;
  let i = 0;
  let j = 0;
  store[s[0]] = 1;

  while (j < s.length) {
    if (isWindowValid(store, k)) {
      maxCount = Math.max(maxCount, j - i + 1);
      ++j;
      store[s[j]] = store[s[j]] ? ++store[s[j]] : 1;
    } else {
      --store[s[i]];
      ++i;
    }
  }

  return maxCount;
};

var isWindowValid = (store, k) => {
  let totalCount = 0;
  let maxCount = 0;

  for (let i = 0; i < 26; i++) {
    // 65 = A, 66 = B
    let char = String.fromCharCode(i + 65);
    if (store[char]) {
      totalCount = totalCount + store[char];
      maxCount = Math.max(maxCount, store[char]);
    }
  }

  return totalCount - maxCount <= k;
};

// console.log(characterReplacement("AABABBA",1))
console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AAAA", 2));
