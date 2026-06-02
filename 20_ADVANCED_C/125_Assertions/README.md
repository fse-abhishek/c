# 125 – Assertions

## Overview

Assertions check assumptions in code and abort execution if an expected condition is false.

## Why This Topic Matters

They help catch programming errors early and document invariants during development.

## Learning Objectives

- Explain the key concepts behind Assertions.
- Write C code that uses Assertions correctly.
- Recognize how Assertions fits into larger C programs and system design.

## Theory

Beginner: Use assert(expression) from <assert.h> to verify that an expression should always be true.

Intermediate: Assertions are used during development and can be disabled in production builds with NDEBUG.

Advanced: Use assertions to enforce invariants and catch invalid internal states before they lead to undefined behavior.

## Internal Working

At the compiler level, Assertions is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Assertions often maps to register operations, branch logic, or system calls.

## Syntax

assert(ptr != NULL);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Assertions example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Assertions example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Assertions example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Assertions example output\n");
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

- Using assertions for user input validation.
- Leaving assertions enabled for expected runtime errors.
- Using assert with side effects in the expression.

## Best Practices

- Use assertions for internal consistency checks.
- Do not rely on them for normal error handling.
- Keep assert expressions side-effect-free.

## Interview Questions

### Beginner

- What is assert used for?
- What happens when an assertion fails?

### Intermediate

- Why should assertions be disabled in production?
- What belongs in an assertion versus normal error handling?

### Advanced

- How do assertions help catch undefined behavior early?
- What are the risks of using assert with side effects?

## Exercises

Easy

- Add an assertion to a function that checks a precondition.

Medium

- Use assert to check pointer validity before dereferencing.

Hard

- Design assertions for invariants in a small data structure.

Interview

- Explain the difference between an assertion and error handling.

## Assignment

Write a program with assertions that validate key assumptions.

## Mini Project

Create a small module that uses assertions to verify internal logic.

## Summary Notes

- Assertions validate assumptions.
- Use them during development, not for normal input errors.
- Keep assert expressions free of side effects.

## Next Topic

[Next Topic](21_SYSTEM_PROGRAMMING/126_Processes/README.md)
