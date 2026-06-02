# 121 – Memory Layout

## Overview

Memory layout explains how a C program's memory is organized into sections like text, data, heap, and stack.

## Why This Topic Matters

Understanding memory layout helps diagnose bugs, optimize performance, and reason about pointers and storage duration.

## Learning Objectives

- Explain the key concepts behind Memory Layout.
- Write C code that uses Memory Layout correctly.
- Recognize how Memory Layout fits into larger C programs and system design.

## Theory

Beginner: C programs typically have a text segment for code, a data segment for globals, a heap for dynamic allocations, and a stack for local variables.

Intermediate: Learn how static and dynamic memory are allocated, and how the stack grows during function calls.

Advanced: Use memory layout knowledge to avoid stack overflow, manage heap allocation, and understand pointer behavior.

## Internal Working

At the compiler level, Memory Layout is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Memory Layout often maps to register operations, branch logic, or system calls.

## Syntax

There is no syntax, but visualize segments and how variables are placed in memory.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Layout example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Layout example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Layout example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Memory Layout example output\n");
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

- Assuming all memory is laid out the same on every platform.
- Confusing stack and heap allocation.
- Using pointers without understanding where the data lives.

## Best Practices

- Keep stack-allocated objects small.
- Free heap memory when it is no longer needed.
- Use static storage only for data that must persist.

## Interview Questions

### Beginner

- What are the main memory regions of a C program?
- Where are local variables stored?

### Intermediate

- What is the difference between heap and stack?
- Where do global variables live?

### Advanced

- How can memory layout affect program behavior?
- Why can heap fragmentation occur?

## Exercises

Easy

- Describe the four main memory regions of a C program.

Medium

- Identify where a local array and malloced array are stored.

Hard

- Explain what happens to variables when a function returns.

Interview

- Describe the stack, heap, data, and text segments.

## Assignment

Write a document or comment-rich program explaining where each variable is stored in memory.

## Mini Project

Create a memory layout diagram and sample code demonstrating each region.

## Summary Notes

- Programs have text, data, heap, and stack segments.
- Local variables are on the stack.
- Dynamic allocations come from the heap.

## Next Topic

[Next Topic](20_ADVANCED_C/122_Dangling_Pointers/README.md)
