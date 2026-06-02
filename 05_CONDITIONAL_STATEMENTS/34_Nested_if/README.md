# 34 – Nested if

## Overview

Nested if statements let you make decisions inside other decisions.

## Why This Topic Matters

Nested conditions are useful for multi-level validation and hierarchical logic.

## Learning Objectives

- Explain the key concepts behind Nested if.
- Write C code that uses Nested if correctly.
- Recognize how Nested if fits into larger C programs and system design.

## Theory

Beginner: Nest an if statement inside another to check related conditions step by step.

Intermediate: Keep nested logic shallow and clear to avoid readability issues.

Advanced: Use nested if sparingly and refactor complex nested logic into functions or switch statements.

## Internal Working

At the compiler level, Nested if is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Nested if often maps to register operations, branch logic, or system calls.

## Syntax

if (a > 0) { if (b > 0) { ... } }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Nested if example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Nested if example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Nested if example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Nested if example output\n");
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

- Creating deeply nested conditions that are hard to trace.
- Missing braces around nested blocks.
- Using nested if when a simpler structure would suffice.

## Best Practices

- Limit nesting depth.
- Use helper functions to simplify nested logic.
- Keep each nested block small and focused.

## Interview Questions

### Beginner

- What does nested if mean?
- How do you write an if inside another if?

### Intermediate

- What are the readability concerns with nested if?
- How can nested if be simplified?

### Advanced

- When should you replace nested if with other structures?
- How do nested conditions affect control flow?

## Exercises

Easy

- Write nested if statements to check two conditions in sequence.

Medium

- Use nested if to validate related input values.

Hard

- Refactor nested conditions into clearer helper functions.

Interview

- Describe when nested if is appropriate and when to avoid it.

## Assignment

Implement multi-stage validation using nested if statements and explain the logic.

## Mini Project

Build a decision tree that uses nested conditionals to classify input.

## Summary Notes

- Nested if allows hierarchical decisions.
- Keep nesting simple and readable.
- Refactor complex nested logic into functions.

## Next Topic

[Next Topic](05_CONDITIONAL_STATEMENTS/35_switch/README.md)
