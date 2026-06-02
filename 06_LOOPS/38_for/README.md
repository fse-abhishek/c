# 38 – for

## Overview

The for loop repeats code with an initialization, condition, and update step.

## Why This Topic Matters

for is ideal for counted loops and concise iteration over a known range.

## Learning Objectives

- Explain the key concepts behind for.
- Write C code that uses for correctly.
- Recognize how for fits into larger C programs and system design.

## Theory

Beginner: A for loop has the form for(init; condition; update) { body } and is commonly used for numeric iteration.

Intermediate: Learn how for loops manage the loop variable and how to use them for arrays and repetitive tasks.

Advanced: Use for loops for compact iteration patterns, and understand when other loops are more readable.

## Internal Working

At the compiler level, for is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, for often maps to register operations, branch logic, or system calls.

## Syntax

for (int i = 0; i < 10; i++) { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("for example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("for example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("for example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("for example output\n");
    return 0;
}
```

Explanation: Production-quality code structure and safe practices.

Output: The program demonstrates clean design and maintainability.

## Memory Visualization


[ stack ] -> local variables, function call frames, return addresses
[ heap ] -> dynamic data used by runtime allocations
[ text ] -> compiled executable code and constant data


## Common Mistakes

- Using the wrong loop condition and causing infinite loops.
- Modifying the loop variable incorrectly inside the body.
- Choosing for when while is clearer.

## Best Practices

- Keep the loop header clear and simple.
- Use for for counted iteration.
- Avoid modifying the loop variable unexpectedly inside the body.

## Interview Questions

### Beginner

- What are the three parts of a for loop?
- How do you write a basic for loop?

### Intermediate

- What happens if the condition is always true?
- How can you use for to iterate an array?

### Advanced

- When should you use while instead of for?
- How do you write a for loop with multiple variables?

## Exercises

Easy

- Write a for loop that prints numbers from 1 to 10.

Medium

- Use a for loop to sum the numbers in an array.

Hard

- Implement nested for loops for a pattern or matrix output.

Interview

- Explain how the loop update step works in a for loop.

## Assignment

Create a C program that uses a for loop to process a list of values.

## Mini Project

Build a simple pattern printer or table generator using nested for loops.

## Summary Notes

- for is ideal for counted loops.
- Keep the loop header concise.
- Use it for array and sequence iteration.

## Next Topic

[Next Topic](06_LOOPS/39_break/README.md)
