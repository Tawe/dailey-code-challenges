# 2026-01-08

## Instructions
Given two arrays nums1 and nums2.

Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not).

```
Example 1:
Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.

Example 2:
Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.

Example 3:
Input: nums1 = [-1,-1], nums2 = [1,1]
Output: -1
Explanation: Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.
 ```

Constraints:

1 <= nums1.length, nums2.length <= 500
-1000 <= nums1[i], nums2[i] <= 1000

## My Thoughts

This problem was a good reminder of how tricky subsequence dynamic programming can be. At first glance, it feels similar to a standard longest common subsequence or knapsack-style problem, but the requirement that the subsequences must be non-empty adds an important twist.

The hardest part was reasoning about when to “start fresh” versus when to extend an existing subsequence. Simply carrying forward previous DP values isn’t enough, because sometimes the best choice is to ignore all prior work and start a new subsequence with the current pair of numbers. Handling negative numbers made this especially important.

Once I framed the problem as a 2D DP where each state represents the best dot product up to two indices, the solution became much clearer. Using rolling arrays also helped keep the space usage under control.

## What I Learned
	•	Subsequence DP problems often require explicitly handling the “start new vs extend” decision.
	•	Using max(0, previous) is a clean way to represent “either extend the subsequence or start fresh.”
	•	Negative numbers can completely change DP logic if not handled carefully.
	•	Rolling arrays are a practical optimization when only the previous row of DP is needed.
	•	Even when a solution works, simplifying the recurrence can make the intent much clearer and easier to reason about.