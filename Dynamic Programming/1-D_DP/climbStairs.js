// 70. Climbing Stairs

// How many ways are there to reach stair n?
// Think backward from stair n
// To land exactly on stair n, your last jump must be either: n - 1 or n - 2, Since allowed jumps are 1 and 2
// If the problem allowed 1, 2, or 3 steps, then we would do: ways(n) = ways(n - 1) + ways(n - 2) + ways(n - 3)
/**
 * @param {number} n
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var climbStairs = function (n) {
  // Base cases:
  // n = 1 => 1 way  -> [1]
  // n = 2 => 2 ways -> [1,1], [2]
  if (n <= 2) return n;

  // stored result to reach stair 1
  let waysToReachTwoStepsBefore = 1;

  // stored result to reach stair 2
  let waysToReachOneStepBefore = 2;

  // Start from stair 3 because stair 1 and stair 2 are already known
  for (let currentStair = 3; currentStair <= n; currentStair++) {
    // To reach currentStair:
    // 1. Come from currentStair - 1 using 1 step
    // 2. Come from currentStair - 2 using 2 steps
    let waysToReachCurrentStair =
      waysToReachOneStepBefore + waysToReachTwoStepsBefore;

    // Move forward for the next stair
    waysToReachTwoStepsBefore = waysToReachOneStepBefore;
    waysToReachOneStepBefore = waysToReachCurrentStair;
  }

  // At the end, this stores the ways to reach stair n
  return waysToReachOneStepBefore;
};
