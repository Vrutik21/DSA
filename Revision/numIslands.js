// 200. Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */

// TC - O(m * n)
// We visit each cell at most once.

// SC - O(m * n)
// In the worst case, the queue can store many cells if the whole grid is land.

// BFS solution using a queue
var numIslands = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let count = 0;

  // Go through every cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // If we find a "1", it means we found a new unvisited island
      if (grid[row][col] === "1") {
        // Count this island
        count++;

        // Start BFS from this land cell
        let queue = [];

        // Add the current land cell to the queue
        queue.push([row, col]);

        // Mark this cell as visited by turning it into water
        // This prevents counting the same island again later
        grid[row][col] = "0";

        // Use a head pointer instead of queue.shift()
        // shift() removes the first element and can be slow in JavaScript
        let head = 0;

        // These are the 4 possible directions we can move:
        // up, down, left, right
        let directions = [
          [-1, 0], // move up
          [1, 0], // move down
          [0, -1], // move left
          [0, 1], // move right
        ];

        // Process all cells that belong to the current island
        while (head < queue.length) {
          // Get the current cell from the queue
          let [x, y] = queue[head];

          // Move head forward so the next loop processes the next cell
          head++;

          // Check all 4 neighbors of the current cell
          for (let [dx, dy] of directions) {
            // Calculate neighbor's row and column
            let newX = x + dx;
            let newY = y + dy;

            // Check:
            // 1. newX is inside row boundary
            // 2. newY is inside column boundary
            // 3. the neighbor is land, meaning "1"
            if (
              newX >= 0 &&
              newX < rows &&
              newY >= 0 &&
              newY < cols &&
              grid[newX][newY] === "1"
            ) {
              // Mark this neighbor as visited
              // We immediately turn it into "0" so it is not added again
              grid[newX][newY] = "0";

              // Add this neighbor to the queue
              // Later, we will also check its neighbors
              queue.push([newX, newY]);
            }
          }
        }
      }
    }
  }

  return count;
};
