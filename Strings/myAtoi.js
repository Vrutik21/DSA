// 8. String to Integer (atoi)

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var myAtoi1 = function (s) {
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

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var myAtoi = function (s) {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  let i = 0;
  const n = s.length;

  // 1) Skip leading spaces
  while (i < n && s[i] === " ") i++;
  if (i === n) return 0;

  // 2) sign
  let sign = 1;
  if (s[i] === "+" || s[i] === "-") {
    if (s[i] === "-") sign = -1;
    i++;
  }

  // 3) If next is not a digit, return 0
  if (i >= n || s[i] < "0" || s[i] > "9") return 0;

  // 4) Parse digits until a non-digit
  let result = 0;
  while (i < n && s[i] >= "0" && s[i] <= "9") {
    // 0-9 is represented by numbers 48-57 in Numerical code format
    const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
    result = result * 10 + digit;
    i++;
  }

  // 5) Apply sign
  result *= sign;

  // 6) Adjust to 32-bit signed integer range
  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
};
