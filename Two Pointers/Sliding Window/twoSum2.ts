// 167. Two Sum II - Input Array Is Sorted

// TC : O(n)
// SC : O(1)
function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;
  let ans: number[] = [];

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    // Because the input array is sorted so we know
    // if the sum is larger then j needs to be smaller
    if (sum > target) {
      j--;
    }
    // or if the sum is smaller then i needs to be larger
    else if (sum < target) {
      i++;
    }
    // else it exactly matches the target
    else {
      return [i + 1, j + 1];
    }
  }

  return [i + 1, j + 1];
}
