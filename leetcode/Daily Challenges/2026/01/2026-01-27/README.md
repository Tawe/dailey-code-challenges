# 2026-01-27

## Instructions
You are given a directed, weighted graph with n nodes labeled from 0 to n - 1, and an array edges where edges[i] = [ui, vi, wi] represents a directed edge from node ui to node vi with cost wi.

Each node ui has a switch that can be used at most once: when you arrive at ui and have not yet used its switch, you may activate it on one of its incoming edges vi → ui reverse that edge to ui → vi and immediately traverse it.

The reversal is only valid for that single move, and using a reversed edge costs 2 * wi.

Return the minimum total cost to travel from node 0 to node n - 1. If it is not possible, return -1.
```
Example 1:
Input: n = 4, edges = [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]
Output: 5
Explanation:
Use the path 0 → 1 (cost 3).
At node 1 reverse the original edge 3 → 1 into 1 → 3 and traverse it at cost 2 * 1 = 2.
Total cost is 3 + 2 = 5.

Example 2:
Input: n = 4, edges = [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]
Output: 3
Explanation:
No reversal is needed. Take the path 0 → 2 (cost 1), then 2 → 1 (cost 1), then 1 → 3 (cost 1).
Total cost is 1 + 1 + 1 = 3.
```

Constraints:

2 <= n <= 5 * 104
1 <= edges.length <= 105
edges[i] = [ui, vi, wi]
0 <= ui, vi <= n - 1
1 <= wi <= 1000

## My Thoughts

This problem looked like a complicated state-management problem at first. The idea that each node has a switch that can only be used once pushed me toward tracking which switches had been activated, which quickly felt overwhelming and messy. I initially thought I needed to carry that state through the algorithm.

The breakthrough was realizing that the switch mechanic doesn’t actually create long-term state, it just enables a one-time reversed traversal of an existing edge, at a higher cost. Once I reframed the problem that way, the solution became much clearer.

Instead of modeling switches explicitly, I could transform the graph itself. For every original edge u → v (w), I add:

	•	the original edge u → v (w)
	•	a reversed edge v → u (2w)

With that transformation, the problem becomes a standard shortest-path problem. Dijkstra applies cleanly, and the “use each switch once” rule is naturally enforced because an optimal shortest path never revisits nodes or cycles when all costs are positive.

Implementing my own priority queue also reinforced how Dijkstra actually works under the hood instead of treating it like a black box.

This ended up being a great example of how changing the representation of a problem can eliminate unnecessary complexity.

## What I Learned
	•	Constraints that look stateful can sometimes be modeled as graph transformations instead.
	•	A one-time action doesn’t always need explicit state if it can be encoded structurally.
	•	Shortest paths with strictly positive weights never benefit from cycles.
	•	Reversed edges with different costs are often easier to model than conditional logic.
	•	Dijkstra becomes much simpler when the graph is modeled correctly.
	•	Writing a priority queue from scratch helps solidify how heap-based algorithms really function.
	•	When a solution feels like it’s exploding in state size, it’s often a sign the abstraction is wrong.