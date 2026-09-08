// 739. Daily Temperatures

// TC - O(n)
// SC - O(n)
// Pattern : Monotonic decreasing stack
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;

  // stack stores indices whose next warmer day is not found yet
  const stack: number[] = [];

  // stores how many days we wait for a warmer temperature
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    // If today's temperature is warmer than the day at stack top,
    // then today is the answer for that previous day.
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;

      // Difference between current day and previous day
      answer[prevIndex] = i - prevIndex;
    }

    // Current day is now waiting for a future warmer day
    stack.push(i);
  }

  return answer;
}
