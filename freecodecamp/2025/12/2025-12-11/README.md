# 2025-12-11
[2025-12-11 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-11)

## Instructions.
Roman Numeral Builder
Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are written from largest to smallest, left to right using the following rules:

Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

## My Thoughts

Even though Roman numerals are familiar, converting integers into them is surprisingly structured. My first instinct was to treat it like a digit-by-digit translation problem, break the number into thousands, hundreds, tens, and ones, then map each to its Roman form. That would work, but it felt clunky and full of branching logic.

The moment that simplified everything was recognizing that Roman numerals are essentially a greedy system. You always choose the largest Roman value that fits into the remaining number. Once I shifted to thinking in terms of “consume the biggest chunk possible,” the whole problem became a straightforward loop.

The only real complication is the subtractive cases (4, 9, 40, 90, etc.), but even those become trivial once you treat them as just more entries in the value/symbol list. There’s no need to write special conditions for them, the greediness handles everything automatically.

What initially seemed like a formatting problem ended up being an elegant example of how powerful a well-ordered lookup table can be. Once the values are sorted from largest to smallest, the algorithm practically writes itself.

## What I Learned

- Roman numerals are inherently greedy.
You always pick the largest possible symbol at each step, which turns the entire conversion into a simple subtraction loop.
- Subtractive pairs don’t need special logic.
Treat IV, IX, XL, XC, CD, and CM as standard symbols in the mapping and the system naturally avoids illegal repeats.
- Good ordering simplifies the entire problem.
The descending value list (1000 → 1) eliminates branching and makes the algorithm linear and predictable.
- Formatting systems often map nicely to data-driven solutions.
By structuring the symbol/value pairs in arrays, the control flow becomes almost trivial.
- Many classical “pattern recognition” problems reduce to greedy strategies.
- If a representation uses fixed symbols and fixed rules, greediness often matches the underlying mathematical structure.