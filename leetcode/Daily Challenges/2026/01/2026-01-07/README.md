# 2026-01-07

## Instructions
Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.

```
Example 1:
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)

Example 2:
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
``` 

Constraints:

The number of nodes in the tree is in the range [2, 5 * 104].
1 <= Node.val <= 104

## My Thoughts

This problem was a good example of how sometimes the algorithm can be straightforward, but the implementation details still matter a lot.

The key insight was realizing that any valid split of the tree corresponds to removing a single edge, which means every subtree sum is a potential candidate. Once I knew the total sum of the tree, the problem became about checking each subtree and calculating
subtreeSum * (totalSum - subtreeSum).

Structurally, this felt clean: one traversal to compute the total, and a second traversal to evaluate all possible splits. There was no need for complicated data structures or backtracking—just careful bookkeeping during DFS.

The trickiest part wasn’t the tree logic at all, but numeric safety. Even though JavaScript numbers look large enough, the product can exceed the safe integer limit, which is easy to overlook if you’re used to other languages.

## What I Learned
	•	Tree split problems often reduce to “total minus subtree” math once the structure is understood.
	•	Running two DFS passes can still be optimal if each pass is linear.
	•	Every subtree represents a valid cut when removing exactly one edge.
	•	JavaScript’s number type can silently lose precision on large multiplications.
	•	bigint is sometimes necessary even when the algorithm itself is correct.
	•	You should always maximize the value before applying modulo, not after.
	•	Correctness isn’t just about logic—numeric constraints matter just as much.