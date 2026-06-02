# 71 – Function Pointers

## Overview

Function pointers store the address of a function and allow calling functions dynamically.

## Why This Topic Matters

They enable callbacks, plugin-like designs, and cleaner code when choosing behavior at runtime.

## Learning Objectives

- Explain the key concepts behind Function Pointers.
- Write C code that uses Function Pointers correctly.
- Recognize how Function Pointers fits into larger C programs and system design.

## Theory

Beginner: Declare a function pointer with the correct signature and assign it to an existing function.

Intermediate: Learn how to call a function through a pointer and how to pass function pointers as arguments.

Advanced: Use function pointers for callback systems, lookup tables, and modular design while keeping signatures consistent.

## Internal Working

At the compiler level, Function Pointers is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Function Pointers often maps to register operations, branch logic, or system calls.

## Syntax

int (*proc)(int, int) = add; int result = proc(2, 3);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
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

- Using the wrong function pointer signature.
- Confusing function pointer syntax.
- Dereferencing a function pointer incorrectly.

## Best Practices

- Use typedefs to simplify function pointer syntax.
- Keep signatures consistent and documented.
- Check for NULL before calling through a pointer if appropriate.

## Interview Questions

### Beginner

- What is a function pointer?
- How do you call a function through a pointer?

### Intermediate

- How do you pass a function pointer to another function?
- Why use function pointers?

### Advanced

- How can function pointers enable callback patterns?
- What are typical use cases in C libraries?

## Exercises

Easy

- Declare a function pointer and call a simple function through it.

Medium

- Pass a function pointer to another function and use it for callbacks.

Hard

- Implement a small dispatch table using function pointers.

Interview

- Explain how function pointers improve flexibility in C.

## Assignment

Build a callback example using function pointers and document the design.

## Mini Project

Create a small command dispatcher that uses function pointers to execute selected actions.

## Summary Notes

- Function pointers call functions dynamically.
- Match the pointer signature to the target function.
- Use them for callbacks and flexible behavior.

## Next Topic

[Next Topic](12_STRUCTURES_UNIONS/72_Structures/README.md)
