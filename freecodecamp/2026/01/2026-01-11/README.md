# 2026-01-11
[2026-01-11 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-11)

## Instructions

Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.
Return:
- "Hole in one!" if it took one stroke.
- "Eagle" if it took two strokes less than par.
- "Birdie" if it took one stroke less than par.
- "Par" if it took the same number of strokes as par.
- "Bogey" if it took one stroke more than par.
- "Double bogey" if took two strokes more than par.

## My Thoughts

This problem was more about mapping domain rules cleanly than about algorithms. Once the special case of a hole-in-one was handled, the rest of the logic naturally reduced to the difference between strokes and par. Using a dictionary made the solution much clearer than chaining multiple if/elif statements. It also made the code easier to reason about and less error-prone. Overall, this felt like a good reminder that sometimes the most “optimal” solution is the one that clearly expresses the rules of the problem.

## What I Learned

- Dictionaries are a great fit for rule-based mappings
- Handling edge cases early keeps the main logic clean
- Not every problem needs complex conditionals or loops
- Readability and correctness matter more than cleverness
- Constant-time solutions can still benefit from good structure
