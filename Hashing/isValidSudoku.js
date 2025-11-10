// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// TC - O(81) = O(1) (constant for fixed 9x9 = 81)
// SC - O(81) = O(1)
var isValidSudoku = function (board) {
  // 9 sets for rows, cols, boxes
  // Total 27 hashset inside 3 Arrays
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const ch = board[r][c];
      if (ch === ".") continue; // ignore empty cells

      // Box index formulae
      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // Check duplicates in row, col, or box
      if (rows[r].has(ch) || cols[c].has(ch) || boxes[b].has(ch)) {
        return false;
      }

      rows[r].add(ch);
      cols[c].add(ch);
      boxes[b].add(ch);
    }
  }

  return true;
};
