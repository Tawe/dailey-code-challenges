# 2026-01-08
[2026-01-08 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-08)

## Instructions

Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.
If the given array is:
- In ascending order (lowest to highest), return "Ascending".
- In descending order (highest to lowest), return "Descending".
- Not sorted in ascending or descending order, return "Not sorted".

## My Thoughts

This solution is a great example of choosing clarity over cleverness. The intent is immediately obvious: compare the array against its sorted versions and return the appropriate label. That makes the code easy to read, easy to maintain, and hard to get wrong. While it does perform two sorts, the simplicity outweighs the cost unless this function is being called on extremely large arrays in a tight loop. For a general-purpose utility or a coding challenge, this is a very reasonable tradeoff. I also like how the ternary expression keeps everything concise without becoming unreadable.

## What I Learned

- Readability can be more important than micro-optimizing time complexity.
- Comparing against sorted() is a clean way to check ordering.
- Python’s expressive syntax makes intent very clear when used carefully.
- An O(n log n) solution is often “optimal enough” in practice.
- Premature optimization is usually worse than slightly extra computation.
