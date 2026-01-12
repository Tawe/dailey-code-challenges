# 2026-01-12
[2026-01-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-12)


## Instructions
Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

- 1 acre equals 4046.86 square meters.
- 1 hectare equals 10,000 square meters.

Here's a list of crops that will be given as input and how much space a single plant takes:

Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters

Return the number of plants that fit in the field, rounded down to the nearest whole plant.

## My Thoughts

This problem was mostly about translating real-world units into a consistent measurement system. Once everything was converted into square meters, the rest of the solution became a straightforward division problem.

Using a dictionary for crop spacing made the logic very clean and avoided a long chain of conditionals. Converting acres and hectares up front also helped keep the final calculation simple and easy to verify.

Overall, this felt like a problem where clarity and correctness mattered more than clever optimizations.


## What I Learned
	•	Converting all values into a single base unit simplifies calculations
	•	Dictionaries are ideal for mapping fixed domain rules (like crop spacing)
	•	Flooring results with int() is a clean way to match “rounded down” requirements
	•	Straightforward arithmetic solutions are often the most optimal
	•	Writing readable code makes it easier to reason about real-world logic problems