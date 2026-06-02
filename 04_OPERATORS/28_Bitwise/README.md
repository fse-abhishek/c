# 28 – Bitwise

## Overview

Bitwise operators manipulate individual bits in integer values, enabling low-level control in C.

## Why This Topic Matters

Bitwise operations are essential for embedded programming, flags, masks, and performance-critical code.

## Learning Objectives

- Explain the key concepts behind Bitwise.
- Write C code that uses Bitwise correctly.
- Recognize how Bitwise fits into larger C programs and system design.

## Theory

Beginner: Learn bitwise AND (&), OR (|), XOR (^), NOT (~), and shifts (<<, >>). These operate on binary representations of integers.

Intermediate: Use bitwise operators for masking, setting, clearing, and testing bits. Understand signed versus unsigned shift behavior.

Advanced: Apply bitwise operations in optimized algorithms, device drivers, and compact data structures while avoiding undefined behavior.

## Internal Working

At the compiler level, Bitwise is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Bitwise often maps to register operations, branch logic, or system calls.

## Syntax

Example: flags |= 0x01; value &= ~0x04;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Bitwise example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Bitwise example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Bitwise example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Bitwise example output\n");
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

- Using >> on signed negative values.
- Confusing logical and bitwise operators.
- Forgetting to cast or use unsigned values for shifts.

## Best Practices

- Prefer unsigned types for bitwise operations.
- Use named constants for bit masks.
- Document bit-field layouts and assumptions.

## Interview Questions

### Beginner

- What does & do between two integers?
- What is the result of 1 << 3?

### Intermediate

- How do you test a bit in a value?
- What is the difference between logical and bitwise operators?

### Advanced

- Why should you use unsigned when shifting bits?
- How do you clear a specific bit using a mask?

## Exercises

Easy

- Use bitwise AND, OR, and XOR on simple integers.

Medium

- Create and test bit masks for specific bits.

Hard

- Implement a flags system using bitwise operations.

Interview

- Explain how bitwise operations differ from arithmetic operations.

## Assignment

Write a C program that manipulates bit flags for permissions or settings.

## Mini Project

Create a small bitmask-based configuration manager or status word handler.

## Summary Notes

- Bitwise operators work on individual bits.
- Use unsigned types and masks clearly.
- Bitwise logic is powerful for low-level programming.

## Next Topic

[Next Topic](04_OPERATORS/29_Conditional/README.md)
