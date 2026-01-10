// 224. Basic Calculator

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var calculate = function (s) {
  let stack = [];
  let result = 0; // running answer
  let num = 0; // current number being formed
  let sign = 1; // +1 means '+', -1 means '-'

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // If digit, build number (multi-digit)
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + (ch.charCodeAt(0) - "0".charCodeAt(0));
    }

    // If '+' or '-' -> commit current number into result
    else if (ch === "+" || ch === "-") {
      result += sign * num;
      num = 0;
      sign = ch === "+" ? 1 : -1;
    }

    // If '(' -> save current state, reset for inner expression
    else if (ch === "(") {
      // Push current result and sign
      stack.push(result);
      stack.push(sign);

      // Reset for inside parentheses
      result = 0;
      sign = 1;
      num = 0;
    }

    // If ')' -> finish inner expression and merge back
    else if (ch === ")") {
      // First, commit the number inside parentheses
      result += sign * num;
      num = 0;

      // Pop sign and previous result
      let prevSign = stack.pop();
      let prevResult = stack.pop();

      // Combine: prevResult + prevSign * (currentParenthesesResult)
      result = prevResult + prevSign * result;
    }

    // If spaces, ignore
  }

  // commit any leftover number
  result += sign * num;

  return result;
};
