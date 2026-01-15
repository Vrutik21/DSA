// 682. Baseball Game

/**
 * @param {string[]} operations
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var calPoints = function (operations) {
  let stack = [];
  let ans = 0;

  for (let i = 0; i < operations.length; i++) {
    let ch = operations[i];

    if (ch === "+") {
      let a = stack.pop();
      let b = stack[stack.length - 1];

      stack.push(a);
      stack.push(a + b);
    } else if (ch === "D") {
      let prevScore = stack[stack.length - 1];

      stack.push(prevScore * 2);
    } else if (ch === "C") {
      stack.pop();
    } else {
      stack.push(Number(ch));
    }
  }

  while (stack.length !== 0) {
    let val = stack.pop();
    ans += Number(val);
  }

  return ans;
};
