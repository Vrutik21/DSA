// 155. Min Stack

// Each function has TC of O(1)
// SC - O(n)
var MinStack = function () {
  this.stck = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stck.length === 0) {
    this.stck.push([val, val]);
  } else {
    let minVal = this.stck[this.stck.length - 1][1];
    if (minVal < val) {
      this.stck.push([val, minVal]);
    } else {
      this.stck.push([val, val]);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.val = this.stck.pop();
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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
