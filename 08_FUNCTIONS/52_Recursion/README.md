# 52 – Recursion

## Overview

Recursion is when a function calls itself to solve a problem by breaking it into smaller parts.

## Why This Topic Matters

Recursion is a powerful technique for solving problems with repetitive structure, such as factorials, Fibonacci, and tree traversal.

## Learning Objectives

- Explain the key concepts behind Recursion.
- Write C code that uses Recursion correctly.
- Recognize how Recursion fits into larger C programs and system design.

## Theory

Beginner: A recursive function has a base case and a recursive step that calls itself with smaller or simpler input.

Intermediate: Understand how recursion uses the call stack and why base cases are required to stop the recursion.

Advanced: Learn how recursion can be converted to iteration, and how to manage stack depth and performance in recursive algorithms.

## Internal Working

At the compiler level, Recursion is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Recursion often maps to register operations, branch logic, or system calls.

## Syntax

int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Recursion example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Recursion example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Recursion example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Recursion example output\n");
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

- Omitting a base case and causing infinite recursion.
- Using recursion for problems better solved with iteration.
- Ignoring stack overflow risks for deep recursion.

## Best Practices

- Define a clear base case first.
- Keep recursive functions simple and avoid excessive state.
- Use recursion when it makes the solution more readable.

## Interview Questions

### Beginner

- What is recursion?
- What is a base case?

### Intermediate

- How does recursion use the call stack?
- Why must a recursive function have a base case?

### Advanced

- When should you avoid recursion?
- How do you convert recursion into iteration?

## Exercises

Easy

- Write a recursive factorial function.

Medium

- Implement a recursive Fibonacci generator.

Hard

- Use recursion to traverse a simple tree or directory-like structure.

Interview

- Explain how recursion works and what happens on the stack.

## Assignment

Create a recursive function for a mathematical or structural problem and document the base case and recursive step.

## Mini Project

Build a small recursive algorithm, such as computing combinations or traversing nested data.

## Summary Notes

- Recursion solves problems by self-calling functions.
- Always include a base case.
- Be aware of stack limits and performance.

## Next Topic

[Next Topic](08_FUNCTIONS/53_Tail_Recursion/README.md)
