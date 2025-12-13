# 2025-12-13
[2025-12-13 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-13)

## Instructions.
Game of Life
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

- Each cell is either 1 (alive) or 0 (dead).
- A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
- Cells on the edges have fewer than eight neighbors.

Rules for updating each cell:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes alive (reproduction).
For example, given:

```js
[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
```
return:
```js
[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
```

Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.

## My Thoughts

Game of Life is one of those problems that looks deceptively simple but immediately punishes you if you’re careless. My first instinct was to update the grid directly as I scanned it, but that breaks the rules almost instantly, as soon as one cell changes, it corrupts the neighbor counts for the rest of the board.

That realization reframed the problem: this isn’t just about counting neighbors, it’s about time separation. Every cell’s next state depends on the original board, not partially updated data. Once I accepted that, the solution became much clearer.

Creating a separate “next” grid felt almost too easy, but it’s exactly what the problem wants. It preserves correctness, keeps the logic readable, and avoids subtle bugs. The rules themselves are straightforward; the real challenge is making sure they’re applied consistently and independently to every cell.

This problem is a great example of how simulation tasks aren’t hard because of complex logic, they’re hard because of state management. Getting that right is far more important than clever optimizations.

## What I Learned
- Simulation problems require strict separation of states.
Mixing old and new state during updates leads to incorrect results, even if the rules are correct.
- Correctness beats cleverness.
Using a second grid is simple, readable, and safe — far better than risky in-place updates unless explicitly required.
- Neighbor enumeration is a reusable pattern.
The fixed list of 8 direction offsets shows up in many grid-based problems (flood fill, minesweeper, pathfinding).
- Rules are often easier than control flow.
The Game of Life rules are simple; managing when and how they apply is the real challenge.
- Edge handling should be explicit.
Bounds checks are unavoidable and clearer than trying to be clever with padding or assumptions.
- This mirrors real system design.
Many real systems operate in “ticks” or “frames” where state is computed from a snapshot, then applied all at once.