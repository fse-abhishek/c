# 47 – Function Arguments

## Overview

Function arguments are values passed into functions so they can operate on different data.

## Why This Topic Matters

Arguments make functions reusable and flexible instead of hard-coding values inside them.

## Learning Objectives

- Explain the key concepts behind Function Arguments.
- Write C code that uses Function Arguments correctly.
- Recognize how Function Arguments fits into larger C programs and system design.

## Theory

Beginner: Define a function with parameters and call it with arguments, such as int add(int a, int b).

Intermediate: Understand how arguments are matched to parameters by position and how passing by value works.

Advanced: Use arguments to write reusable functions and know how data is copied into parameter variables on the stack.

## Internal Working

At the compiler level, Function Arguments is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Function Arguments often maps to register operations, branch logic, or system calls.

## Syntax

int add(int a, int b) { return a + b; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Function Arguments example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Function Arguments example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Function Arguments example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Function Arguments example output\n");
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

- Passing arguments in the wrong order.
- Using incompatible types without casting.
- Expecting changes to the original variable when passing by value.

## Best Practices

- Use descriptive parameter names.
- Keep argument lists short and meaningful.
- Document expected argument types and behavior.

## Interview Questions

### Beginner

- What is a function argument?
- How do arguments relate to parameters?

### Intermediate

- How are arguments passed to functions in C?
- What happens when you pass an int argument?

### Advanced

- Why does C use pass-by-value for arguments?
- How can you modify caller data using function arguments?

## Exercises

Easy

- Write a function with two arguments and call it from main.

Medium

- Create a function that accepts multiple argument types.

Hard

- Design a function that uses arguments to configure its behavior.

Interview

- Explain how function arguments are passed in C.

## Assignment

Implement functions with arguments for different operations, and test them with sample inputs.

## Mini Project

Build a calculator program where each operation is a separate function with arguments.

## Summary Notes

- Function arguments provide inputs to functions.
- They are passed by value in C.
- Use clear parameter names and types.

## Next Topic

[Next Topic](08_FUNCTIONS/48_Return_Values/README.md)
