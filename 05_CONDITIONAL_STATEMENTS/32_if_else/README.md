# 32 – if else

## Overview

Learn if-else statements for binary decision-making in C.

## Why This Topic Matters

if-else allows your program to choose one of two paths based on a condition.

## Learning Objectives

- Explain the key concepts behind if else.
- Write C code that uses if else correctly.
- Recognize how if else fits into larger C programs and system design.

## Theory

Beginner: Use if(condition) { ... } else { ... } to handle both true and false cases. 

Intermediate: Learn how to structure if-else chains cleanly and how else is paired with the nearest unmatched if.

Advanced: Avoid long if-else chains by using functions, switch statements, or lookup tables when appropriate.

## Internal Working

At the compiler level, if else is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, if else often maps to register operations, branch logic, or system calls.

## Syntax

if (x > 0) { ... } else { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("if else example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("if else example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("if else example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("if else example output\n");
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

- Misplacing else with nested if blocks.
- Writing overly long else chains.
- Forgetting that else pairs with the nearest if.

## Best Practices

- Use if-else for clear two-way decisions.
- Keep each branch short and focused.
- Use comments when conditions are non-obvious.

## Interview Questions

### Beginner

- What is the purpose of else?
- How do if and else work together?

### Intermediate

- What is the dangling else problem?
- How can you avoid confusing if-else nesting?

### Advanced

- When should you replace if-else with switch or function pointers?
- How does else association work in C?

## Exercises

Easy

- Write a program that prints whether a number is even or odd using if-else.

Medium

- Use if-else to validate input and provide feedback.

Hard

- Refactor a nested if-else sequence into clearer code.

Interview

- Describe how if-else chooses between two alternatives.

## Assignment

Build a program that makes one decision with if-else and prints the result.

## Mini Project

Create a small survey tool that responds with different messages based on input.

## Summary Notes

- if-else chooses between two paths.
- Keep each branch readable.
- Be mindful of else association.

## Next Topic

[Next Topic](05_CONDITIONAL_STATEMENTS/33_else_if/README.md)
