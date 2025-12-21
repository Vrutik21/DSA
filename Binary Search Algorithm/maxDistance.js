// 1552. Magnetic Force Between Two Balls

// maximize the minimum problem -> huge hint for Binary Search.
// minimize the maximum value, or maximize the minimum value , or find the maximum possible value or find the minimum possible value is the key word you should be looking for.
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
// TC - O(n log n + n log D) = O(n log n)
// SC - O(1)
var maxDistance = function (position, m) {
  // Sort the basket positions
  // Sort positions to enable greedy placement from left to right.
  // Sorting is REQUIRED for correctness: the greedy feasibility check
  // (placing balls as early as possible with >= dist gap) only works
  // when positions are processed in increasing order.
  position.sort((a, b) => a - b);

  //  Define binary search boundaries
  let low = 1; // minimum possible distance
  let high = position[position.length - 1] - position[0]; // maximum possible distance
  let answer = 0;

  // Binary search on the answer
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    // If we can place m balls with at least 'mid' distance
    if (canPlaceBalls(position, m, mid)) {
      answer = mid; // mid is a valid answer
      low = mid + 1; // try to find a bigger minimum distance
    } else {
      high = mid - 1; // reduce the distance
    }
  }

  return answer;
};

/**
 * Helper function to check feasibility
 * Can we place 'm' balls such that each pair is at least 'dist' apart?
 */
function canPlaceBalls(position, m, dist) {
  // Place the first ball at the first position
  let count = 1;
  let lastPlaced = position[0];

  // Try placing remaining balls
  for (let i = 1; i < position.length; i++) {
    // If current position is far enough from last placed ball
    if (position[i] - lastPlaced >= dist) {
      count++;
      lastPlaced = position[i];

      // If we have placed all balls
      if (count === m) return true;
    }
  }

  return false;
}
