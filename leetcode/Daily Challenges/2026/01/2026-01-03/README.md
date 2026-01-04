# 2026-01-03

## Instructions
You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

```
Example 1:
Input: n = 1
Output: 12
Explanation: There are 12 possible way to paint the grid as shown.

Example 2:
Input: n = 5000
Output: 30228214
```

Constraints:

n == grid.length
1 <= n <= 5000

## My Thoughts

At first glance, this problem looked intimidating because of the large input size (n up to 5000) and the exponential number of possible colorings. A brute-force or backtracking approach was clearly impossible, so I knew early on that this had to be a dynamic programming problem.

The key insight was realizing that although there are many possible color combinations per row, they collapse into just two meaningful patterns: rows where all three colors are different, and rows where the first and third colors are the same. Once I understood that, the problem became much more manageable.

Instead of tracking every possible row configuration, I only had to track how many ways each of these two pattern types could occur at each row. From there, the transitions between rows were just simple arithmetic based on how colors can legally stack vertically.

One thing I had to be careful about was numeric overflow. Since the values grow extremely fast, using bigint in TypeScript was necessary to stay within safe limits and correctly apply the modulo operation.

Overall, this problem was more about recognizing structure and reducing state than writing complex logic.

## What I Learned
	•	Large grid coloring problems often hide smaller repeating patterns.
	•	Reducing a problem’s state space can turn an exponential problem into a linear one.
	•	Dynamic programming doesn’t always require arrays — sometimes a few rolling variables are enough.
	•	In JavaScript/TypeScript, bigint is essential when working with large combinatorial counts.
	•	Modulo arithmetic should be applied at every step, not just at the end.
	•	Understanding why a recurrence works is just as important as implementing it.
