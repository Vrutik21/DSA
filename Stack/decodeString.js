// 394. Decode String

/**
 * @param {string} s
 * @return {string}
 */
// TC - O(N∗M)
// SC - O(N + output len)
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let curr = "";

    if (ch !== "]") {
      stack.push(ch);
      continue;
    }

    // build the substring inside [...]
    while (stack.length && stack[stack.length - 1] !== "[") {
      curr = stack.pop() + curr;
    }
    stack.pop();

    //   build the number (could be multi-digit)
    let k = "";
    while (
      stack.length &&
      stack[stack.length - 1] >= "0" &&
      stack[stack.length - 1] <= "9"
    ) {
      k = stack.pop() + k;
    }

    //  repeat and push back
    let repeated = curr.repeat(Number(k));
    stack.push(repeated);
  }

  return stack.join("");
};
