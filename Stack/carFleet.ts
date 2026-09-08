// 853. Car Fleet

// TC : O(n log n)
// SC : O(n)
function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: number[][] = [];
  const fleetStack: number[] = [];

  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  // Process closest car to target first
  cars.sort((a, b) => b[0] - a[0]);

  for (const [pos, spd] of cars) {
    const timeToTarget = (target - pos) / spd;

    // Slower than fleet ahead → cannot catch it → new fleet
    // If a car behind reaches the target in less than or equal time than the fleet ahead,
    // it must catch that fleet before or at the target, so it does not create a new fleet.
    if (
      fleetStack.length === 0 ||
      timeToTarget > fleetStack[fleetStack.length - 1]
    ) {
      fleetStack.push(timeToTarget);
    }
  }

  return fleetStack.length;
}
