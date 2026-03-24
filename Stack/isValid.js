// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var isValid1 = function (s) {
  let stack = [];

  for (const ch of s) {
    if (stack.length === 0) {
      stack.push(ch);
    } else {
      let lastElem = stack[stack.length - 1];

      if (
        (lastElem === "(" && ch === ")") ||
        (lastElem === "{" && ch === "}") ||
        (lastElem === "[" && ch === "]")
      ) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }

  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
// More cleaner and a bit optimised
var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;

      if (stack[stack.length - 1] !== map[ch]) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
};
