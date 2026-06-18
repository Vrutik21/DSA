// 79. Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// TC - O(m * n * 4^L)
// SC - O(L + U)
// L = word.length
// U = number of unique characters stored in frequency maps
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  const boardCharFreq = new Map();
  const wordCharFreq = new Map();

  // Count how many times each character appears in the board.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      boardCharFreq.set(char, (boardCharFreq.get(char) || 0) + 1);
    }
  }

  // Count how many times each character appears in the word.
  for (const char of word) {
    wordCharFreq.set(char, (wordCharFreq.get(char) || 0) + 1);
  }

  // Pruning method 1 : Early return
  // Before doing DFS, check whether the board even has enough characters.
  // Example:
  // board has only one "A"
  // word needs three "A"s
  // Then it is impossible to form the word, so return false immediately.
  for (const [char, count] of wordCharFreq) {
    if ((boardCharFreq.get(char) || 0) < count) {
      return false;
    }
  }

  // Pruning method 2 : Start from the rarer side of the word.
  // Searching the word forward or backward is both valid.
  // Example:
  // Searching "ABCD" is same as searching "DCBA",
  // because the path can be read in reverse.
  // If the first character appears many times,
  // but the last character appears fewer times,
  // we reverse the word to reduce DFS starting points.
  const firstCharCount = boardCharFreq.get(word[0]);
  const lastCharCount = boardCharFreq.get(word[word.length - 1]);

  if (firstCharCount > lastCharCount) {
    word = word.split("").reverse().join("");
  }

  function dfs(row, col, index) {
    // Base case:
    // If index reaches word.length, it means we matched every character.
    if (index === word.length) {
      return true;
    }

    // Boundary check:
    // If row or col goes outside the board, this path is invalid.
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }

    // Character check:
    // The current board cell must match the current word character.
    // Then this path cannot work.
    if (board[row][col] !== word[index]) {
      return false;
    }

    // Mark the current cell as visited.
    // We cannot use the same cell more than once in one word path.
    // We save the original character first so we can restore it later.
    const temp = board[row][col];
    board[row][col] = "#";

    // Try to find the next character in all 4 directions:
    // If any direction returns true, then the word exists.
    const found =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col - 1, index + 1) ||
      dfs(row, col + 1, index + 1);

    // Backtrack.
    // Restore the original character before returning.
    // This is important because other DFS paths may need to use this cell.
    board[row][col] = temp;

    return found;
  }

  // Try every cell as a possible starting point.
  // But only call DFS if the current cell matches word[0].
  // This avoids unnecessary DFS calls.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === word[0] && dfs(row, col, 0)) {
        return true;
      }
    }
  }

  // If no starting cell could form the word, return false.
  return false;
};
