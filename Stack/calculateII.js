// 227. Basic Calculator II

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var calculate = function (s) {
  let stack = [];
  let num = 0; // current number being formed
  let prevSign = "+";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "" || ch === " ") continue;

    // If digit, build number (multi-digit)
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + (ch.charCodeAt(0) - "0".charCodeAt(0));
    }

    // commit when operator OR end of string
    if (ch < "0" || ch > "9" || i === s.length - 1) {
      if (prevSign === "+") stack.push(num);
      else if (prevSign === "-") stack.push(-num);
      else if (prevSign === "*") stack.push(stack.pop() * num);
      else if (prevSign === "/") stack.push(Math.trunc(stack.pop() / num));

      num = 0;
      prevSign = ch;
    }
  }

  // final commit (handles last number even if string ends with spaces)
  if (prevSign === "+") stack.push(num);
  else if (prevSign === "-") stack.push(-num);
  else if (prevSign === "*") stack.push(stack.pop() * num);
  else if (prevSign === "/") stack.push(Math.trunc(stack.pop() / num));

  let ans = 0;
  for (let v of stack) ans += v;
  return ans;
};
