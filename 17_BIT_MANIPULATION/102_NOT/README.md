# 102 – NOT

## Overview

The bitwise NOT operator inverts every bit of an integer value.

## Why This Topic Matters

It is useful for bitwise complement operations and creating inverse masks.

## Learning Objectives

- Explain the key concepts behind NOT.
- Write C code that uses NOT correctly.
- Recognize how NOT fits into larger C programs and system design.

## Theory

Beginner: ~x flips all bits in x, producing the bitwise complement.

Intermediate: Use NOT to create inverted masks or to compute negative values in two's complement representation.

Advanced: Understand how bitwise NOT interacts with signed integers and why unsigned types are safer for bitwise operations.

## Internal Working

At the compiler level, NOT is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, NOT often maps to register operations, branch logic, or system calls.

## Syntax

unsigned int mask = ~0u;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("NOT example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("NOT example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("NOT example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("NOT example output\n");
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

- Using ~ on signed integers without considering representation.
- Assuming ~ creates a simple arithmetic negation.
- Applying ~ to values where the meaning is unclear.

## Best Practices

- Use unsigned types for bitwise NOT operations.
- Use it for mask inversion and complement calculations.
- Keep bitwise expressions explicit and documented.

## Interview Questions

### Beginner

- What does the ~ operator do?
- How does bitwise NOT affect bits?

### Intermediate

- Why is unsigned safer with bitwise NOT?
- What is the result of ~0?

### Advanced

- How does bitwise NOT relate to two's complement negation?
- What are use cases for inverted masks?

## Exercises

Easy

- Use ~ on an unsigned integer and print the result.

Medium

- Create an inverted mask and apply it to a value.

Hard

- Explain the output of bitwise NOT on signed and unsigned numbers.

Interview

- Describe the effect of bitwise NOT on a binary value.

## Assignment

Build a program that inverts bit masks with ~ and demonstrates the result.

## Mini Project

Create a bit mask toolkit with invert, set, clear, and toggle operations.

## Summary Notes

- Bitwise NOT inverts every bit.
- Use unsigned types for clarity.
- Employ it for mask inversion.

## Next Topic

[Next Topic](17_BIT_MANIPULATION/103_Left_Shift/README.md)
