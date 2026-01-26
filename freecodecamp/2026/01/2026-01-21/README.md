# 2026-01-21
[2026-01-21 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-21)

## Instructions

Markdown Inline Code Parser
Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.
Inline code blocks in Markdown use a single backtick (`) at the start and end of the code block text.
Return the given string with all code blocks converted to HTML code tags.
For example, given the string "Use `let` to declare the variable.", return "Use <code>let</code> to declare the variable.".
Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This problem felt much more straightforward than some of the recent algorithm-heavy challenges, but it was still a good exercise in thinking about string parsing rules instead of logic or math. Once I recognized that inline code blocks are always wrapped in a single backtick, it became clear that a regular expression was the right tool. Using re.sub made the transformation very clean, find the Markdown pattern, replace it with the equivalent HTML. The biggest thing I had to be careful about was making sure the regex didn’t accidentally match too much text. Using a non-greedy match (.*?) ensured that each pair of backticks was handled independently. This felt like a problem where clarity and simplicity matter more than cleverness.

## What I Learned

- Inline Markdown code blocks are defined by single backticks.
- Regular expressions are very effective for small, well-defined parsing rules.
- Non-greedy matching (.*?) is important when parsing repeated patterns.
- re.sub with a lambda is a clean way to transform matched content.
- Not every parsing problem needs a full parser, sometimes regex is exactly right.
- It’s okay (and good) to not over-handle edge cases when the problem doesn’t ask for them.
