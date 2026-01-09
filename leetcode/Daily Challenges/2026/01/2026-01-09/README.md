# 2026-01-09

## Instructions
Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

```
Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

Example 2:
Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree.

Example 3:
Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.
 ```

Constraints:

The number of nodes in the tree will be in the range [1, 500].
0 <= Node.val <= 500
The values of the nodes in the tree are unique.

## My Thoughts

This problem initially felt intimidating because of how much it talks about “deepest nodes” and “smallest subtree,” which can sound like multiple passes or complicated bookkeeping. Once I reframed it as a depth problem, things became much clearer.

The key realization was that I didn’t need to explicitly track all deepest nodes. Instead, I could let recursion do the work by returning both the depth of a subtree and the best candidate node that contains all deepest nodes beneath it. Comparing the left and right subtree depths at each step naturally tells you whether the current node is the answer or whether the answer must come from one side.

What I liked about this solution is that it feels very clean: no global state, no extra traversal, and no lists of nodes to manage. Everything flows upward through the return values.

What I Learned
	•	Many tree problems become simpler when you return multiple values from recursion instead of storing global state.
	•	The “smallest subtree containing X” problems often reduce to a lowest common ancestor pattern.
	•	Depth comparisons can implicitly encode a lot of information without explicitly tracking nodes.
	•	Solving a problem in one DFS pass is often a sign you’re on the right track.
	•	Tuple-style returns ([depth, node]) are a powerful technique for tree algorithms.
