# 2026-01-14

## Instructions
You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the minimum y-coordinate value of a horizontal line such that the total area covered by squares above the line equals the total area covered by squares below the line.

Answers within 10-5 of the actual answer will be accepted.

Note: Squares may overlap. Overlapping areas should be counted only once in this version.

```
Example 1:
Input: squares = [[0,0,1],[2,2,1]]
Output: 1.00000
Explanation:

Any horizontal line between y = 1 and y = 2 results in an equal split, with 1 square unit above and 1 square unit below. The minimum y-value is 1.

Example 2:
Input: squares = [[0,0,2],[1,1,1]]
Output: 1.00000
Explanation:
Since the blue square overlaps with the red square, it will not be counted again. Thus, the line y = 1 splits the squares into two equal parts.
```
 
Constraints:

1 <= squares.length <= 5 * 104
squares[i] = [xi, yi, li]
squares[i].length == 3
0 <= xi, yi <= 109
1 <= li <= 109
The total area of all the squares will not exceed 1015.

## My Thoughts

This problem was a big step up from the previous version where overlapping areas were counted multiple times. The key difficulty here was realizing that overlapping squares must only contribute to the total area once, which immediately rules out simple summation or per-square slicing.

My initial approach broke the plane into horizontal slabs using all unique y-coordinates from the square boundaries. Within each slab, I computed the union of x-intervals to determine the actual covered width, then multiplied by the slab height to get area. This made the geometry manageable and kept the logic conceptually clear.

To find the split line, I reused the same slab logic and applied a binary search on y, recalculating the area below the midpoint each time. While this worked correctly and passed logically, it was clear that a lot of repeated work was happening, especially re-filtering active squares and re-merging intervals for every midpoint.

Overall, the solution favored correctness and clarity over efficiency. It helped me reason about union area and overlapping geometry, even if it wasn’t the most performant approach.

## What I Learned
	•	Counting union area is fundamentally different from summing individual areas overlaps must be handled explicitly.
	•	Breaking a 2D area problem into horizontal slabs is a powerful way to simplify geometry.
	•	Interval merging is essential whenever overlapping ranges are involved.
	•	Binary search can solve continuous geometry problems, but it can hide significant repeated computation.
	•	A working but slow solution is often a necessary step before recognizing where optimizations are possible.
	•	This problem naturally leads toward sweep-line and segment tree techniques once performance becomes a concern.