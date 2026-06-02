// 994. Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */
// TC - O(m*n)
// SC - O(m*n)
var orangesRotting = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let queue = [];
  let maxMins = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col, 0]);
      }
    }
  }

  while (queue.length) {
    let [x, y, level] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }

    if (x < rows - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }

    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }

    if (y < cols - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }

    maxMins = Math.max(level, maxMins);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }

  return maxMins;
};
