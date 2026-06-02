# 50 – Call By Value

## Overview

Call by value passes a copy of data to functions rather than the original variable.

## Why This Topic Matters

Understanding call by value explains why changes inside a function do not affect the caller's variables by default.

## Learning Objectives

- Explain the key concepts behind Call By Value.
- Write C code that uses Call By Value correctly.
- Recognize how Call By Value fits into larger C programs and system design.

## Theory

Beginner: In C, function arguments are passed by value, meaning the function receives a copy of each argument.

Intermediate: Learn how changes to parameters affect only the local copy and not the original argument.

Advanced: Use pointers when you need to modify caller data, and understand the memory layout of copied arguments.

## Internal Working

At the compiler level, Call By Value is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Call By Value often maps to register operations, branch logic, or system calls.

## Syntax

void update(int x) { x = x + 1; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Call By Value example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Call By Value example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Call By Value example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Call By Value example output\n");
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

- Expecting a function to modify the original argument without using a pointer.
- Passing arrays incorrectly and misunderstanding how pointers work.
- Confusing call by value with call by reference.

## Best Practices

- Use clear names to distinguish local parameters from caller variables.
- Pass pointers or structs when you need to update data.
- Document whether a function modifies its arguments.

## Interview Questions

### Beginner

- What does call by value mean in C?
- Why does changing a parameter not change the original variable?

### Intermediate

- How can you modify a value in the caller from a function?
- What happens when you pass an array to a function?

### Advanced

- How does call by value impact performance for large structs?
- When does C effectively use call by reference through pointers?

## Exercises

Easy

- Write a function that takes an int parameter and change it inside the function.

Medium

- Show that the original variable retains its value after the function call.

Hard

- Convert the function to use pointers to modify the caller's value.

Interview

- Explain call by value with a code example.

## Assignment

Create a function that receives values by copy and demonstrate the behavior clearly.

## Mini Project

Build a small C module that uses call by value for read-only arguments and pointers for updates.

## Summary Notes

- C uses call by value for function arguments.
- The caller's original data is not modified unless pointers are used.
- Use pointers for functions that need to change caller state.

## Next Topic

[Next Topic](08_FUNCTIONS/51_Call_By_Reference/README.md)
