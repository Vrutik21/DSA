// 17. Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */
// TC: O(n * 4^n)
// SC: O(n), excluding output
// SC including output: O(n * 4^n)
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const store = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  let ans = [];
  let path = [];

  function backtrack(index) {
    // If we have chosen one letter for every digit,
    // convert path array into a string and save it.
    if (index === digits.length) {
      ans.push(path.join(""));
      return;
    }

    let digit = digits[index];
    let letters = store.get(digit);

    for (const letter of letters) {
      path.push(letter); // choose
      backtrack(index + 1); // explore next digit
      path.pop(); // undo choice
    }
  }

  backtrack(0);

  return ans;
};
