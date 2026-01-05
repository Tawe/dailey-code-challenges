# 2026-01-05

## Instructions
You are given an n x n integer matrix. You can do the following operation any number of times:

- Choose any two adjacent elements of matrix and multiply each of them by -1.

Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

```
Example 1:
Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.

Example 2:
Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
Output: 16
Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1.
 ```

Constraints:

n == matrix.length == matrix[i].length
2 <= n <= 250
-105 <= matrix[i][j] <= 105

## My Thoughts

At first, this problem seemed like it would require simulating the allowed operations on the matrix, especially since flipping adjacent elements feels very local and iterative. However, given the size of the matrix (up to 250 × 250), it quickly became clear that any simulation-based approach would be far too slow.

The key breakthrough was recognizing that the operation preserves an invariant: the parity of the number of negative values in the matrix never changes. Once I understood that, the problem stopped being about the operations themselves and became a math problem about signs.

From there, the solution naturally reduced to calculating the sum of absolute values and handling the special case where an odd number of negatives forces exactly one value to remain negative. Choosing the smallest absolute value in that case ensures the penalty to the total sum is as small as possible.

This was a good example of a problem where the allowed operations are just a distraction, the real solution comes from identifying what cannot change.

## What I Learned
	•	Some problems are best solved by finding invariants rather than simulating actions.
	•	Operations that look local can have global constraints that simplify the problem.
	•	Parity (odd vs. even) often plays a key role in optimization problems.
	•	When a constraint can’t be eliminated, minimizing its impact is the right strategy.
	•	Large input sizes are often a hint that a direct simulation is the wrong approach.
	•	Mathematical reasoning can dramatically simplify otherwise complex-looking problems.