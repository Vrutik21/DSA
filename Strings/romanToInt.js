// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var romanToInt = function (s) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map.get(s[i]);
    const next = map.get(s[i + 1]);

    // If current < next, we subtract
    // IIII for 4 - they wrote IV (1 before 5) so Subtract 1 from 5
    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
};
