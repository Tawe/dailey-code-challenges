# 2026-01-26
[2026-01-26 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-26)

## Instructions

FizzBuzz Mini
Given an integer, return a string based on the following rules:
- If the number is divisible by 3, return "Fizz".
- If the number is divisible by 5, return "Buzz".
- If the number is divisible by both 3 and 5, return "FizzBuzz".
- Otherwise, return the given number as a string.

## My Thoughts

This was a classic logic problem, but it still required paying attention to the order of conditions. The biggest thing to watch out for was handling the case where the number is divisible by both 3 and 5. I made sure to check the combined condition first, because if I checked divisibility by 3 or 5 separately before that, the "FizzBuzz" case would never be reached. Once that was clear, the rest of the solution was very straightforward. This problem felt more about correctness and clarity than optimization.

## What I Learned

- The order of conditional checks matters, especially when conditions overlap.
- Combining conditions (n % 3 == 0 and n % 5 == 0) prevents logical bugs.
- Even very simple problems reinforce good habits around clean control flow.
- Returning early and handling special cases first keeps logic easy to read.
- Straightforward solutions are often the best ones for problems like this.
