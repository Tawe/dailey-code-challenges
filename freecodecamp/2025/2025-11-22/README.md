# 2025-11-22
[2025-11-22 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-22)

## Instruction 
Recipe Scaler
Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
Return the scaled items in the same order they are given.

## My Thoughts

My initial solution worked as expected: split each ingredient string, scale the first value, and rebuild the string. The process felt straightforward, but I could tell the implementation wasn’t as clean as it could be. Things like manually shifting and unshifting array elements, implicit type coercion, and building results with a push loop all worked, but they didn’t feel like the most readable or intentional way to express the transformation.

As I reviewed the code, I realized this problem is fundamentally a map operation: take each recipe line and return a modified version of it. Once I recognized that, the structure of the solution became simpler and more expressive.

## What I Learned

- This is a classic case for .map(), the input and output arrays have a one-to-one relationship, so a mapping function communicates intent better than manual looping.
- Relying on JavaScript’s implicit string-to-number coercion (p[0] * scale) works, but using Number(...) makes the purpose clearer and avoids surprises.
- The formatting requirement, “Do not include trailing zeros”, is naturally handled by converting numbers back to strings (Number(value).toString()), which simplifies cleanup.
- Sometimes the code is technically optimal in terms of Big-O, but still benefits from structural cleanup to make the logic more declarative.
- This exercise reinforced that small string-processing tasks often become cleaner when broken into predictable transformations rather than step-by-step mutations.