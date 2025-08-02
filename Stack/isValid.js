/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let store = { "{": "}", "[": "]", "(": ")" };

  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      stack.push(s[i]);
      console.log(stack);
    } else {
      let top = stack.pop();
      if (!top || s[i] !== store[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(]"));
console.log(isValid("()"));
