# 54 – 1D Array

## Overview

Learn one-dimensional arrays for storing sequences of values in C.

## Why This Topic Matters

Arrays are the simplest way to store and access multiple values in a single variable.

## Learning Objectives

- Explain the key concepts behind 1D Array.
- Write C code that uses 1D Array correctly.
- Recognize how 1D Array fits into larger C programs and system design.

## Theory

Beginner: A 1D array stores values in contiguous memory. Access elements with index notation like arr[0].

Intermediate: Understand how arrays and pointers are related, and how to iterate over elements with loops.

Advanced: Use arrays efficiently, avoid out-of-bounds access, and prefer size constants or macros for maintainability.

## Internal Working

At the compiler level, 1D Array is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, 1D Array often maps to register operations, branch logic, or system calls.

## Syntax

int arr[5] = {1, 2, 3, 4, 5};

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    int arr[] = {3, 1, 2};
    printf("First element: %d\n", arr[0]);
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    int arr[] = {3, 1, 2};
    printf("First element: %d\n", arr[0]);
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    int arr[] = {3, 1, 2};
    printf("First element: %d\n", arr[0]);
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    int arr[] = {3, 1, 2};
    printf("First element: %d\n", arr[0]);
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

- Accessing arr[5] in a five-element array.
- Forgetting array bounds when looping.
- Treating arrays like dynamically resizable containers.

## Best Practices

- Use named constants for array sizes.
- Initialize arrays when possible.
- Use loops to process array elements safely.

## Interview Questions

### Beginner

- What is a one-dimensional array?
- How do you access an array element?

### Intermediate

- How are arrays stored in memory?
- What happens when you go out of bounds?

### Advanced

- How does array decay to a pointer in function calls?
- Why are arrays not bounds-checked in C?

## Exercises

Easy

- Declare a 1D array and print its elements.

Medium

- Use a loop to sum array values.

Hard

- Implement a function that finds the maximum value in an array.

Interview

- Explain the relationship between arrays and pointers.

## Assignment

Write a program that reads values into an array and computes summary statistics.

## Mini Project

Build a small array-based utility such as average, min/max, or search.

## Summary Notes

- 1D arrays store values contiguously.
- Use loops to access array elements.
- Avoid out-of-bounds access.

## Next Topic

[Next Topic](09_ARRAYS/55_2D_Array/README.md)
