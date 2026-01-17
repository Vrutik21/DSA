// 856. Score of Parentheses

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(N)
// SC - O(N)
var scoreOfParentheses = function (s) {
  let stack = [0]; // stack holds scores for each open '(' level

  for (let ch of s) {
    if (ch === "(") {
      stack.push(0); // start a new inner frame
    } else {
      let inner = stack.pop();
      let add = inner === 0 ? 1 : 2 * inner;
      stack[stack.length - 1] += add; // add to parent frame
    }
  }

  return stack[0];
};
