# 2026-01-15

## Instructions
You are given the two integers, n and m and two integer arrays, hBars and vBars. The grid has n + 2 horizontal and m + 2 vertical bars, creating 1 x 1 unit cells. The bars are indexed starting from 1.

You can remove some of the bars in hBars from horizontal bars and some of the bars in vBars from vertical bars. Note that other bars are fixed and cannot be removed.

Return an integer denoting the maximum area of a square-shaped hole in the grid, after removing some bars (possibly none).

```
Example 1:
Input: n = 2, m = 1, hBars = [2,3], vBars = [2]
Output: 4
Explanation:
The left image shows the initial grid formed by the bars. The horizontal bars are [1,2,3,4], and the vertical bars are [1,2,3].

One way to get the maximum square-shaped hole is by removing horizontal bar 2 and vertical bar 2.

Example 2:
Input: n = 1, m = 1, hBars = [2], vBars = [2]
Output: 4
Explanation:
To get the maximum square-shaped hole, we remove horizontal bar 2 and vertical bar 2.

Example 3:
Input: n = 2, m = 3, hBars = [2,3], vBars = [2,4]
Output: 4
Explanation:
One way to get the maximum square-shaped hole is by removing horizontal bar 3, and vertical bar 4.
```

Constraints:

1 <= n <= 109
1 <= m <= 109
1 <= hBars.length <= 100
2 <= hBars[i] <= n + 1
1 <= vBars.length <= 100
2 <= vBars[i] <= m + 1
All values in hBars are distinct.
All values in vBars are distinct.

## My Thoughts

This one was a nice “spot the pattern” problem. At first glance it looks like a geometry/grid simulation thing, but it really collapses into finding the longest streak of removable bars in each direction.

The key realization is: if you remove k consecutive bars along an axis, you effectively merge k + 1 unit cells into one continuous opening in that direction. So the biggest possible square side length is:
	•	(longest consecutive hBars streak + 1) vertically
	•	(longest consecutive vBars streak + 1) horizontally
	•	and the square side is the min of those two.

Once that clicked, the implementation became straightforward: sort, scan for consecutive runs, take the best run in each list, then compute the square area.

I also like that this solution stays efficient even though n and m can be huge, because we never touch the full grid, just the removable-bar lists.

## What I Learned
	•	Big constraints (n, m up to 1e9) are often a hint you’re not supposed to simulate the grid.
	•	Removing k consecutive internal bars merges space into k + 1 cells of continuous opening.
	•	Sorting + a single pass is an easy way to compute the longest consecutive run.
	•	The maximum square side length is limited by the weaker axis, so min(maxH+1, maxV+1) is the right final step.
	•	Problems like this reward turning “grid thinking” into “streak thinking” as fast as possible.