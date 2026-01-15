/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];

    while (
      stack.length > 0 &&
      ((stack[stack.length - 1] > 0 && curr < 0) ||
        (curr > 0 && stack[stack.length - 1] < 0))
    ) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(curr)) {
        stack.pop();
        stack.push();
      } else {
        continue;
      }
    }

    if (
      stack.length === 0 ||
      (stack[stack.length - 1] > 0 && curr > 0) ||
      (stack[stack.length - 1] < 0 && curr < 0)
    ) {
      stack.push(curr);
    }

    console.log(stack, "stack");
  }

  return stack;
};
