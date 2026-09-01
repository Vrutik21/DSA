// 36. Valid Sudoku

// TC - O(81) = O(1), because Sudoku board is always 9x9
// SC - O(81) = O(1), because we store at most 81 cells
function isValidSudoku(board: string[][]): boolean {
  // rows[i] stores numbers already seen in row i
  const rows = Array.from({ length: 9 }, () => new Set<string>());

  // cols[i] stores numbers already seen in column i
  const cols = Array.from({ length: 9 }, () => new Set<string>());

  // boxes[i] stores numbers already seen in 3x3 box i
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const ch = board[r][c];

      // Ignore empty cells
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
}
