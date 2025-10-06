// 31. Next Permutation

// The following algorithm generates the next permutation lexicographically after a given permutation. It changes the given permutation in-place.

// Step 1 - Find pivot (first index from right where nums[i] < nums[i+1])
// Step 2 - Find the rightmost number(from the end) > pivot and swap
// Step 3 - Reverse the part after the pivot (index 1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  if (n <= 1) return;

  // Step 1: find pivot index i
  let pivot = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }

  // If no pivot, reverse entire array to get the smallest permutation
  if (pivot === -1) {
    reverseRange(nums, 0, n - 1);
    return;
  }

  // Step 2: find rightmost j > pivot with nums[j] > nums[pivot]
  for (let j = n - 1; j > pivot; j--) {
    if (nums[j] > nums[pivot]) {
      // swap nums[pivot] and nums[j]
      let temp = nums[j];
      nums[j] = nums[pivot];
      nums[pivot] = temp;
      break;
    }
  }

  // reverse
  reverseRange(nums, pivot + 1, n - 1);
};

// reverse function with range
function reverseRange(a, l, r) {
  while (l < r) {
    const t = a[l];
    a[l] = a[r];
    a[r] = t;
    l++;
    r--;
  }
}
