// 70. Climbing Stairs

// How many ways are there to reach stair n?
// Think backward from stair n
// To land exactly on stair n, your last jump must be either: n - 1 or n - 2, Since allowed jumps are 1 and 2
// If the problem allowed 1, 2, or 3 steps, then we would do: ways(n) = ways(n - 1) + ways(n - 2) + ways(n - 3)

// TC : O(n)
// SC : O(1)
// Pattern : 1D Dynamic Programming with space optimization
function climbStairs(n: number): number {
  // Base cases:
  // n = 1 => 1 way  -> [1]
  // n = 2 => 2 ways -> [1,1], [2]
  if (n <= 2) return n;

  // Number of ways to reach two stairs before the current stair
  let waysTwoStepsBack = 1;

  // Number of ways to reach one stair before the current stair
  let waysOneStepBack = 2;

  // Start from stair 3 because stair 1 and stair 2 are already known
  for (let currentStair = 3; currentStair <= n; currentStair++) {
    // To reach currentStair:
    // 1. Come from currentStair - 1 by taking 1 step
    // 2. Come from currentStair - 2 by taking 2 steps
    let waysToReachCurrentStair = waysOneStepBack + waysTwoStepsBack;

    // Move our stored answers forward
    waysTwoStepsBack = waysOneStepBack;
    waysOneStepBack = waysToReachCurrentStair;
  }

  return waysOneStepBack;
}
