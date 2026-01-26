# 2026-01-25

## Instructions
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

```
Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
``` 

Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106
 
## My Thoughts

This problem became much simpler once I realized that sorting the array was the key step. The minimum absolute difference between any two numbers in an array will always appear between two adjacent elements once the array is sorted.

Instead of comparing every possible pair (which would be inefficient), I first sorted the array and made a single pass to find the smallest difference. Then I made a second pass to collect all adjacent pairs that matched that minimum difference.

The solution felt very clean because it separated the problem into two clear phases: finding the minimum difference, and then gathering the pairs that match it.

## What I Learned
	•	Sorting can drastically simplify problems involving minimum or maximum differences.
	•	The smallest absolute difference in a set always occurs between adjacent values in sorted order.
	•	Breaking a problem into multiple passes can improve clarity without hurting performance.
	•	This approach avoids unnecessary comparisons and scales well for large inputs.
	•	Simple observations can turn what looks like an O(n²) problem into an O(n log n) one.