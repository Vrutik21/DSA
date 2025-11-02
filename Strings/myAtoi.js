// 8. String to Integer (atoi)

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var myAtoi = function (s) {
  let temp = "";
  let sign = 1;
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && temp.length === 0) {
      continue;
    } else if (s[i] === " " && temp.length > 0) {
      break;
    }

    if ((s[i] === "-" || s[i] === "+") && temp.length === 0) {
      if (s[i] === "-") sign = -1;
      temp = "0"; // add 0 so next '+' or '-' is ignored as the length is > 0
      continue;
    }

    if (s[i] >= "0" && s[i] <= "9") {
      temp += s[i];
    } else {
      break;
    }
  }

  let finalAns = temp.length > 0 ? Number(temp) * sign : 0;

  if (finalAns <= INT_MIN) finalAns = INT_MIN;
  if (finalAns >= INT_MAX) finalAns = INT_MAX;

  return finalAns;
};
