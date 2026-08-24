// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1) auxiliary space
// Using Two pointer and regex
function isPalindrome(s: string): boolean {
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip invalid characters from the left
    while (left < right && !/[a-z0-9]/.test(s[left])) {
      left++;
    }

    // Skip invalid characters from the right
    while (left < right && !/[a-z0-9]/.test(s[right])) {
      right--;
    }

    // Characters don't match
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
// Using the ASCII/Unicode
function isPalindrome1(s: string): boolean {
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;

  function isAlphaNumeric(ch: string): boolean {
    const code = ch.charCodeAt(0);

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
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
