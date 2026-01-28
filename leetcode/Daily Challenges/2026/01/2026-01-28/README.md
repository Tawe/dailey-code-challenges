# 2026-01-28

## Instructions
You are given a m x n 2D integer array grid and an integer k. You start at the top-left cell (0, 0) and your goal is to reach the bottom‐right cell (m - 1, n - 1).

There are two types of moves available:

Normal move: You can move right or down from your current cell (i, j), i.e. you can move to (i, j + 1) (right) or (i + 1, j) (down). The cost is the value of the destination cell.

Teleportation: You can teleport from any cell (i, j), to any cell (x, y) such that grid[x][y] <= grid[i][j]; the cost of this move is 0. You may teleport at most k times.

Return the minimum total cost to reach cell (m - 1, n - 1) from (0, 0).
```
Example 1:
Input: grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2
Output: 7
Explanation:
Initially we are at (0, 0) and cost is 0.
Current Position	Move	New Position	Total Cost
(0, 0)	Move Down	(1, 0)	0 + 2 = 2
(1, 0)	Move Right	(1, 1)	2 + 5 = 7
(1, 1)	Teleport to (2, 2)	(2, 2)	7 + 0 = 7
The minimum cost to reach bottom-right cell is 7.

Example 2:
Input: grid = [[1,2],[2,3],[3,4]], k = 1
Output: 9
Explanation:
Initially we are at (0, 0) and cost is 0.
Current Position	Move	New Position	Total Cost
(0, 0)	Move Down	(1, 0)	0 + 2 = 2
(1, 0)	Move Right	(1, 1)	2 + 3 = 5
(1, 1)	Move Down	(2, 1)	5 + 4 = 9
The minimum cost to reach bottom-right cell is 9.
```
Constraints:

2 <= m, n <= 80
m == grid.length
n == grid[i].length
0 <= grid[i][j] <= 104
0 <= k <= 10

## My Thoughts

This problem looked like a normal “minimum path cost” grid DP at first (move right/down and pay the destination cost), but the teleport rule completely changes the shape of it. Teleporting lets you “jump” to any cell with a value less than or equal to your current cell for free, but only up to k times, so the real challenge was figuring out how to apply teleports without brute-forcing all possible jump destinations.

My approach was to treat teleportation like a global relaxation step. Instead of trying every possible teleport edge (which would explode in complexity), I grouped cells by their values in teleMap and used the fact that teleporting is only allowed from higher/equal values to lower/equal values. That monotonic constraint is what makes the optimization possible.

The normalMoveUpdate pass is classic grid DP: propagate best costs forward using only right/down moves. Then the teleportUpdate pass acts like: “if you can reach any cell with value ≥ v, then you can also reach any cell with value v for the same cost.” By scanning values in reverse and building minCostForValue[v] as a suffix-minimum, I could update all teleport destinations efficiently in one sweep.

Looping k times essentially simulates “layers” of teleports. Each iteration does all normal moves, then (if teleports remain) applies one teleport relaxation. That keeps the code pretty clean while still leveraging the global structure of the teleport rule.

Overall, this felt like a problem where the key isn’t a fancy algorithm name, it’s recognizing the teleport constraint creates an ordering you can exploit.

## What I Learned
	•	Teleportation seems like it creates too many edges, but the <= constraint makes it compressible.
	•	Sorting cells by value lets you treat teleports as a value-based relaxation, not a pairwise graph problem.
	•	A suffix minimum (“best cost among values ≥ v”) is the core trick that makes teleport updates fast.
	•	Separating the solution into two phases (normal DP + teleport relaxation) keeps the logic understandable.
	•	Iterating k times effectively models “using up teleports” without needing to track full teleport paths.
	•	When constraints are small enough (m,n ≤ 80 and k ≤ 10), a clean iterative DP approach can be both correct and efficient without overengineering.