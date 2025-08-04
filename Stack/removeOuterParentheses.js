/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses1 = function (s) {
  let stck = [];
  let output = "";
  let str = "";

  for (i = 0; i < s.length; i++) {
    if (stck[stck.length - 1] === "(" && s[i] === ")") {
      str += s[i];
      stck.pop();
    } else {
      str += s[i];
      stck.push(s[i]);
    }

    if (str.length > 0 && stck.length === 0) {
      str = str.slice(1, str.length - 1);
      output = output + str;
      str = "";
    }
  }

  return output;
};

// Approach two - purely using stack
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses2 = function (s) {
  let stck = [];
  let output = "";

  for (i = 0; i < s.length; i++) {
    if (stck[stck.length - 1] === "(" && s[i] === ")") {
      if (stck.length > 1) {
        output += s[i];
      }
      stck.pop();
    } else {
      stck.push(s[i]);
      if (stck.length > 1) {
        output += s[i];
      }
    }
  }

  return output;
};

// Approach 3 - solving it without stack
// Using a level counter instead of stack to keep track of the nesting because we only want to ignore the first level nesting
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let level = -1;
  let output = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (level > 0) {
        output += s[i];
      }
      level--;
    } else {
      level++;
      if (level > 0) {
        output += s[i];
      }
    }
  }

  return output;
};

console.log(removeOuterParentheses("(()())"));
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
