// 6. Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// TC - O(n)
// SC - O(n)
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const n = s.length;
  const cycle = 2 * numRows - 2;
  const out = [];

  for (let r = 0; r < numRows; r++) {
    for (let i = r; i < n; i += cycle) {
      // vertical char for this row
      out.push(s[i]);

      // diagonal char for middle rows
      const j = i + (cycle - 2 * r);
      if (r !== 0 && r !== numRows - 1 && j < n) {
        out.push(s[j]);
      }
    }
  }

  return out.join("");
};
