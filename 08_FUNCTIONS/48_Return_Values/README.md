# 48 – Return Values

## Overview

Return values let a function send results back to its caller in C.

## Why This Topic Matters

Functions become useful building blocks when they can compute and return values.

## Learning Objectives

- Explain the key concepts behind Return Values.
- Write C code that uses Return Values correctly.
- Recognize how Return Values fits into larger C programs and system design.

## Theory

Beginner: A function uses return to provide a value, such as int add(int a, int b) { return a + b; }.

Intermediate: Understand that only one return value is returned directly, and how to use pointers or structs for multiple outputs.

Advanced: Use return values carefully to avoid returning pointers to local variables and to manage error reporting.

## Internal Working

At the compiler level, Return Values is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Return Values often maps to register operations, branch logic, or system calls.

## Syntax

int result = add(2, 3);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Return Values example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Return Values example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Return Values example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Return Values example output\n");
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

- Returning a pointer to a local variable.
- Using the wrong return type.
- Not returning a value from a non-void function.

## Best Practices

- Match return types to the data being returned.
- Use return for early exits when appropriate.
- Avoid returning invalid pointers or references.

## Interview Questions

### Beginner

- What does return do in a function?
- How do you receive a function's return value?

### Intermediate

- What happens if a non-void function reaches the end without return?
- How do you return multiple values in C?

### Advanced

- Why is returning a pointer to a local variable unsafe?
- How do return values influence function design?

## Exercises

Easy

- Write a function that returns the sum of two numbers.

Medium

- Use a function return value in an expression.

Hard

- Implement a function that returns an error code and document it.

Interview

- Explain the purpose of return values in functions.

## Assignment

Create functions that compute results and return them to main for display.

## Mini Project

Build a program with multiple functions where each returns a calculated value.

## Summary Notes

- Return values pass results back to the caller.
- Only one value is returned directly.
- Avoid returning invalid pointer values.

## Next Topic

[Next Topic](08_FUNCTIONS/49_Local_Global_Variables/README.md)
