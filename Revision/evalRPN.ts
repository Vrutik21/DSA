// 150. Evaluate Reverse Polish Notation

// TC : O(n)
// SC : O(n)
function evalRPN(tokens: string[]): number {
 const stack: number[] = [];
  const operators = new Set(["+", "-", "*", "/"]);

for (const token of tokens) {
    if (operators.has(token)) {
      const b = stack.pop()!;
      const a = stack.pop()!;

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop()!;
}
