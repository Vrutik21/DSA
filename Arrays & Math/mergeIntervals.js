// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge1 = function (intervals) {
  // TC - O(nlogn)
  // SC - O(n)

  //   We can also do it in-place to save the space but the question did not mention
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let start = intervals[0][0];
  let end = intervals[0][1];

  let ans = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      ans.push([start, end]);
      start = intervals[i][0];
    }

    if (intervals[i][1] > end) {
      end = intervals[i][1];
    }
  }

  ans.push([start, end]);

  return ans;
};
