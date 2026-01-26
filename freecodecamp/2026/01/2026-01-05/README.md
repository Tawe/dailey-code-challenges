# 2026-01-05
[2026-01-05 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-05)

## Instructions

Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.
- 1 bar equal 14.5038 psi.
Return an array with the following values for each tire:
- "Low" if the tire pressure is below the minimum allowed.
- "Good" if it's between the minimum and maximum allowed.
- "High" if it's above the maximum allowed.

## My Thoughts

This problem was mostly about careful unit conversion and clear conditional logic rather than algorithmic complexity. Once I identified that the acceptable pressure range was given in bar while the tire pressures were in psi, the first step was to convert the range into the same unit so comparisons would be accurate. After that, the logic was straightforward: for each tire, check whether its pressure falls below, within, or above the allowed range. Since there are always exactly four tires, performance wasn’t a concern, and the focus was on writing clean and readable code. I also made sure to handle the boundary conditions correctly so that pressures exactly at the minimum or maximum are classified as “Good.

## What I Learned

- Unit consistency is critical before making comparisons.
- Converting values once outside a loop keeps the logic efficient and clean.
- Simple classification problems benefit from clear, explicit conditionals.
- Even very small input sizes still benefit from readable, maintainable code.
- Defining conversion constants improves clarity and reduces the risk of mistakes.
