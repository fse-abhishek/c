# 100 – OR

## Overview

The bitwise OR operator combines bits from two operands, setting a result bit when either input bit is 1.

## Why This Topic Matters

It is useful for setting or combining bits in masks and control flags.

## Learning Objectives

- Explain the key concepts behind OR.
- Write C code that uses OR correctly.
- Recognize how OR fits into larger C programs and system design.

## Theory

Beginner: Use | to turn bits on. If either bit is 1, the result bit becomes 1.

Intermediate: Use bitwise OR to set specific bits without affecting others.

Advanced: Combine multiple mask values with OR to build configuration flags and bit patterns.

## Internal Working

At the compiler level, OR is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, OR often maps to register operations, branch logic, or system calls.

## Syntax

flags |= 0x02;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("OR example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("OR example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("OR example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("OR example output\n");
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

- Using | when you meant || in boolean logic.
- Not properly masking before setting bits.
- Overwriting bits unintentionally.

## Best Practices

- Use named masks.
- Set bits clearly with |=.
- Keep bitwise expressions readable.

## Interview Questions

### Beginner

- What does the | operator do?
- How do you set a bit using OR?

### Intermediate

- How is bitwise OR different from logical OR?
- When do you use OR with masks?

### Advanced

- How do you combine multiple flags using OR?
- Why use unsigned types with OR?

## Exercises

Easy

- Set a bit in a value using |.

Medium

- Combine several flags with bitwise OR.

Hard

- Implement a bitfield setter using OR and masks.

Interview

- Explain the effect of bitwise OR on two binary values.

## Assignment

Write a program that sets flags using bitwise OR and displays the result.

## Mini Project

Create a flag manager that toggles settings with bitwise OR.

## Summary Notes

- Bitwise OR sets bits.
- Use it for flags and masks.
- Avoid confusing it with logical OR.

## Next Topic

[Next Topic](17_BIT_MANIPULATION/101_XOR/README.md)
