# 2026-01-03
[2026-01-03 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-03)

## Instructions

Left-Handed Seat at the Table
Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.
A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
In the given matrix:
- An "R" is a seat occupied by a right-handed person.
- An "L" is a seat occupied by a left-handed person.
- An "U" is an unoccupied seat.
- Only unoccupied seats are available to sit at.
- The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
- Corner seats only have one seat next to them.
For example, in the given matrix:
```
[
["U", "R", "U", "L"],
["U", "R", "R", "R"]
]
```
The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

## My Thoughts

This problem looked simple at first, just check neighboring seats — but the tricky part turned out to be understanding what “left” actually means. Because the seats in the top row face down and the bottom row face up, the left side of a person doesn’t always line up with the left side of the array. My initial implementation assumed that “left” always meant index - 1, which worked for one row but failed for the other. The failing test cases helped highlight that my mental model of the seating orientation was backwards. Once I stopped thinking in terms of array indices and instead thought about the physical orientation of the person sitting at the table, the logic clicked. For the top row, a person’s left is to the right in the array. For the bottom row, a person’s left is to the left in the array. After correcting that mapping, the solution became clean and predictable, and the edge cases (corner seats) naturally fell out of the logic.

## What I Learned

- Problems involving “left” and “right” often depend on orientation, not array direction.
- Failing test cases are often a sign of an incorrect mental model, not bad code.
- Explicitly reasoning about real-world orientation can clarify index-based logic.
- Corner cases are easier to handle once the core directional logic is correct.
- When logic branches by row or orientation, writing it out clearly is better than trying to be clever.
