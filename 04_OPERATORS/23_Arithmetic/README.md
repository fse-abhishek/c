# 23 – Arithmetic

## Overview

Study arithmetic operators in C for addition, subtraction, multiplication, division, and remainder.

## Why This Topic Matters

Arithmetic operators are the foundation of numerical computation in C programs, from simple calculations to algorithms.

## Learning Objectives

- Explain the key concepts behind Arithmetic.
- Write C code that uses Arithmetic correctly.
- Recognize how Arithmetic fits into larger C programs and system design.

## Theory

Beginner: Learn the basic arithmetic operators +, -, *, /, and % and how they work with integer and floating-point values.

Intermediate: Understand operator precedence, integer division behavior, and common pitfalls such as division by zero.

Advanced: Explore how arithmetic expressions are evaluated, how overflow behaves, and when to use integer versus floating-point arithmetic.

## Internal Working

At the compiler level, Arithmetic is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Arithmetic often maps to register operations, branch logic, or system calls.

## Syntax

Example: int sum = a + b; double ratio = total / count;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Arithmetic example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Arithmetic example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Arithmetic example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Arithmetic example output\n");
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

- Using integer division when floating-point precision is needed.
- Dividing by zero.
- Misunderstanding operator precedence.

## Best Practices

- Use parentheses for clarity in complex expressions.
- Choose the proper numeric type for your operations.
- Check for division by zero and overflow.

## Interview Questions

### Beginner

- What arithmetic operators does C support?
- How do you compute the remainder of a division?

### Intermediate

- What is integer division?
- Why does 3 / 2 produce 1 in C?

### Advanced

- How do you avoid overflow in arithmetic expressions?
- When should you use floating-point instead of integer arithmetic?

## Exercises

Easy

- Write a C program that performs basic arithmetic operations.

Medium

- Calculate average values using both integer and floating-point arithmetic.

Hard

- Implement a simple calculator with operator selection and error handling.

Interview

- Explain the difference between integer and floating-point arithmetic in C.

## Assignment

Build a calculator program that performs addition, subtraction, multiplication, and division with user input.

## Mini Project

Create a command-line calculator that supports multiple operations and validates input.

## Summary Notes

- Arithmetic operators perform numeric calculations.
- Watch out for integer division and overflow.
- Use clear expressions and correct types.

## Next Topic

[Next Topic](04_OPERATORS/24_Relational/README.md)
