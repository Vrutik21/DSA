// 394. Decode String

/**
 * @param {string} s
 * @return {string}
 */
// TC : O(n+m)
// You scan the input once, which is O(n). But repeated strings also have to be created,
// and the final decoded string can be much larger than the input, so we include m.
// So better than saying O(n * m), we usually say:

// SC: O(n + m)
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    // Keep pushing everything until we find a closing bracket
    if (ch !== "]") {
      stack.push(ch);
      continue;
    }

    // Step 1: Build the string inside the brackets
    // Example: for 3[abc], curr becomes "abc"
    let curr = "";

    while (stack.length && stack[stack.length - 1] !== "[") {
      curr = stack.pop() + curr;
    }

    // Step 2: Remove the opening bracket "["
    stack.pop();

    // Step 3: Build the number before the bracket
    // This also handles multi-digit numbers like 10[a]
    let k = "";

    while (
      stack.length &&
      stack[stack.length - 1] >= "0" &&
      stack[stack.length - 1] <= "9"
    ) {
      k = stack.pop() + k;
    }

    // Step 4: Repeat the decoded string and push it back
    let repeated = curr.repeat(Number(k));
    stack.push(repeated);
  }

  // Final decoded answer
  return stack.join("");
};
