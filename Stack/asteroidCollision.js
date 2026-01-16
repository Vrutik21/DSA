// 735. Asteroid Collision

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];
    let insert = true;

    if (stack.length > 0 && stack[stack.length - 1] > 0 && curr < 0) {
      while (stack.length > 0 && stack[stack.length - 1] > 0 && curr < 0) {
        if (Math.abs(stack[stack.length - 1]) < Math.abs(curr)) {
          stack.pop();
        } else if (Math.abs(stack[stack.length - 1]) === Math.abs(curr)) {
          stack.pop();
          insert = false;
          break;
        } else {
          insert = false;
          break;
        }
      }
      if (insert) stack.push(curr);
    } else {
      stack.push(curr);
    }
  }

  return stack;
};
