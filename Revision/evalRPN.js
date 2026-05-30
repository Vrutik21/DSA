// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    // If token is an operator, take last two numbers from stack
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let b = stack.pop(); // second number
      let a = stack.pop(); // first number

      let result;

      switch (token) {
        case "+":
          result = a + b;
          break;

        case "-":
          result = a - b;
          break;

        case "*":
          result = a * b;
          break;

        case "/":
          // LeetCode wants division truncated toward zero
          result = Math.trunc(a / b);
          break;
      }

      stack.push(result);
    } else {
      // If token is a number string, convert it to number
      stack.push(Number(token));
    }
  }

  // Final answer will be the only value left in stack
  return stack.pop();
};
