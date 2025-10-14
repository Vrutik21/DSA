// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// TC - O(n)
// SC - O(1)
var plusOne1 = function (digits) {
  let n = digits.length;

  if (digits[n - 1] >= 0 && digits[n - 1] <= 8) {
    digits[n - 1]++;

    return digits;
  }

  if (n === 1) {
    return [1, 0];
  }

  let i = n - 1;
  while (i >= 0 && digits[i] === 9) {
    digits[i] = 0;
    i--;
  }

  if (i < 0) {
    digits.unshift(1);
  } else {
    digits[i]++;
  }

  return digits;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// A cleaner solution
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // no further carry - done
      return digits;
    }
    digits[i] = 0; // carry continues left
  }
  // if we're here, it was all 9s
  digits.unshift(1); // 999 -> 1000
  return digits;
};
