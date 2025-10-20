// 118. Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// My solution
// TC - O(n^2)
// SC - O(n^2)
var generate = function (numRows) {
  let count = numRows;
  let res = [[1]];

  if (numRows === 1) {
    return res;
  }

  while (count !== 1) {
    let currItem = res[res.length - 1];
    let newRes = [];
    for (let i = 0; i <= currItem.length; i++) {
      if (i === 0 || i === currItem.length) {
        newRes.push(1);
      } else {
        let ans = currItem[i - 1] + currItem[i];
        newRes.push(ans);
      }
    }
    res.push(newRes);
    count--;
  }

  return res;
};
