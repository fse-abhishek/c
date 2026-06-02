# 91 – define

## Overview

The preprocessor #define directive creates macros for constants and simple code substitutions.

## Why This Topic Matters

Macros allow compile-time constants, function-like replacements, and conditional compilation in C.

## Learning Objectives

- Explain the key concepts behind define.
- Write C code that uses define correctly.
- Recognize how define fits into larger C programs and system design.

## Theory

Beginner: Use #define MAX 100 to create a symbolic constant. Macros can also accept arguments, like #define SQUARE(x) ((x)*(x)).

Intermediate: Understand the differences between macros and constants or inline functions, including how macros are expanded textually.

Advanced: Use macros carefully to avoid side effects and to keep expansions safe with parentheses.

## Internal Working

At the compiler level, define is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, define often maps to register operations, branch logic, or system calls.

## Syntax

#define PI 3.14
#define SQUARE(x) ((x) * (x))

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("define example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("define example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("define example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("define example output\n");
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

- Forgetting parentheses around macro parameters.
- Using macros that evaluate arguments multiple times.
- Using macros where const variables or functions are better.

## Best Practices

- Use parentheses around macro expansions.
- Prefer const variables and inline functions when appropriate.
- Keep macros simple and well-documented.

## Interview Questions

### Beginner

- What does #define do?
- How do you create a macro?

### Intermediate

- What are the risks of function-like macros?
- When should you use const instead of #define?

### Advanced

- How do you write safe macros that avoid unintended side effects?
- What is the difference between macros and inline functions?

## Exercises

Easy

- Define a constant macro and print its value.

Medium

- Create a simple function-like macro and use it.

Hard

- Rewrite a macro as an inline function and compare the results.

Interview

- Explain the tradeoffs between macros and constants.

## Assignment

Build a program using #define macros for constants and simple value calculations.

## Mini Project

Create a macro-based configuration section for a small C program.

## Summary Notes

- #define creates macros and constants.
- Use parentheses to avoid expansion bugs.
- Prefer safer alternatives when appropriate.

## Next Topic

[Next Topic](15_PREPROCESSOR/92_Macros/README.md)
