# 55 – 2D Array

## Overview

Study two-dimensional arrays for representing tables and matrices in C.

## Why This Topic Matters

2D arrays are useful for grids, matrix math, and structured data with rows and columns.

## Learning Objectives

- Explain the key concepts behind 2D Array.
- Write C code that uses 2D Array correctly.
- Recognize how 2D Array fits into larger C programs and system design.

## Theory

Beginner: A 2D array is an array of arrays. Access elements with arr[row][col].

Intermediate: Understand memory layout for 2D arrays and how nested loops iterate rows and columns.

Advanced: Use 2D arrays for matrix operations, and be mindful of row-major order and pointer compatibility.

## Internal Working

At the compiler level, 2D Array is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, 2D Array often maps to register operations, branch logic, or system calls.

## Syntax

int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};

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

- Mixing up row and column indexes.
- Assuming a 2D array is a true dynamically resizable matrix.
- Using wrong bounds in nested loops.

## Best Practices

- Use constants for row and column sizes.
- Keep loops simple and well-nested.
- Document the meaning of each dimension.

## Interview Questions

### Beginner

- How do you declare a 2D array?
- How do you access element [1][2]?

### Intermediate

- What is row-major order?
- How do you loop through a 2D array?

### Advanced

- How can you pass a 2D array to a function?
- What are the limits of static 2D arrays in C?

## Exercises

Easy

- Declare and initialize a 2D array and print its values.

Medium

- Use nested loops to compute row or column sums.

Hard

- Implement matrix addition or transpose using a 2D array.

Interview

- Describe how a 2D array is stored in memory.

## Assignment

Create a program that processes a 2D array of numbers and prints results.

## Mini Project

Build a matrix utility that adds, multiplies, or transposes 2D arrays.

## Summary Notes

- 2D arrays represent row/column data.
- Use nested loops to access elements.
- Be aware of row-major order.

## Next Topic

[Next Topic](09_ARRAYS/56_Multidimensional_Array/README.md)
