// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN1 = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "+" || token === "-" || token === "*" || token === "/") {
      //   let b = Number(stack.pop());
      //   let a = Number(stack.pop());
      let b = stack.pop();
      let a = stack.pop();
      let result;

      //   Switch case basically
      //   if (token === "+") result = a + b;
      //   else if (token === "-") result = a - b;
      //   else if (token === "*") result = a * b;
      //   else if (token === "/") result = Math.trunc(a / b); // truncate towards zero
      //   stack.push(result);

      //   Or we can use eval function in js
      result = eval(`${a} ${token} ${b}`);
      stack.push(Math.trunc(result));
    } else {
      stack.push(token);
    }
  }

  return Number(stack.pop());
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN2 = function (tokens) {
  let stack = [];

  //   using a map to store the operator logic
  const map = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let b = +stack.pop();
      let a = +stack.pop();
      let result;

      result = map[token](a, b);

      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return Number(stack.pop());
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var evalRPN = function (tokens) {
  let stack = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let a = stack.pop();
      let b = stack.pop();

      let val;
      if (token === "+") val = b + a;
      else if (token === "-") val = b - a;
      else if (token === "*") val = b * a;
      else val = Math.trunc(b / a);

      stack.push(val);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
