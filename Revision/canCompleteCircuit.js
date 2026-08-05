// 134. Gas Station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;

  // Gas available from the current candidate starting station
  let tank = 0;

  // Overall gas available across the entire route
  let total = 0;

  // Current candidate starting station
  let start = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];

    total += diff;
    tank += diff;

    // The current starting station cannot reach station i + 1.
    // Therefore, none of the stations from start to i can be valid starts.
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }

  // A complete circuit is possible only when total gas
  // is at least equal to the total travel cost.
  return total >= 0 ? start : -1;
};
