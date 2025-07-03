/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge2(left, right);
};

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function (nums1, nums2) {
  // Solution 2 - doing it in place with the help of pointers for both orignal array and going from backwards and checking if the element is greater than replace the element
  let m = nums1.length;
  let n = nums2.length;
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1;
};

console.log(merge2([1, 2, 3, 5], [0, 0, 1, 1, 2, 2, 5, 5, 6]));

console.log(sortArray([5, 1, 1, 2, 0, 0]));
