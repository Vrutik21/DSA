// 69
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
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
