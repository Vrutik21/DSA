// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC - O(n*k)
// SC - O(n*k)
var groupAnagrams = function (strs) {
  const store = new Map();

  for (let i = 0; i < strs.length; i++) {
    // Count frequency of each letter from a-z
    let freqArr = new Array(26).fill(0);

    let s = strs[i];

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freqArr[index]++;
    }

    // Same anagrams will have the same frequency key
    let key = freqArr.join("#");

    if (store.has(key)) {
      store.get(key).push(s);
    } else {
      store.set(key, [s]);
    }
  }

  return [...store.values()];
};
