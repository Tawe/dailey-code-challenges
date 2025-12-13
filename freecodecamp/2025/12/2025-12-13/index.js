function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
  ];
  const next = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          liveNeighbors += grid[nr][nc];
        }
      }

      if (grid[r][c] === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) next[r][c] = 1;
        else next[r][c] = 0;
      } else {
        if (liveNeighbors === 3) next[r][c] = 1;
        else next[r][c] = 0;
      }
    }
  }

  return next;
}

const x = gameOfLife([
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
])
x;