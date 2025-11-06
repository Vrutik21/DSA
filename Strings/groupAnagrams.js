// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC - O(n * klogk)
// SC - O(n * k)
var groupAnagrams1 = function (strs) {
  // Approach 1 - Sorting and storing inside map
  const store = new Map();

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (!store.has(str)) {
      store.set(str, [strs[i]]);
    } else {
      store.get(str).push(strs[i]);
    }
  }

  return [...store.values()];
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC - O(n * k)
// SC - O(n * k)
var groupAnagrams = function (strs) {
  const store = new Map();

  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);

    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }

    if (!store.has(key)) {
      store.set(key, [strs[i]]);
    } else {
      store.get(key).push(strs[i]);
    }
  }

  return [...store.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
