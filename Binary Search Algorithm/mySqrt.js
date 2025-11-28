// 69 Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt1 = function (x) {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (x === mid ** 2) {
      return mid;
    } else {
      if (x < mid ** 2) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  //   right would be the closest at the end if mid is not the square root.
  return right;
};

/**
 * @param {number} x
 * @return {number}
 */
// More simplified and easy solution
// TC - O(log x)
// SC - O(1)
var mySqrt = function (x) {
  if (x < 2) return x;

  let l = 1;
  let r = x;
  let res = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let sq = mid * mid;

    if (sq <= x) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};
