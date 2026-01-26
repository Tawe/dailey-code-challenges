# 2026-01-04
[2026-01-04 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-04)

## Instructions

Leap Year Calculator
Given an integer year, determine whether it is a leap year.
A year is a leap year if it satisfies the following rules:
- The year is evenly divisible by 4, and
- The year is not evenly divisible by 100, unless
- The year is evenly divisible by 400.

## My Thoughts

This problem was straightforward once I translated the leap year rules into logical conditions. The main challenge wasn’t algorithmic complexity, but making sure the conditions were combined correctly so that all the edge cases were handled properly. The part that required the most attention was the exception for years divisible by 100. It’s easy to forget the follow-up rule that years divisible by 400 are still leap years. Grouping those conditions clearly helped avoid mistakes and made the logic easier to read. Overall, this felt like a good example of turning a set of written rules directly into clean, readable code.

## What I Learned

- Some problems are best solved by directly encoding the rules rather than overthinking the solution.
- Logical grouping with parentheses is essential for correctness and readability.
- Edge cases often come from exception rules, not the main condition.
- Constant-time solutions are ideal when the problem is purely rule-based.
- Simple, well-structured expressions can be both concise and very clear.
