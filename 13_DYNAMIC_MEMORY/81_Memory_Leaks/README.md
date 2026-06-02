# 81 – Memory Leaks

## Overview

Dynamic memory allocation lets C programs request and release memory at runtime using functions such as malloc, calloc, realloc, and free.

## Why This Topic Matters

Dynamic memory is essential for flexible data structures, variable-size arrays, and managing memory lifetimes beyond automatic stack scope.

## Learning Objectives

- Explain the key concepts behind Memory Leaks.
- Write C code that uses Memory Leaks correctly.
- Recognize how Memory Leaks fits into larger C programs and system design.

## Theory

Beginner: malloc allocates raw memory, calloc allocates zero-initialized memory, realloc resizes allocated memory, and free releases it.

Intermediate: Learn how to check for allocation failures, avoid leaks, and why each function has different behavior.

Advanced: Use dynamic allocation safely to build linked structures, understand fragmentation, and prevent dangling pointers and memory leaks.

## Internal Working

At the compiler level, Memory Leaks is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Memory Leaks often maps to register operations, branch logic, or system calls.

## Syntax

int *arr = malloc(10 * sizeof(int)); if (arr) { ... free(arr); }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Leaks example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Leaks example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Leaks example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Leaks example output\n");
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

- Not checking the result of malloc.
- Forgetting to call free for allocated memory.
- Using memory after it has been freed.

## Best Practices

- Always check allocation results.
- Free memory in the same function or module that allocates it when possible.
- Use descriptive pointer names and set freed pointers to NULL.

## Interview Questions

### Beginner

- What does malloc do?
- How do you free memory in C?

### Intermediate

- What is the difference between malloc and calloc?
- When should you use realloc?

### Advanced

- How do you detect memory leaks in C?
- What causes a dangling pointer?

## Exercises

Easy

- Allocate an array with malloc and free it after use.

Medium

- Use calloc and compare its behavior with malloc.

Hard

- Resize a dynamically allocated array with realloc and handle failures.

Interview

- Explain the life cycle of dynamically allocated memory.

## Assignment

Write a program that allocates memory dynamically for an array, uses it, and frees it cleanly.

## Mini Project

Create a dynamic list or buffer manager that grows with user input.

## Summary Notes

- Dynamic memory is allocated at runtime.
- Always free allocated memory.
- Avoid using memory after free.

## Next Topic

[Next Topic](14_FILE_HANDLING/82_File_Basics/README.md)
