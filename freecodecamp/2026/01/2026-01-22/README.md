# 2026-01-22
[2026-01-22 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-22)

## Instructions
Class Average
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A−"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.

## My Thoughts

This problem was very straightforward once I broke it into two steps: compute the average, then map that average to a letter grade. The only real thing to be careful about was the ordering of the conditions.

I realized quickly that the comparisons must go from highest to lowest. If I checked lower thresholds first, higher grades would never be reached. Writing the conditions in descending order made the logic very easy to follow and reason about.

This felt like a “don’t overthink it” problem. The rules are explicit, and the cleanest solution is usually the best one.

## What I Learned
	•	Breaking a problem into calculate → classify makes it simpler.
	•	Order matters when using chained conditionals.
	•	Using >= thresholds avoids off-by-one errors at grade boundaries.
	•	Readability is more important than clever tricks in rule-based problems.
	•	A long if / elif chain is sometimes the most optimal solution, not a code smell.