# 2025-12-10
[2025-12-08 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-08)

## Instructions.    
Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

- Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
- There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
-   Convert all bold occurrences to HTML b tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This challenge was all about translating a slightly fussy text rule into a precise regular expression. Conceptually, “replace Markdown bold with <b> tags” sounds simple, but the constraints make it interesting:

The bold delimiters can be ** or __.

No spaces are allowed between the delimiter and the text at either side.

Spaces are allowed inside the bold text.

The tricky part wasn’t just matching the delimiters; it was capturing that “no leading/trailing spaces” rule while still allowing spaces in the middle. A naive regex like /\*\*(.+?)\*\*/ would happily accept ** bad** or **bad **, which violates the spec.

Using lookahead and lookbehind made the solution feel much more declarative: instead of manually trimming or post-processing, the regex itself encodes the formatting rules. The final pattern ends up representing the spec almost line-for-line: “open marker, not followed by a space, some text, not ending in a space, same closing marker.”

It’s a good example of how regex can move from “pattern-matching” to “little DSL for constraints,” and how readable that can actually be when kept focused.

## What I Learned

- Backreferences (\1) are perfect for paired delimiters.
Matching (__|\*\*) and reusing \1 ensures the string is wrapped in the same symbol type, not just ‘any bold-like marker’.
- Lookahead and lookbehind are great for enforcing formatting rules.
(?! ) and (?<! ) let you say “no space here” without consuming any characters.
- Greedy vs. lazy matching matters a lot.
(.+?) prevents the regex from overreaching and swallowing too much when multiple bold segments appear in the same string.
- Regex can encode spec-level rules directly.
Instead of writing a bunch of conditional logic in JS, a single well-crafted pattern can enforce:
    - type of delimiters
    - no leading/trailing spaces
    - correct pairing
    - multiple occurrences in one pass.
- Readability is still important.
Even though the regex is dense, its structure ((__|\*\*)(?! )(.+?)(?<! )\1) maps nicely to the problem statement once you break it down.