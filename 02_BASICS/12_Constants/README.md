# 12 – Constants

## Overview

Constants are fixed values in C that do not change during program execution.

## Why This Topic Matters

Using constants improves readability, maintainability, and prevents accidental modification of values that should remain fixed.

## Learning Objectives

- Explain the key concepts behind Constants.
- Write C code that uses Constants correctly.
- Recognize how Constants fits into larger C programs and system design.

## Theory

Beginner: Constants are values like 42 or 'A' that a program uses directly. C has literal constants and symbolic constants created with #define or const.

Intermediate: Learn the difference between preprocessor constants and typed const variables. Use const for safer code and #define for macro-style values.

Advanced: Understand how constants interact with memory, type safety, and compiler optimizations.

## Internal Working

At the compiler level, Constants is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Constants often maps to register operations, branch logic, or system calls.

## Syntax

Examples: const int MAX = 100; #define BUFFER_SIZE 256

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Constants example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Constants example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Constants example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Constants example output\n");
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

- Modifying a const variable.
- Using macros without parentheses in expressions.
- Mixing string literals with mutable char arrays incorrectly.

## Best Practices

- Prefer typed const variables over raw macros when possible.
- Use meaningful names for constant values.
- Avoid hard-coded literals scattered through code.

## Interview Questions

### Beginner

- What is a constant in C?
- How do you define a constant?

### Intermediate

- What is the difference between const and #define?
- Why use constants in C programs?

### Advanced

- How does the compiler optimize constant expressions?
- When should you use an enum for constants?

## Exercises

Easy

- Define a constant and use it in a calculation.

Medium

- Use const variables and macros for configuration values in a program.

Hard

- Discuss the pros and cons of const versus #define in a sample program.

Interview

- Explain how constants improve code quality.

## Assignment

Create a C program that uses constants for configuration values and prints results using those constants.

## Mini Project

Build a settings module that uses defined constants and const variables for program parameters.

## Summary Notes

- Constants represent fixed values.
- Prefer meaningful symbolic constants for maintainable code.
- Use const and macros carefully for readability and safety.

## Next Topic

[Next Topic](02_BASICS/13_Data_Types/README.md)
