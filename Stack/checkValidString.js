// 678. Valid Parenthesis String

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var checkValidString = function (s) {
  const open = []; // indices of '('
  const star = []; // indices of '*'

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch === "(") {
      open.push(i);
    } else if (ch === "*") {
      star.push(i);
    } else {
      // ch === ")"
      if (open.length > 0) {
        open.pop(); // match ')' with '('
      } else if (star.length > 0) {
        star.pop(); // use '*' as '('
      } else {
        return false; // no way to match ')'
      }
    }
  }

  // Now match leftover '(' with '*' that occur AFTER them
  while (open.length > 0 && star.length > 0) {
    let openIndex = open.pop();
    let starIndex = star.pop();

    // '*' is before '(', can't act as ')'
    if (starIndex < openIndex) return false;
  }

  return open.length === 0;
};
