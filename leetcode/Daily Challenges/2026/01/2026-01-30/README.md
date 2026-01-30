# 2026-01-30

## Instructions
You are given two 0-indexed strings source and target, both of length n and consisting of lowercase English characters. You are also given two 0-indexed string arrays original and changed, and an integer array cost, where cost[i] represents the cost of converting the string original[i] to the string changed[i].

You start with the string source. In one operation, you can pick a substring x from the string, and change it to y at a cost of z if there exists any index j such that cost[j] == z, original[j] == x, and changed[j] == y. You are allowed to do any number of operations, but any pair of operations must satisfy either of these two conditions:

The substrings picked in the operations are source[a..b] and source[c..d] with either b < c or d < a. In other words, the indices picked in both operations are disjoint.
The substrings picked in the operations are source[a..b] and source[c..d] with a == c and b == d. In other words, the indices picked in both operations are identical.
Return the minimum cost to convert the string source to the string target using any number of operations. If it is impossible to convert source to target, return -1.

Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i]. 
```
Example 1:
Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert "abcd" to "acbe", do the following operations:
- Change substring source[1..1] from "b" to "c" at a cost of 5.
- Change substring source[2..2] from "c" to "e" at a cost of 1.
- Change substring source[2..2] from "e" to "b" at a cost of 2.
- Change substring source[3..3] from "d" to "e" at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28. 
It can be shown that this is the minimum possible cost.

Example 2:
Input: source = "abcdefgh", target = "acdeeghh", original = ["bcd","fgh","thh"], changed = ["cde","thh","ghh"], cost = [1,3,5]
Output: 9
Explanation: To convert "abcdefgh" to "acdeeghh", do the following operations:
- Change substring source[1..3] from "bcd" to "cde" at a cost of 1.
- Change substring source[5..7] from "fgh" to "thh" at a cost of 3. We can do this operation because indices [5,7] are disjoint with indices picked in the first operation.
- Change substring source[5..7] from "thh" to "ghh" at a cost of 5. We can do this operation because indices [5,7] are disjoint with indices picked in the first operation, and identical with indices picked in the second operation.
The total cost incurred is 1 + 3 + 5 = 9.
It can be shown that this is the minimum possible cost.

Example 3:
Input: source = "abcdefgh", target = "addddddd", original = ["bcd","defgh"], changed = ["ddd","ddddd"], cost = [100,1578]
Output: -1
Explanation: It is impossible to convert "abcdefgh" to "addddddd".
If you select substring source[1..3] as the first operation to change "abcdefgh" to "adddefgh", you cannot select substring source[3..7] as the second operation because it has a common index, 3, with the first operation.
If you select substring source[3..7] as the first operation to change "abcdefgh" to "abcddddd", you cannot select substring source[1..3] as the second operation because it has a common index, 3, with the first operation.
```

Constraints:

1 <= source.length == target.length <= 1000
source, target consist only of lowercase English characters.
1 <= cost.length == original.length == changed.length <= 100
1 <= original[i].length == changed[i].length <= source.length
original[i], changed[i] consist only of lowercase English characters.
original[i] != changed[i]
1 <= cost[i] <= 106

## ## My Thoughts

This problem was tricky at first because it looks like a normal “string conversion” question, but the rules about operations being **disjoint** (or exactly identical) completely change how you have to think about it. I couldn’t just greedily replace whatever looked best — I needed a plan that guarantees I never “overlap” edits.

Once I realized the safest way to avoid overlap is to treat the string like it’s being solved **left to right**, it clicked: I can decide the cost to finish the first _i_ characters, and only ever “apply” an operation that ends exactly at _i_. That turns the overlap constraint into something DP naturally enforces.

The other big leap was noticing that substring conversions can happen in multiple steps (A → B → C), so I shouldn’t only consider the direct conversion costs. Computing the cheapest cost between every “known substring” using Floyd–Warshall gave me a reliable lookup table for the DP step.

So the solution became two clean phases:
1. precompute cheapest substring-to-substring conversions,
2. run DP over the source/target indices using allowed segment lengths.

## What I Learned
- The “disjoint or identical” rule basically forces you into **segment-based thinking** (DP over prefixes is a natural fit).
- Even though the operations talk about substrings, the problem reduces nicely to **covering the string left-to-right** with valid conversion segments.
- When conversions can chain (x → y → z), it’s worth building an **all-pairs minimum conversion cost** table instead of relying on direct edges.
- Floyd–Warshall is a great tool when the number of unique “states” (here: unique substrings in rules) is small enough.
- DP over `dp[i] = min cost to fix first i chars` is a reliable way to enforce “no overlap” constraints without extra bookkeeping.
- Adding `len = 1` as a fallback is important because it ensures single-character segments are always considered when they’re convertible or already matching.
- Problems that mix “graph costs” + “string positions” often become manageable by splitting them into **precompute costs** + **optimize layout**.