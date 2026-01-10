# 2026-01-10

## Instructions
Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

```
Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Example 2:
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
```

Constraints:

1 <= s1.length, s2.length <= 1000
s1 and s2 consist of lowercase English letters.

## My Thoughts

This problem clicked for me once I recognized it as a dynamic programming problem very similar to edit distance, but with a cost tied to ASCII values instead of a flat operation cost. Instead of thinking in terms of inserting or replacing characters, the problem is really about deciding which characters to delete from either string to make them equal at the lowest possible cost.

Setting up the DP table helped make the decisions explicit. Each cell represents the minimum cost to make two prefixes match, and every mismatch forces a choice: delete from the first string or delete from the second. That framing made the solution feel systematic rather than tricky.

I also liked how the base cases naturally fell out of the problem. If one string is empty, the only option is to delete everything from the other string, which maps cleanly to summing ASCII values.

## What I Learned
	•	This problem is essentially a weighted version of edit distance.
	•	Dynamic programming shines when you can define a clear “prefix vs prefix” state.
	•	Base cases matter just as much as the transition logic in DP problems.
	•	Comparing characters directly can sometimes eliminate entire branches of work (no deletion cost when characters match).
	•	Even when a solution is already optimal in time complexity, space usage can often be improved with rolling arrays.