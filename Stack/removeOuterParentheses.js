/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
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
var removeOuterParentheses = function (s) {
  let stck = [];
  let output = "";
  //   let str = "";

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

console.log(removeOuterParentheses("(()())"));
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
