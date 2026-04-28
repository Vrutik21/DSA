// 79. Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// TC - O(m * n * 4*L) exponential
// where m = number of rows; n = number of columns; L = length of word
// From each cell, we can explore up to 4 directions for each character of the word so it is 4 * L.
// SC - O(L)
var exist1 = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  function dfs(row, col, index) {
    // If we matched all characters of the word, we found the answer
    if (index === word.length) {
      return true;
    }

    // Boundary check:
    // If row/col goes outside the board, this path is invalid
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }

    // If current cell does not match the current character of word,
    // this path is invalid
    if (board[row][col] !== word[index]) {
      return false;
    }

    // Temporarily mark current cell as visited
    // because we cannot use the same cell more than once in one path
    const temp = board[row][col];
    board[row][col] = "#";

    // Try all 4 possible directions from current cell
    const found =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Backtrack:
    // Restore the original value so this cell can be used in another path
    board[row][col] = temp;

    return found;
  }

  // Try starting the word search from every cell in the board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  // If no path matched the word
  return false;
};

// Optional but a lot faster if the board is larger
// Follow up - Could you use search pruning to make your solution faster with a larger board?

// Pruning idea 1: Check character frequency first
// Before searching, count how many times each character appears in the board.
// The board has only one "A", but the word needs four "A"s. So we can immediately return false

// Pruning idea 2: Start from the rarer side of the word
// If "A" appears 100 times in the board, but "D" appears only 2 times, then starting DFS from "A" causes many unnecessary starts.
// But the path can be searched backward too which is valid as well

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Worst-case TC - O(m * n * 4^L)
// Practical TC - faster because of pruning
// SC - O(L)
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const boardFreq = new Map();
  const wordFreq = new Map();

  // Count characters in board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      boardFreq.set(char, (boardFreq.get(char) || 0) + 1);
    }
  }

  // Count characters in word
  for (const char of word) {
    wordFreq.set(char, (wordFreq.get(char) || 0) + 1);
  }

  // Pruning 1:
  // If board does not have enough of any character, word is impossible
  for (const [char, count] of wordFreq) {
    if ((boardFreq.get(char) || 0) < count) {
      return false;
    }
  }

  // Pruning 2:
  // Start from the rarer end of the word to reduce DFS starting points
  const firstCharCount = boardFreq.get(word[0]);
  const lastCharCount = boardFreq.get(word[word.length - 1]);

  if (firstCharCount > lastCharCount) {
    word = word.split("").reverse().join("");
  }

  function dfs(row, col, index) {
    // If all characters are matched, word exists
    if (index === word.length) {
      return true;
    }

    // Out of bounds check
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }

    // Current cell must match current word character
    if (board[row][col] !== word[index]) {
      return false;
    }

    // Mark current cell as visited
    const temp = board[row][col];
    board[row][col] = "#";

    // Search in all 4 directions
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Backtrack: restore original value
    board[row][col] = temp;

    return found;
  }

  // Try starting DFS only from cells matching word[0]
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === word[0] && dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};
