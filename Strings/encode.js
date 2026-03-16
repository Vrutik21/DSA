// Encode and Decode Strings

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  // TC - O(n)
  // SC - O(n)
  encode(strs) {
    let encoded = "";

    for (let i = 0; i < strs.length; i++) {
      encoded += strs[i].length + "#" + strs[i];
    }

    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  // TC - O(n)
  // SC - O(n)
  decode(str) {
    let decoded = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      // Move j until we find '#
      while (str[j] !== "#") {
        j++;
      }

      // Characters from i to j-1 form the length
      let length = Number(str.slice(i, j));

      // Actual word starts right after '#'
      let word = str.slice(j + 1, j + 1 + length);
      decoded.push(word);

      // Move i to the start of the next encoded string
      i = j + 1 + length;
    }

    return decoded;
  }
}
