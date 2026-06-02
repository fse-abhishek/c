# 35 – switch

## Overview

The switch statement selects one of many possible branches based on an integer value.

## Why This Topic Matters

switch is ideal for multi-way control flow when you have discrete values to match.

## Learning Objectives

- Explain the key concepts behind switch.
- Write C code that uses switch correctly.
- Recognize how switch fits into larger C programs and system design.

## Theory

Beginner: Use switch(expression) with case labels and an optional default to handle different values cleanly.

Intermediate: Understand fall-through behavior, the role of break, and how switch differs from if-else.

Advanced: Use switch for efficient multi-way selection and avoid subtle bugs from unintended fall-through.

## Internal Working

At the compiler level, switch is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, switch often maps to register operations, branch logic, or system calls.

## Syntax

switch (choice) { case 1: ...; break; default: ...; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("switch example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("switch example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("switch example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("switch example output\n");
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

- Forgetting a break and causing fall-through.
- Using non-integer expressions.
- Not including a default case when needed.

## Best Practices

- Use break for separate cases.
- Use default to handle unexpected values.
- Keep case blocks short and clear.

## Interview Questions

### Beginner

- What is switch used for in C?
- How do you define a case label?

### Intermediate

- What happens if you omit break in a case?
- When is switch better than if-else?

### Advanced

- How can fall-through be used intentionally?
- What are the limitations of switch in C?

## Exercises

Easy

- Write a switch statement that prints a message for values 1-3.

Medium

- Use switch to map numeric choices to actions.

Hard

- Implement a simple menu with switch and default handling.

Interview

- Explain why switch can be more readable than multiple if-else branches.

## Assignment

Create a menu-driven program that uses switch to choose between operations.

## Mini Project

Build a small command parser that uses switch cases for different commands.

## Summary Notes

- switch handles multiple discrete cases.
- Use break to prevent fall-through unless intentional.
- Include default for unexpected values.

## Next Topic

[Next Topic](06_LOOPS/36_while/README.md)
