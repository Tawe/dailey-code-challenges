# 2025-12-12
[2025-12-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-12)

## Instructions.
Inventory Update
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].

## My Thoughts

This problem looks like a simple data-update task, but there are a couple of quiet constraints hiding in the wording. The biggest one is order: the original inventory order must be preserved, and any new items must be appended in the exact order they appear in the shipment. That immediately rules out approaches that sort or rebuild the inventory from scratch.

My first instinct was to use nested loops, for each shipment item, scan the inventory to see if it exists. That works functionally, but it doesn’t scale well and it obscures the real intent of the problem. The inventory isn’t changing structurally very often; it’s just being updated.

The turning point was realizing that this is really a lookup problem, not a transformation problem. If I can quickly answer “where does this item live in the inventory?”, then the update logic becomes trivial. A map from item name to inventory index gives exactly that, while still letting the inventory array remain the source of truth for ordering.

Once that structure was in place, the rest of the solution became almost declarative: update quantities if present, otherwise append. No extra passes, no reordering, and no unnecessary complexity.

This challenge was a good reminder that many problems aren’t about clever algorithms, they’re about choosing the right data structure to express intent clearly.

## What I Learned

- Order constraints shape the solution.
Preserving original order while appending new items rules out rebuilding or sorting approaches.
- When identity matters, indexing matters.
Mapping item names to indices turns repeated searches into constant-time operations.
- Nested loops are often a signal, not a solution.
If you find yourself repeatedly scanning the same structure, it’s usually time to introduce a lookup table.
- Keep one source of truth.
The inventory array holds the data and order; the map exists only to accelerate access.
- Simple problems still reward clean structure.
Even when constraints are small, choosing clarity and efficiency builds better habits for larger systems.
- This mirrors real-world state updates.
Many production systems work exactly like this: index existing state, apply updates, append new records without disturbing history.