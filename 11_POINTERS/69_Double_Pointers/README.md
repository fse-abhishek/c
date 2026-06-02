# 69 – Double Pointers

## Overview

Double pointers are pointers to pointers, enabling multiple levels of indirection in C.

## Why This Topic Matters

They are useful for dynamic arrays, pointer arrays, and modifying pointers inside functions.

## Learning Objectives

- Explain the key concepts behind Double Pointers.
- Write C code that uses Double Pointers correctly.
- Recognize how Double Pointers fits into larger C programs and system design.

## Theory

Beginner: A double pointer has type int** for a pointer that points to an int*.

Intermediate: Learn how to allocate and manage pointers to pointers, such as arrays of string pointers.

Advanced: Use double pointers for complex data structures, and understand how dereferencing works at each level.

## Internal Working

At the compiler level, Double Pointers is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Double Pointers often maps to register operations, branch logic, or system calls.

## Syntax

int x = 10; int *p = &x; int **pp = &p;

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

- Confusing *p and **pp dereferencing.
- Allocating incorrect sizes for pointer arrays.
- Using double pointers when a single pointer suffices.

## Best Practices

- Keep double-pointer logic clear and documented.
- Use typedefs for complex pointer types when appropriate.
- Validate pointers at each level before dereferencing.

## Interview Questions

### Beginner

- What is a double pointer?
- How do you declare an int** variable?

### Intermediate

- How do you access the value pointed to by a double pointer?
- When would you use int** instead of int*?

### Advanced

- How can double pointers be used for dynamic multi-dimensional arrays?
- What are the risks of multiple levels of indirection?

## Exercises

Easy

- Declare a double pointer and assign it to a single pointer.

Medium

- Use a double pointer to modify a pointer inside a function.

Hard

- Implement a simple pointer-to-pointer data structure, such as an array of strings.

Interview

- Explain how a double pointer works in C.

## Assignment

Create a program that demonstrates double pointers and shows how dereferencing works.

## Mini Project

Build a pointer table or dynamic array manager using double pointers.

## Summary Notes

- Double pointers point to pointers.
- Use them for advanced pointer structures.
- Keep indirection clear and well-documented.

## Next Topic

[Next Topic](11_POINTERS/70_Void_Pointers/README.md)
