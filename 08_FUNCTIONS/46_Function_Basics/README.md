# 46 – Function Basics

## Overview

Functions let you encapsulate reusable blocks of code with a name and parameters.

## Why This Topic Matters

Functions improve modularity, readability, and reuse in C programs. They are the building blocks of structured code.

## Learning Objectives

- Explain the key concepts behind Function Basics.
- Write C code that uses Function Basics correctly.
- Recognize how Function Basics fits into larger C programs and system design.

## Theory

Beginner: A function is declared with a return type, name, and parameter list. The main function can call other functions to perform work.

Intermediate: Learn about function prototypes, parameter passing, and how functions separate logic from implementation.

Advanced: Explore how functions affect program structure, maintainability, and how they interact with the call stack and memory.

## Internal Working

At the compiler level, Function Basics is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Function Basics often maps to register operations, branch logic, or system calls.

## Syntax

int add(int a, int b) { return a + b; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Function Basics example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Function Basics example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Function Basics example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Function Basics example output\n");
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

- Forgetting to declare a function prototype before use.
- Using the wrong return type.
- Mixing up parameter order or types.

## Best Practices

- Keep functions small and focused.
- Use clear names and parameter lists.
- Document function behavior and return values.

## Interview Questions

### Beginner

- What is a function in C?
- How do you call a function?

### Intermediate

- Why use function prototypes?
- What is the difference between declaration and definition?

### Advanced

- How do functions affect the call stack?
- What makes a function reusable and testable?

## Exercises

Easy

- Write a function that returns the sum of two numbers.

Medium

- Call a helper function from main with different inputs.

Hard

- Refactor a repeating code block into a reusable function.

Interview

- Explain why functions are useful for structuring C programs.

## Assignment

Implement several small functions for arithmetic and call them from main.

## Mini Project

Build a small program that uses functions for separate tasks like input, processing, and output.

## Summary Notes

- Functions encapsulate logic.
- Use them to make code modular and reusable.
- Declare prototypes when functions are used before their definitions.

## Next Topic

[Next Topic](08_FUNCTIONS/47_Function_Arguments/README.md)
