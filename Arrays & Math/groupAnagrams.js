// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC - O(m*n)
// SC - O(m*n)
var groupAnagrams = function (strs) {
  let store = new Map();

  for (let i = 0; i < strs.length; i++) {
    let freqArr = new Array(26).fill(0);

    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }

    let key = "";
    for (let k = 0; k < freqArr.length; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }

    if (!store.has(key)) {
      store.set(key, [s]);
    } else {
      store.get(key).push(s);
    }
  }

  return [...store.values()];
};
