# 2026-01-22

## Instructions
Given an array nums, you can perform the following operation any number of times:

Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
Replace the pair with their sum.
Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

```
Example 1:
Input: nums = [5,2,3,1]
Output: 2
Explanation:
The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
The array nums became non-decreasing in two operations.

Example 2:
Input: nums = [1,2,2]
Output: 0
Explanation:
The array nums is already sorted.
```
 
Constraints:

1 <= nums.length <= 50
-1000 <= nums[i] <= 1000

## My Thoughts

This problem looked like a “make the array sorted” problem at first, but it’s really a forced simulation problem. I don’t get to choose the best merge, the rules tell me exactly which adjacent pair must be merged each time: the pair with the smallest sum, with ties going to the leftmost.

Once I accepted that, the solution became a loop:
	1.	Check if the array is already non-decreasing.
	2.	If not, scan for the minimum-sum adjacent pair.
	3.	Replace that pair with its sum and count an operation.
	4.	Repeat.

The key thing was realizing that even if a merge looks “bad”, I still have to do it if it’s the minimum pair sum. So correctness here is about following the process precisely, not inventing a greedy strategy.

## What I Learned
	•	Some “optimization-looking” problems are actually deterministic simulations: the rules define the next move.
	•	Tie-breaking rules matter, using < instead of <= naturally enforces “leftmost pair wins.”
	•	A helper like isNonDecreasing keeps the main loop readable and prevents logic bugs.
	•	With small constraints (n <= 50), a clean O(n^2) simulation is usually the best solution.
	•	Array mutation (splice) is totally fine at this scale, and often clearer than overengineering data structures.