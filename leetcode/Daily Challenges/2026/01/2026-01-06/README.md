# 2026-01-06

## Instructions

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

```
Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 ```

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

## My Thoughts

This problem was a good reminder that when a question is phrased in terms of “levels” of a tree, a breadth-first search is usually the right tool. Instead of trying to track depths with recursion, processing the tree level by level made the logic much clearer.
    
I focused on making the BFS efficient by avoiding costly operations like shift() on arrays. Using an index to move through the queue allowed me to keep the traversal O(n) without hidden performance penalties.

Another detail I paid attention to was how ties were handled. Since the problem asks for the smallest level with the maximum sum, I made sure to only update the result when the current level’s sum was strictly greater than the previous maximum.

Overall, this felt like a clean application of BFS with careful bookkeeping.

## What I Learned
	•	Level-based problems on trees are often best solved with breadth-first search.
	•	Avoiding Array.shift() in JavaScript/TypeScript can make a big performance difference.
	•	Tracking level boundaries explicitly simplifies per-level calculations.
	•	Paying attention to tie-breaking rules is essential for correctness.
	•	Clear traversal logic is often more important than clever tricks.
