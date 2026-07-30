// 735. Asteroid Collision

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (const curr of asteroids) {
    let survived = true;

    // A collision happens only when the previous asteroid
    // moves right and the current asteroid moves left.
    while (
      survived &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      curr < 0
    ) {
      const top = stack[stack.length - 1];

      if (Math.abs(top) < Math.abs(curr)) {
        // Current asteroid destroys the stack asteroid.
        stack.pop();
      } else if (Math.abs(top) === Math.abs(curr)) {
        // Both asteroids are destroyed.
        stack.pop();
        survived = false;
      } else {
        // The stack asteroid destroys the current asteroid.
        survived = false;
      }
    }

    if (survived) {
      stack.push(curr);
    }
  }

  return stack;
};
