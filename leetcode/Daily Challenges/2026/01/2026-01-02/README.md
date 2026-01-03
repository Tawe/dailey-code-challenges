# 2026-01-02

## Instructions
You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

 
``
Example 1:
Input: nums = [1,2,3,3]
Output: 3

Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
``

Constraints:

2 <= n <= 5000
nums.length == 2 * n
0 <= nums[i] <= 104
nums contains n + 1 unique elements and one of them is repeated exactly n times.

## My Thoughts

At first, this problem felt like a straightforward frequency-counting task, so my instinct was to use a map to count how many times each number appeared and then return the most frequent one. That approach worked for all the inputs I tried, including some custom test cases I made up myself.

However, I ran into confusion when trying a more “optimal” solution that returned the first duplicate it encountered. It didn’t work for one of my test cases, which made me question whether the solution was correct.

The key realization was that my test case violated the problem’s constraints. The challenge guarantees that exactly one element is repeated n times, and all other elements are unique. In my test case, I accidentally included multiple repeated values, which changed the problem entirely.

Once I re-aligned my thinking with the actual constraints, the simpler solution made sense. Since there can only be one repeated value, the first duplicate encountered must be the correct answer.

This was a good reminder that “working code” doesn’t always mean “correct for the problem,” especially if the assumptions don’t match the spec.

## What I Learned
	•	Problem constraints matter just as much as the problem statement itself.
	•	Testing with inputs that violate constraints can lead to misleading conclusions.
	•	Sometimes the optimal solution is simpler because the problem guarantees strong conditions.
	•	A frequency map can solve more general cases, but it may be unnecessary overhead for constrained problems.
	•	Before judging an algorithm as incorrect, it’s important to verify that the test input is valid for the problem.