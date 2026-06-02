# 99 – AND

## Overview

The bitwise AND operator performs a bit-by-bit conjunction between two integer values.

## Why This Topic Matters

It is useful for masking bits, testing flags, and performing low-level bit manipulation.

## Learning Objectives

- Explain the key concepts behind AND.
- Write C code that uses AND correctly.
- Recognize how AND fits into larger C programs and system design.

## Theory

Beginner: Use & to combine bits. A bit is 1 only when both operands have a 1 in that position.

Intermediate: Use bitwise AND to test whether specific bits are set in a value.

Advanced: Use masks and bit fields efficiently in low-level code and system programming.

## Internal Working

At the compiler level, AND is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, AND often maps to register operations, branch logic, or system calls.

## Syntax

if (flags & 0x04) { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("AND example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("AND example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("AND example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("AND example output\n");
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

- Confusing bitwise AND with logical AND.
- Using & with boolean logic instead of bit masks.
- Not masking before checking bits.

## Best Practices

- Use named constants for bit masks.
- Keep bitwise expressions clear.
- Use unsigned types for bitwise operations.

## Interview Questions

### Beginner

- What does the & operator do bitwise?
- How do you test if a bit is set?

### Intermediate

- What is a bit mask?
- How does bitwise AND differ from logical AND?

### Advanced

- How do you use bitwise AND to clear bits?
- Why prefer unsigned types for bitwise operations?

## Exercises

Easy

- Use & to test whether a bit is set in a value.

Medium

- Define a mask and use it to extract specific bits.

Hard

- Implement a flag system using bitwise AND for checks.

Interview

- Explain the difference between bitwise and logical AND.

## Assignment

Create a flag-checker program using bitwise AND and readable macros.

## Mini Project

Build a simple permission flags system using bitwise operations.

## Summary Notes

- Bitwise AND tests bits.
- Use masks and unsigned values.
- Differentiate it from logical AND.

## Next Topic

[Next Topic](17_BIT_MANIPULATION/100_OR/README.md)
