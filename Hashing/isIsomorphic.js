// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
// You store at most 256 entries in the maps
var isIsomorphic = function (s, t) {
  let sStore = new Map();
  let tStore = new Map();

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
    if (sStore.has(sChar) && tStore.has(tChar)) {
      if (sStore.get(sChar) !== t[i]) {
        return false;
      }
    }
    sStore.set(sChar, tChar);
    tStore.set(tChar, sChar);
  }

  return true;
};
