// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// TC - O(81) = O(1), because Sudoku board is always 9x9
// SC - O(81) = O(1), because we store at most 81 cells
var isValidSudoku = function (board) {
  // rows[i] stores numbers already seen in row i
  let rows = Array.from({ length: 9 }, () => new Set());

  // cols[i] stores numbers already seen in column i
  let cols = Array.from({ length: 9 }, () => new Set());

  // boxes[i] stores numbers already seen in 3x3 box i
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let ch = board[r][c];

      // Empty cells do not matter
      if (ch === ".") continue;

      // Convert the current cell's 3x3 box into index 0 to 8
      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // If same number already exists in row, column, or box,
      // then Sudoku is invalid
      if (rows[r].has(ch) || cols[c].has(ch) || boxes[b].has(ch)) {
        return false;
      }

      // Mark this number as seen
      rows[r].add(ch);
      cols[c].add(ch);
      boxes[b].add(ch);
    }
  }

  return true;
};
