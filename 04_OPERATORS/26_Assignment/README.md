# 26 – Assignment

## Overview

Assignment operators store values in variables and allow compound updates like += and -=.

## Why This Topic Matters

Assignment is how programs modify state, so understanding it is essential for nearly every C program.

## Learning Objectives

- Explain the key concepts behind Assignment.
- Write C code that uses Assignment correctly.
- Recognize how Assignment fits into larger C programs and system design.

## Theory

Beginner: The = operator assigns a value to a variable. Compound forms like +=, -=, *=, and /= update a variable in place.

Intermediate: Learn the difference between assignment and comparison, and how compound assignment combines operations with assignment.

Advanced: Understand how assignment expressions evaluate to the assigned value and how this can be used in larger expressions.

## Internal Working

At the compiler level, Assignment is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Assignment often maps to register operations, branch logic, or system calls.

## Syntax

Example: count += 1; value = total / n;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Assignment example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Assignment example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Assignment example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Assignment example output\n");
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

- Using = instead of == in comparisons.
- Forgetting that assignment returns a value in expressions.
- Overusing compound assignment in unclear code.

## Best Practices

- Use assignment clearly and avoid complex expression chains.
- Keep assignment separate from comparison when possible.
- Use compound operators to express updates concisely when it remains readable.

## Interview Questions

### Beginner

- What is the assignment operator in C?
- How do you increase a variable by one?

### Intermediate

- What is the difference between = and ==?
- How does += work?

### Advanced

- How does assignment in expressions evaluate?
- When should you avoid using assignment inside conditions?

## Exercises

Easy

- Assign values to variables and print them.

Medium

- Use compound assignment to update a value in a loop.

Hard

- Refactor code to use assignment more clearly and efficiently.

Interview

- Explain why = and == are not the same.

## Assignment

Write a C program that uses assignment and compound operators to update counters and totals.

## Mini Project

Create a score-tracking utility that updates values using assignment operators.

## Summary Notes

- Assignment stores values in variables.
- Compound assignment combines update and assignment.
- Keep assignments clear to avoid confusing expressions.

## Next Topic

[Next Topic](04_OPERATORS/27_Increment_Decrement/README.md)
