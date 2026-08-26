// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC : O(n*k)
// SC : O(n*k)
// where n = number of strings and k = average/max length of each string
// Pattern : Hashing / Frequency Counting
function groupAnagrams(strs: string[]): string[][] {
  let store = new Map<string, string[]>();

  for (const s of strs) {
    let freqArray = new Array(26).fill(0);

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freqArray[index]++;
    }

    let key = freqArray.join("#");

    if (store.has(key)) {
      store.get(key)?.push(s);
    } else {
      store.set(key, [s]);
    }
  }

  return [...store.values()];
}
