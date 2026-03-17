// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
// Using regex
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (!s[left].match(/[a-z0-9]/)) {
      left++;
      continue;
    }

    if (!s[right].match(/[a-z0-9]/)) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
// Using the ASCII/Unicode
var isPalindrome = function (s) {
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;

  function isAlphaNumeric(ch) {
    const code = ch.charCodeAt();

    // 0-9
    if (code >= 48 && code <= 57) return true;

    // a-z
    if (code >= 97 && code <= 122) return true;

    return false;
  }

  while (i < j) {
    // Skip left non-alphanumeric characters
    while (i < j && !isAlphaNumeric(s[i])) {
      i++;
    }

    // Skip right non-alphanumeric characters
    while (i < j && !isAlphaNumeric(s[j])) {
      j--;
    }

    // Compare valid characters
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
