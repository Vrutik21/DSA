// 155. Min Stack

// TC : O(1)
// SC : O(n)
class MinStack {
  stack: number[][] = [];

  push(value: number): void {
    if (this.stack.length === 0) {
      this.stack.push([value, value]);
      return;
    }
    let minValue = Math.min(this.stack[this.stack.length - 1][1], value);

    this.stack.push([value, minValue]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}
