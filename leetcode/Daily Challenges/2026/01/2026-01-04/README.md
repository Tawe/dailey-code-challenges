# 2026-01-04

## Instructions
Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

```
Example 1:
Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.

Example 2:
Input: nums = [21,21]
Output: 64

Example 3:
Input: nums = [1,2,3,4,5]
Output: 0
``

Constraints:

1 <= nums.length <= 104
1 <= nums[i] <= 105

## My Thoughts

My first approach to this problem was to explicitly generate all divisors for each number and then check if there were exactly four. Conceptually, this made sense and was easy to reason about, but it quickly became clear that it wasn’t efficient. Looping from 1 to num for every value in the array does far more work than necessary.

The turning point was realizing that numbers with exactly four divisors have a very specific structure. Instead of treating every number the same, I could take advantage of mathematical properties to drastically reduce the amount of work. Once I switched to iterating only up to the square root of each number and counting divisors as I went, the performance improvement was obvious.

Adding an early exit when more than four divisors were found also helped keep the logic efficient and easy to follow.

Overall, this problem was a good reminder that brute force can be useful for understanding a problem, but it often needs refinement to meet real-world constraints.

## What I Learned
	•	Brute-force divisor generation does not scale for large inputs.
	•	Numbers with exactly four divisors follow specific mathematical patterns.
	•	Iterating only up to sqrt(n) is a common and powerful optimization for divisor problems.
	•	Early exits can significantly improve performance in counting problems.
	•	Understanding the math behind a problem can lead to much cleaner and faster solutions.