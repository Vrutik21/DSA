// 155. Min Stack

// Each function has TC: O(1)
// Overall SC: O(n)

var MinStack = function () {
  // Each item will be stored as [actualValue, minimumValueSoFar]
  this.stck = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // If stack is empty, the current value itself is the minimum.
  if (this.stck.length === 0) {
    this.stck.push([val, val]);
    return;
  }

  // Get the minimum value before pushing this new value.
  let previousMin = this.stck[this.stck.length - 1][1];

  // The new minimum is either the previous minimum or the new value.
  let currentMin = Math.min(previousMin, val);

  this.stck.push([val, currentMin]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stck.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stck[this.stck.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stck[this.stck.length - 1][1];
};
