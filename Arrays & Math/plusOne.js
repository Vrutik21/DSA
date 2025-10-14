// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
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
