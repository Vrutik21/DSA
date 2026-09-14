// 287. Find the Duplicate Number

// Pattern: Floyd's Cycle Detection (Slow & Fast Pointers)

// TC: O(n)
// SC: O(1)

// Mental shortcut :
// Linked List:
// node = node.next
// This Array:
// index = nums[index]
function findDuplicate(nums: number[]): number {
  // Start both pointers from the same position.
  let slow = nums[0];
  let fast = nums[0];

  // Phase 1:
  // Find a meeting point somewhere inside the cycle.
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Phase 2:
  // Reset one pointer to the beginning.
  // Now move both pointers 1 step at a time.
  // They will meet at the start of the cycle.
  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  // The start of the cycle is the duplicate number.
  return slow;
}
