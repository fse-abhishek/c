# 24 – Relational

## Overview

Learn relational operators for comparing values and using those comparisons in conditional logic.

## Why This Topic Matters

Comparisons are essential for controlling flow, making decisions, and implementing logic in C programs.

## Learning Objectives

- Explain the key concepts behind Relational.
- Write C code that uses Relational correctly.
- Recognize how Relational fits into larger C programs and system design.

## Theory

Beginner: Relational operators include ==, !=, <, >, <=, and >=. They compare values and return 1 for true or 0 for false.

Intermediate: Use relational operators in if statements, loops, and expressions. Understand how comparisons differ for signed and unsigned values.

Advanced: Combine relational expressions with logical operators and consider how floating-point comparisons can be imprecise.

## Internal Working

At the compiler level, Relational is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Relational often maps to register operations, branch logic, or system calls.

## Syntax

Example: if (a > b) { ... } else if (a == b) { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Relational example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Relational example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Relational example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Relational example output\n");
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

- Using = instead of == in comparisons.
- Comparing floating-point values for exact equality.
- Mixing signed and unsigned values in comparisons.

## Best Practices

- Use parentheses for clarity in combined comparisons.
- Avoid exact equality for floating-point values.
- Write comparisons that are easy to read and understand.

## Interview Questions

### Beginner

- What is the relational operator for equality in C?
- What value does a comparison expression return?

### Intermediate

- Why should you avoid comparing floats using ==?
- How do you write a range check with relational operators?

### Advanced

- How can signed/unsigned comparisons produce unexpected results?
- What is short-circuit evaluation with combined relational expressions?

## Exercises

Easy

- Write comparisons using ==, !=, <, and >.

Medium

- Use relational operators in if statements to control program flow.

Hard

- Create a program that validates numeric input using multiple comparisons.

Interview

- Discuss how C represents boolean results from relational expressions.

## Assignment

Implement a value comparison utility that reports equal, greater, or smaller results.

## Mini Project

Build a simple validation module that checks input values against limits and conditions.

## Summary Notes

- Relational operators compare values.
- Use them in control flow and decision-making.
- Be careful with floating-point and signed/unsigned comparisons.

## Next Topic

[Next Topic](04_OPERATORS/25_Logical/README.md)
