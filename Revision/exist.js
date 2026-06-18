// 79. Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// TC - O(m * n * 4^L)
// SC - O(L)
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  const boardCharFreq = new Map();
  const wordCharFreq = new Map();

  // Count characters in board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      boardCharFreq.set(char, (boardCharFreq.get(char) || 0) + 1);
    }
  }

  for (const char of word) {
    wordCharFreq.set(char, (wordCharFreq.get(char) || 0) + 1);
  }

  // Pruning 1:
  // If board does not have enough of any character from word, word is impossible
  for (const [char, count] of wordCharFreq) {
    if ((boardCharFreq.get(char) || 0) < count) {
      return false;
    }
  }

  // Pruning 2:
  // Start from the rarer end of the word to reduce DFS starting points
  const firstCharCount = boardCharFreq.get(word[0]);
  const lastCharCount = boardCharFreq.get(word[word.length - 1]);

  if (firstCharCount > lastCharCount) {
    word = word.split("").reverse().join("");
  }

  function dfs(row, col, index) {
    if (index === word.length) {
      return true;
    }

    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }

    if (board[row][col] !== word[index]) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col - 1, index + 1) ||
      dfs(row, col + 1, index + 1);

    board[row][col] = temp;

    return found;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};
