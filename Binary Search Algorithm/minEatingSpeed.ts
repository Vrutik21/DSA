// 875. Koko Eating Bananas

// Overall TC : O(n * log(maxPile))
// Overall SC : O(1)

// TC : log(maxPile)
function minEatingSpeed(piles: number[], h: number): number {
  let low = 1;
  let high = Math.max(...piles);

  while (low < high) {
    // Try this eating speed
    const mid = low + Math.floor((high - low) / 2);

    if (canEat(mid, piles, h)) {
      high = mid; // Valid speed, try something smaller
    } else {
      low = mid + 1; // Too slow, need a faster speed
    }
  }

  return low;
}

// Check if Koko can finish within h hours
// TC : O(n)
function canEat(speed: number, piles: number[], h: number): boolean {
  let hours = 0;

  for (const pile of piles) {
    hours += Math.ceil(pile / speed);
  }

  return hours <= h;
}
