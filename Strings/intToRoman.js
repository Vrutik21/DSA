// 12. Integer to Roman

/**
 * @param {number} num
 * @return {string}
 */
// TC - O(1)
// SC - O(1)
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let res = "";

  for (let i = 0; i < values.length && num > 0; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += symbols[i];
    }
  }

  return res;
};
