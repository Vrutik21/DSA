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
  //   If your energy total over all stations is negative, even if you start anywhere, you'll never finish the race
  //   That's why we need to store total
  let total = 0; // total surplus over the whole circle
  let tank = 0; // current surplus since 'start'
  let start = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;

    // If we can't reach i+1 from current start, shift start
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total >= 0 ? start % n : -1;
};
