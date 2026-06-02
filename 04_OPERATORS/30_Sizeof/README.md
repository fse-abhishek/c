# 30 – Sizeof

## Overview

The sizeof operator reports the size of a type or object in bytes at compile time.

## Why This Topic Matters

Knowing object sizes is important for memory allocation, portability, and understanding how data layouts vary across platforms.

## Learning Objectives

- Explain the key concepts behind Sizeof.
- Write C code that uses Sizeof correctly.
- Recognize how Sizeof fits into larger C programs and system design.

## Theory

Beginner: sizeof returns the number of bytes required to store a type or variable. For example, sizeof(int) may be 4 on many systems.

Intermediate: Learn how sizeof behaves with arrays, pointers, and structures, and how it is evaluated at compile time.

Advanced: Use sizeof in portable code, especially when allocating memory or handling binary data. Understand how padding affects structure sizes.

## Internal Working

At the compiler level, Sizeof is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Sizeof often maps to register operations, branch logic, or system calls.

## Syntax

Example: size_t bytes = sizeof(int);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Sizeof example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Sizeof example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Sizeof example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Sizeof example output\n");
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

- Using sizeof on a pointer when you intended the pointed-to array.
- Assuming type sizes are fixed across all platforms.
- Using sizeof(char *) instead of sizeof(char) * length.

## Best Practices

- Use sizeof(variable) instead of sizeof(type) when possible.
- Use size_t for size-related values.
- Be aware of padding in structures.

## Interview Questions

### Beginner

- What does sizeof return?
- How do you use sizeof with an array?

### Intermediate

- Why is sizeof useful for malloc?
- How does sizeof differ for pointers and arrays?

### Advanced

- How does structure padding affect sizeof results?
- Why is sizeof evaluated at compile time?

## Exercises

Easy

- Print the size of common types like int, char, and double.

Medium

- Use sizeof to allocate memory for an array dynamically.

Hard

- Investigate the size of a struct with different member layouts.

Interview

- Explain why sizeof is important for portable memory management.

## Assignment

Create a C program that reports sizes of types and demonstrates sizeof with arrays and pointers.

## Mini Project

Build a utility that prints structure layouts and storage sizes for diagnostic purposes.

## Summary Notes

- sizeof reports memory size in bytes.
- Use it for allocation and portability.
- Be careful with pointers versus arrays.

## Next Topic

[Next Topic](05_CONDITIONAL_STATEMENTS/31_if/README.md)
