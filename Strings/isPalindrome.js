/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (!s[left].match(/[a-z0-9]/i)) {
      left++;
      continue;
    }

    if (!s[right].match(/[a-z0-9]/i)) {
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

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
