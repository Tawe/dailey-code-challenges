# 2025-11-09

## Instructions
You are given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
Return the number of operations required to make either num1 = 0 or num2 = 0.

 

Example 1:

Input: num1 = 2, num2 = 3
Output: 3
Explanation: 
- Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
- Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
- Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
So the total number of operations required is 3.
Example 2:

Input: num1 = 10, num2 = 10
Output: 1
Explanation: 
- Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
So the total number of operations required is 1.
 

Constraints:

0 <= num1, num2 <= 105


## My Thoughts

This problem looked complicated right from the start. Trying to pick the “largest subset” of binary strings with limits on how many 0s and 1s I can use felt messy. My first instinct was to think of it like trying combinations or brute-forcing subsets, but that would blow up instantly.

The moment things started to make sense was when I realized each string has a cost: some number of zeros and some number of ones. And we have a fixed “budget” of m zeros and n ones. This is basically a knapsack problem, but with two constraints instead of one.

Once I understood that, the structure became much clearer:

Each string is either taken or not taken.

If I take it, I subtract its zeros and ones from my available capacity.

If I don’t take it, nothing changes.

I want to maximize how many strings I take.

That’s exactly how knapsack works. The DP table (dp[i][j]) was just tracking how many strings I can build if I have i zeros and j ones available.

The other big realization was that the DP needs to be updated backwards. If I go forward, I’d reuse the same string multiple times. Going backwards ensures each string contributes at most once.

Once all that clicked, the solution was surprisingly clean.

## What I Learned

This problem is a classic example of a 0/1 knapsack, but with two dimensions (zeros and ones).

Counting zeros and ones in each string is essential before you even think about DP.

A DP table like dp[zeros][ones] is a powerful way to track the best result under multiple constraints.

The “take or skip” transition is always the same in knapsack:

dp[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1)


Iterating the DP table backwards prevents double-counting an item.

Even though the problem looks like combinatorics or subsets, it’s actually solved through a structured DP approach.

The final answer is simply dp[m][n], after processing every string.

This challenge helped reinforce how knapsack problems can show up in unexpected forms, and how identifying the “cost” and “capacity” parts early makes everything else fall into place.