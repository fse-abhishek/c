# 57 – Searching

## Overview

Searching algorithms scan arrays to find values or determine if a value exists.

## Why This Topic Matters

Searching is a common operation in programs, and efficient search improves performance on large datasets.

## Learning Objectives

- Explain the key concepts behind Searching.
- Write C code that uses Searching correctly.
- Recognize how Searching fits into larger C programs and system design.

## Theory

Beginner: Linear search checks each array element until a match is found. It is simple and works on unsorted arrays.

Intermediate: Learn when binary search is faster for sorted arrays and how it reduces comparisons.

Advanced: Choose the right search algorithm for the problem, considering array organization, cost, and code clarity.

## Internal Working

At the compiler level, Searching is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Searching often maps to register operations, branch logic, or system calls.

## Syntax

for (int i = 0; i < n; i++) { if (arr[i] == target) return i; }

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

- Searching an unsorted array with binary search.
- Using wrong loop boundaries.
- Not handling the case when the value is not found.

## Best Practices

- Use linear search for small or unsorted data.
- Use binary search only on sorted arrays.
- Handle the not-found case explicitly.

## Interview Questions

### Beginner

- What is linear search?
- How do you search an array for a value?

### Intermediate

- What is binary search and when can it be used?
- How does array sorting affect search choice?

### Advanced

- What are the time complexities of linear and binary search?
- How would you search a custom data structure efficiently?

## Exercises

Easy

- Implement a linear search function for an array.

Medium

- Search an array for a target value and report its index.

Hard

- Implement binary search on a sorted array and compare it to linear search.

Interview

- Discuss the benefits of binary search over linear search.

## Assignment

Build a search utility that finds values in an array and reports success or failure.

## Mini Project

Create a small search benchmark comparing linear and binary search on sample data.

## Summary Notes

- Searching finds values in arrays.
- Use the right algorithm for the data organization.
- Binary search is faster on sorted arrays.

## Next Topic

[Next Topic](09_ARRAYS/58_Sorting/README.md)
